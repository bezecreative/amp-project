"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

interface RequestAccessModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function RequestAccessModal({ open, onOpenChange }: RequestAccessModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleClose = () => {
    onOpenChange(false)
    // Reset state after close animation
    setTimeout(() => setSubmitted(false), 300)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[480px] bg-white border-gray-200 rounded-2xl">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#003264]">
                Request Access to AMP MCP
              </DialogTitle>
              <DialogDescription className="text-gray-500">
                Submit your information below and our team will follow up with next steps.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="firstName" className="text-[#003264] font-medium">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    className="bg-[#EDF2F9] border-gray-200 text-[#003264] placeholder:text-gray-400 focus:border-[#0B75E1] focus:ring-[#0B75E1] rounded-xl"
                    placeholder="John"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="lastName" className="text-[#003264] font-medium">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    className="bg-[#EDF2F9] border-gray-200 text-[#003264] placeholder:text-gray-400 focus:border-[#0B75E1] focus:ring-[#0B75E1] rounded-xl"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="company" className="text-[#003264] font-medium">Company</Label>
                <Input
                  id="company"
                  name="company"
                  required
                  className="bg-[#EDF2F9] border-gray-200 text-[#003264] placeholder:text-gray-400 focus:border-[#0B75E1] focus:ring-[#0B75E1] rounded-xl"
                  placeholder="Your Car Wash Company"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-[#003264] font-medium">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-[#EDF2F9] border-gray-200 text-[#003264] placeholder:text-gray-400 focus:border-[#0B75E1] focus:ring-[#0B75E1] rounded-xl"
                  placeholder="john@company.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone" className="text-[#003264] font-medium">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="bg-[#EDF2F9] border-gray-200 text-[#003264] placeholder:text-gray-400 focus:border-[#0B75E1] focus:ring-[#0B75E1] rounded-xl"
                  placeholder="(555) 123-4567"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-[#0B75E1] hover:bg-[#003264] text-white font-semibold rounded-full"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
              <p className="text-xs text-gray-400 text-center mt-2">
                AMP MCP access is reviewed before setup. Access is governed by AMP authentication and role-based permissions.
              </p>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#0B75E1]/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8 text-[#0B75E1]" />
            </div>
            <h3 className="text-2xl font-bold text-[#003264] mb-3">Request Received</h3>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Thanks for requesting a demo of AMP MCP. Our team will review your submission and follow up with next steps.
            </p>
            <Button
              onClick={handleClose}
              className="mt-6 bg-[#0B75E1] hover:bg-[#003264] text-white font-semibold rounded-full"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
