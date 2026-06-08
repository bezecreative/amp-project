import { Plug, MessageSquare, Database } from "lucide-react"

export function WhatIsMcpSection() {
  return (
    <section id="what-is-mcp" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#003264] mb-6 text-balance">
            What is MCP?
          </h2>
          <p className="text-lg text-gray-600 text-balance leading-relaxed">
            Model Context Protocol (MCP) is an open standard that allows AI assistants to securely connect 
            to external data sources. Think of it as a universal translator between your business systems and AI tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#EDF2F9] hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
              <Plug className="w-7 h-7 text-[#0B75E1]" />
            </div>
            <h3 className="text-xl font-semibold text-[#003264] mb-3">Secure Connection</h3>
            <p className="text-gray-600 leading-relaxed">
              MCP creates a secure, authenticated bridge between AI assistants and your AMP data. 
              Your data never leaves your control.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#EDF2F9] hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
              <MessageSquare className="w-7 h-7 text-[#0B75E1]" />
            </div>
            <h3 className="text-xl font-semibold text-[#003264] mb-3">Natural Language</h3>
            <p className="text-gray-600 leading-relaxed">
              Ask questions in plain English. No need to learn complex query languages or navigate 
              dashboards. Just ask what you want to know.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#EDF2F9] hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
              <Database className="w-7 h-7 text-[#0B75E1]" />
            </div>
            <h3 className="text-xl font-semibold text-[#003264] mb-3">Real-Time Data</h3>
            <p className="text-gray-600 leading-relaxed">
              Get answers powered by your actual AMP data, not generic information. 
              Every response is grounded in your real business metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
