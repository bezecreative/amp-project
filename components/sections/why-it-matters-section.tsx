"use client"

import { Clock, TrendingUp, Users, Zap } from "lucide-react"
import { useState, useEffect } from "react"

const dataSets = [
  {
    bars: [65, 78, 82, 74, 91, 88, 95],
    totalWashes: "2,847",
    percentChange: "+12.4%",
    revenue: "$48.2K"
  },
  {
    bars: [72, 85, 68, 92, 78, 96, 89],
    totalWashes: "3,124",
    percentChange: "+8.7%",
    revenue: "$52.8K"
  },
  {
    bars: [58, 71, 89, 76, 84, 92, 87],
    totalWashes: "2,956",
    percentChange: "+15.2%",
    revenue: "$45.6K"
  }
]

export function WhyItMattersSection() {
  const [dataIndex, setDataIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((prev) => (prev + 1) % dataSets.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const currentData = dataSets[dataIndex]

  const benefits = [
    {
      icon: Clock,
      title: "Save Hours Every Week",
      description: "Stop digging through reports and dashboards. Get instant answers to the questions that matter most to your business."
    },
    {
      icon: TrendingUp,
      title: "Spot Trends Faster",
      description: "AI can analyze patterns across all your locations and time periods, surfacing insights you might have missed."
    },
    {
      icon: Users,
      title: "Empower Your Team",
      description: "Anyone can ask questions and get answers. No technical expertise required to access your business intelligence."
    },
    {
      icon: Zap,
      title: "Make Better Decisions",
      description: "With instant access to data-driven insights, you can act faster and more confidently on opportunities and issues."
    }
  ]

  return (
    <section id="why-it-matters" className="py-20 md:py-32 bg-gradient-to-b from-white to-[#EDF2F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#003264] mb-6 text-balance">
              Why it matters for car wash operators
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Your AMP system already captures everything happening across your car wash operations. 
              AMP MCP unlocks that data in a completely new way, letting you have natural conversations 
              with your business data.
            </p>
            
            <div className="flex flex-col gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <benefit.icon className="w-6 h-6 text-[#0B75E1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#003264] mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats visualization */}
          <div className="relative">
            <div className="rounded-2xl bg-white p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-semibold text-[#003264]">Weekly Performance Overview</h3>
                <span className="text-xs text-[#0B75E1] font-medium px-3 py-1 bg-[#0B75E1]/10 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#0B75E1] rounded-full animate-pulse" />
                  Live from AMP
                </span>
              </div>
              
              {/* Animated chart */}
              <div className="h-48 flex items-end justify-between gap-3 mb-6 px-2">
                {currentData.bars.map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full">
                    <div className="flex-1 w-full flex items-end">
                      <div 
                        className="w-full min-w-[20px] rounded-lg bg-gradient-to-t from-[#0B75E1] to-[#3B9AE8] transition-all duration-700 ease-in-out"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 font-medium">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <div>
                  <p className="text-2xl font-bold text-[#003264] transition-all duration-500">{currentData.totalWashes}</p>
                  <p className="text-xs text-gray-400 font-medium">Total Washes</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0B75E1] transition-all duration-500">{currentData.percentChange}</p>
                  <p className="text-xs text-gray-400 font-medium">vs Last Week</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#003264] transition-all duration-500">{currentData.revenue}</p>
                  <p className="text-xs text-gray-400 font-medium">Revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
