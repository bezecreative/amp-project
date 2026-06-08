"use client"

import { useState } from "react"
import { RequestAccessModal } from "@/components/request-access-modal"
import { HeroSection } from "@/components/sections/hero-section"
import { WhatIsMcpSection } from "@/components/sections/what-is-mcp-section"
import { WhyItMattersSection } from "@/components/sections/why-it-matters-section"
import { DataFoundationSection } from "@/components/sections/data-foundation-section"
import { DataSourcesSection } from "@/components/sections/data-sources-section"
import { SecuritySection } from "@/components/sections/security-section"
import { AiPlatformsSection } from "@/components/sections/ai-platforms-section"
import { FaqSection } from "@/components/sections/faq-section"
import { FinalCtaSection } from "@/components/sections/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onRequestAccess={() => setModalOpen(true)} />
      <WhatIsMcpSection />
      <WhyItMattersSection />
      <DataSourcesSection />
      <DataFoundationSection />
      <SecuritySection />
      <AiPlatformsSection />
      <FaqSection />
      <FinalCtaSection onRequestAccess={() => setModalOpen(true)} />
      <Footer />
      <RequestAccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </main>
  )
}
