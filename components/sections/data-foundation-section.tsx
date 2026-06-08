"use client"

import { Database, Layers, RefreshCw, Workflow } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function DataFoundationSection() {
  const [animationPhase, setAnimationPhase] = useState(0)
  // Phase 0: initial state, bars at 0%
  // Phase 1: bars filling up sequentially
  // Phase 2: bars complete, energy starts traveling down the line
  // Phase 3: energy reaches MCP Protocol badge
  // Phase 4: energy continues to AI box
  // Phase 5: AI box fully powered - holds for a while then resets

  useEffect(() => {
    const phaseTimings = [
      { delay: 1000, next: 1 },   // Start filling bars (longer initial delay)
      { delay: 2500, next: 2 },   // Bars filled slowly, energy starts traveling
      { delay: 1000, next: 3 },   // Energy at MCP badge
      { delay: 1000, next: 4 },   // Energy continuing down
      { delay: 1200, next: 5 },   // Energy reaches AI box
      { delay: 8000, next: 0 },   // Hold at full power, then reset after ~15s total cycle
    ]

    const timer = setTimeout(() => {
      setAnimationPhase(phaseTimings[animationPhase].next)
    }, phaseTimings[animationPhase].delay)
    return () => clearTimeout(timer)
  }, [animationPhase])

  const features = [
    {
      icon: Database,
      title: "89 Data Sources",
      description: "Access revenue, memberships, transactions, customers, labor, marketing, weather, and more - all through natural conversation."
    },
    {
      icon: Layers,
      title: "Multi-Location Support",
      description: "Query across all your locations or drill down into specific sites. Compare performance effortlessly."
    },
    {
      icon: RefreshCw,
      title: "Always Current",
      description: "Data syncs continuously with your AMP system. Get answers based on the latest information available."
    },
    {
      icon: Workflow,
      title: "Contextual Understanding",
      description: "The AI understands car wash terminology and business context, making conversations natural and productive."
    }
  ]

  const dataSources = [
    { name: "Revenue", targetWidth: 100, delay: 0 },
    { name: "Memberships", targetWidth: 100, delay: 200 },
    { name: "Customers", targetWidth: 100, delay: 400 },
    { name: "Labor", targetWidth: 100, delay: 600 },
    { name: "Weather", targetWidth: 100, delay: 800 },
    { name: "Marketing", targetWidth: 100, delay: 1000 },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Data visualization */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-2xl bg-[#EDF2F9] p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#003264] flex items-center justify-center">
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMP_Icon_CobaltWhite-XwgqpxeBCfYLiU38Rz8xSTvTsdEGxM.png"
                      alt="AMP"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003264]">AMP Data Platform</h4>
                    <p className="text-xs text-gray-500">Your single source of truth</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {dataSources.map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white">
                      <p className="text-sm text-[#003264] font-medium">{item.name}</p>
                      <div className="mt-2 h-2 bg-[#0B75E1]/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#0B75E1] rounded-full"
                          style={{ 
                            width: animationPhase >= 1 ? `${item.targetWidth}%` : '0%',
                            transition: `width 1200ms ease-out ${item.delay}ms`,
                            boxShadow: animationPhase >= 1 
                              ? '0 0 10px rgba(11, 117, 225, 0.7)' 
                              : 'none'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Connection line with energy flow */}
                <div className="flex justify-center my-6">
                  <div className="flex flex-col items-center gap-0 relative">
                    {/* Top line segment */}
                    <div className="relative w-1.5 h-10 bg-[#0B75E1]/20 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 w-full bg-[#0B75E1] rounded-full"
                        style={{
                          height: animationPhase >= 2 ? '100%' : '0%',
                          transition: 'height 800ms ease-out',
                          boxShadow: animationPhase >= 2 
                            ? '0 0 12px rgba(11, 117, 225, 0.9), 0 0 24px rgba(11, 117, 225, 0.5)' 
                            : 'none'
                        }}
                      />
                    </div>
                    
                    {/* MCP Protocol badge */}
                    <div 
                      className="px-5 py-2 rounded-full bg-white border-2 text-sm font-semibold my-1"
                      style={{
                        borderColor: animationPhase >= 3 ? '#0B75E1' : 'rgba(11, 117, 225, 0.3)',
                        color: '#0B75E1',
                        transition: 'all 600ms ease-out',
                        boxShadow: animationPhase >= 3
                          ? '0 0 20px rgba(11, 117, 225, 0.7), 0 0 40px rgba(11, 117, 225, 0.3)'
                          : 'none'
                      }}
                    >
                      MCP Protocol
                    </div>
                    
                    {/* Bottom line segment */}
                    <div className="relative w-1.5 h-10 bg-[#0B75E1]/20 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 w-full bg-[#0B75E1] rounded-full"
                        style={{
                          height: animationPhase >= 4 ? '100%' : '0%',
                          transition: 'height 800ms ease-out',
                          boxShadow: animationPhase >= 4 
                            ? '0 0 12px rgba(11, 117, 225, 0.9), 0 0 24px rgba(11, 117, 225, 0.5)' 
                            : 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* AI destination */}
                <div 
                  className="flex items-center justify-center gap-4 p-5 rounded-xl bg-white border-2"
                  style={{
                    transition: 'all 800ms ease-out',
                    borderColor: animationPhase >= 5 ? '#0B75E1' : 'transparent',
                    boxShadow: animationPhase >= 5 
                      ? '0 0 30px rgba(11, 117, 225, 0.8), 0 0 60px rgba(11, 117, 225, 0.5), inset 0 0 40px rgba(11, 117, 225, 0.2)'
                      : 'none',
                    background: animationPhase >= 5 
                      ? 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(11, 117, 225, 0.1) 100%)'
                      : 'white'
                  }}
                >
                  <div className="text-center">
                    <p 
                      className="text-sm font-semibold"
                      style={{ 
                        color: animationPhase >= 5 ? '#0B75E1' : '#003264',
                        transition: 'color 600ms ease-out'
                      }}
                    >
                      AI Assistants
                    </p>
                    <p className="text-xs text-gray-400">Claude, ChatGPT, Gemini</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-[#003264] mb-6 text-balance">
              Built on AMP&apos;s data foundation
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              AMP MCP leverages the same robust data infrastructure that powers your daily operations. 
              Every insight is grounded in your actual business data, ensuring accuracy and relevance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0B75E1]/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#0B75E1]" />
                  </div>
                  <h3 className="font-semibold text-[#003264]">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
