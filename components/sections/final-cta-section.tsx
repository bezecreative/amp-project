"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface FinalCtaSectionProps {
  onRequestAccess: () => void
}

export function FinalCtaSection({ onRequestAccess }: FinalCtaSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-[#003264] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0B75E1]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMP_Logo_CobaltWhite-SOeeDAHdTc74gLjj9WJ94o8rR2oRQh.png"
            alt="AMP"
            width={120}
            height={34}
          />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
          Ready to talk to your car wash data?
        </h2>
        
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
          Join the early access program and be among the first car wash operators to unlock 
          the power of AI-driven insights from your AMP data.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={onRequestAccess} 
            size="lg" 
            className="bg-[#0B75E1] text-white hover:bg-white hover:text-[#003264] font-semibold px-8 py-6 text-lg rounded-full"
          >
            Request Access
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#003264] font-semibold px-8 py-6 text-lg rounded-full"
            asChild
          >
            <a href="https://ampmemberships.com" target="_blank" rel="noopener noreferrer">
              Connect with AMP
            </a>
          </Button>
        </div>

        <p className="mt-8 text-sm text-white/60">
          Not an AMP customer yet? Connect with AMP to learn how we can power your car wash operations.
        </p>
      </div>
    </section>
  )
}
