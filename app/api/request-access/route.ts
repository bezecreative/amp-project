import { NextRequest, NextResponse } from "next/server"

const AC_API_URL = process.env.ACTIVECAMPAIGN_API_URL
const AC_API_KEY = process.env.ACTIVECAMPAIGN_API_KEY
const AC_LIST_ID = process.env.ACTIVECAMPAIGN_LIST_ID

export async function POST(req: NextRequest) {
  if (!AC_API_URL || !AC_API_KEY || !AC_LIST_ID) {
    console.error("Missing ActiveCampaign environment variables")
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
  }

  const { firstName, lastName, email, phone, company } = await req.json()

  if (!firstName || !lastName || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const headers = {
    "Api-Token": AC_API_KEY,
    "Content-Type": "application/json",
  }

  // Step 1: Create or update the contact
  const contactRes = await fetch(`${AC_API_URL}/api/3/contacts`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      contact: {
        email,
        firstName,
        lastName,
        phone: phone ?? "",
        fieldValues: company
          ? [{ field: "COMPANY", value: company }]
          : [],
      },
    }),
  })

  if (!contactRes.ok) {
    // ActiveCampaign returns 422 if contact already exists — use sync endpoint instead
    const syncRes = await fetch(`${AC_API_URL}/api/3/contact/sync`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        contact: {
          email,
          firstName,
          lastName,
          phone: phone ?? "",
        },
      }),
    })

    if (!syncRes.ok) {
      const err = await syncRes.text()
      console.error("AC contact sync error:", err)
      return NextResponse.json({ error: "Failed to create contact" }, { status: 500 })
    }
  }

  // Step 2: Fetch the contact ID by email
  const lookupRes = await fetch(
    `${AC_API_URL}/api/3/contacts?email=${encodeURIComponent(email)}`,
    { headers }
  )
  const lookupData = await lookupRes.json()
  const contactId = lookupData?.contacts?.[0]?.id

  if (!contactId) {
    return NextResponse.json({ error: "Could not retrieve contact" }, { status: 500 })
  }

  // Step 3: Add contact to list
  const listRes = await fetch(`${AC_API_URL}/api/3/contactLists`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      contactList: {
        list: AC_LIST_ID,
        contact: contactId,
        status: 1, // 1 = subscribed
      },
    }),
  })

  if (!listRes.ok) {
    const err = await listRes.text()
    console.error("AC list subscription error:", err)
    return NextResponse.json({ error: "Failed to add contact to list" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
