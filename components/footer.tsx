import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMP_Logo_CobaltNavy-6x4O9yK3ShNZbnkxGLIShdohCCFDGq.png"
              alt="AMP"
              width={80}
              height={22}
              className="h-6 w-auto"
            />
            <span className="text-sm font-semibold text-[#0B75E1] border-l border-gray-200 pl-3">MCP</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-[#003264] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#003264] transition-colors">
              Terms of Service
            </Link>
            <Link 
              href="https://ampmemberships.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#003264] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AMP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
