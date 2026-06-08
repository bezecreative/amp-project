"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface NavbarProps {
  onRequestAccess: () => void
}

export function Navbar({ onRequestAccess }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMP_Logo_CobaltNavy-6x4O9yK3ShNZbnkxGLIShdohCCFDGq.png"
            alt="AMP"
            width={100}
            height={28}
            className="h-7 w-auto"
          />
          <span className="text-sm font-semibold text-[#0B75E1] border-l border-gray-200 pl-3">MCP</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#what-is-mcp" className="text-sm text-gray-500 hover:text-[#003264] transition-colors">
            What is MCP
          </Link>
          <Link href="#why-it-matters" className="text-sm text-gray-500 hover:text-[#003264] transition-colors">
            Benefits
          </Link>
          <Link href="#security" className="text-sm text-gray-500 hover:text-[#003264] transition-colors">
            Security
          </Link>
          <Link href="#faq" className="text-sm text-gray-500 hover:text-[#003264] transition-colors">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://ampmemberships.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-sm font-medium text-[#0B75E1] hover:text-[#003264] transition-colors"
          >
            Connect with AMP
          </Link>
          <Button 
            onClick={onRequestAccess} 
            className="bg-[#0B75E1] hover:bg-[#003264] text-white font-semibold rounded-full px-6"
          >
            Request Access
          </Button>
        </div>
      </div>
    </header>
  )
}
