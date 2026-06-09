"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

interface HeroSectionProps {
  onRequestAccess: () => void
}

const conversations = [
  {
    question: "Which locations underperformed yesterday?",
    response: "Based on your AMP data, I found 3 locations that underperformed compared to their weekly averages:",
    hasArtifact: true,
    artifactType: "table",
  },
  {
    question: "What's my MRR trend over the last 6 months?",
    response: "Your MRR has grown 23% over the past 6 months. Here's the trend:",
    hasArtifact: true,
    artifactType: "chart",
  },
  {
    question: "Compare membership churn rates by plan type",
    response: "Premium plans show significantly better retention. Here's the breakdown:",
    hasArtifact: false,
  },
  {
    question: "Show me weather impact on revenue last week",
    response: "Rain days showed an average 31% decrease in wash volume. Clear days averaged $12,400 in revenue vs $8,500 on rainy days.",
    hasArtifact: false,
  },
]

export function HeroSection({ onRequestAccess }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedQuestion, setDisplayedQuestion] = useState("")
  const [displayedResponse, setDisplayedResponse] = useState("")
  const [isTypingQuestion, setIsTypingQuestion] = useState(true)
  const [isTypingResponse, setIsTypingResponse] = useState(false)
  const [showArtifact, setShowArtifact] = useState(false)

  useEffect(() => {
    const conversation = conversations[currentIndex]
    
    if (isTypingQuestion) {
      if (displayedQuestion.length < conversation.question.length) {
        const timeout = setTimeout(() => {
          setDisplayedQuestion(conversation.question.slice(0, displayedQuestion.length + 1))
        }, 40)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTypingQuestion(false)
          setIsTypingResponse(true)
        }, 500)
        return () => clearTimeout(timeout)
      }
    }
    
    if (isTypingResponse) {
      if (displayedResponse.length < conversation.response.length) {
        const timeout = setTimeout(() => {
          setDisplayedResponse(conversation.response.slice(0, displayedResponse.length + 2))
        }, 15)
        return () => clearTimeout(timeout)
      } else {
        if (conversation.hasArtifact && !showArtifact) {
          const timeout = setTimeout(() => {
            setShowArtifact(true)
          }, 300)
          return () => clearTimeout(timeout)
        }
        const timeout = setTimeout(() => {
          setDisplayedQuestion("")
          setDisplayedResponse("")
          setShowArtifact(false)
          setIsTypingQuestion(true)
          setIsTypingResponse(false)
          setCurrentIndex((prev) => (prev + 1) % conversations.length)
        }, 4000)
        return () => clearTimeout(timeout)
      }
    }
  }, [currentIndex, displayedQuestion, displayedResponse, isTypingQuestion, isTypingResponse, showArtifact])

  const currentConversation = conversations[currentIndex]

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Main content */}
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-white via-[#EDF2F9]/50 to-white">
        {/* Subtle background accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0B75E1]/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-[#0B75E1]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Hero Text Content */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
            {/* Introducing badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EDF2F9] border border-[#0B75E1]/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#0B75E1]" />
              <span className="text-sm text-[#003264] font-semibold tracking-wide">Introducing AMP MCP</span>
            </div>
            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#003264] text-balance mb-6">
              Your car wash runs on AMP.{" "}
              <span className="text-[#0B75E1]">Now your AI can too.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 text-balance leading-relaxed">
              AMP MCP connects your car wash data directly to AI assistants like Claude. 
              Ask questions in plain language and get insights powered by your real business data.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button 
                onClick={onRequestAccess} 
                size="lg" 
                className="bg-[#0B75E1] hover:bg-[#003264] text-white font-semibold px-8 py-6 text-lg rounded-full transition-colors"
              >
                Request Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#0B75E1] text-[#0B75E1] hover:bg-[#0B75E1] hover:text-white font-semibold px-8 py-6 text-lg rounded-full transition-colors"
                asChild
              >
                <a href="https://ampmemberships.com" target="_blank" rel="noopener noreferrer">
                  Connect with AMP
                </a>
              </Button>
            </div>
          </div>

          {/* Laptop Mockup with Claude */}
          <div className="max-w-5xl mx-auto">
            {/* Laptop frame */}
            <div className="relative mx-auto">
              {/* Screen bezel */}
              <div className="relative rounded-t-2xl bg-[#1a1a1a] p-2 md:p-3 shadow-2xl">
                <div className="rounded-lg bg-white overflow-hidden">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-gray-100 border-b border-gray-200">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27CA40]" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="px-3 md:px-4 py-1 md:py-1.5 rounded-lg bg-white border border-gray-200 text-xs text-gray-600 font-medium flex items-center gap-2">
                        <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                        claude.ai
                      </div>
                    </div>
                    <div className="w-16 md:w-20" />
                  </div>
                  
                  {/* Claude chat interface */}
                  <div className="p-4 md:p-8 bg-[#FAFAFA] min-h-[380px] md:min-h-[450px]">
                    {/* Conversation */}
                    <div className="space-y-4 max-w-3xl mx-auto">
                      {/* User message */}
                      <div className="flex justify-end">
                        <div className="max-w-md px-4 md:px-5 py-2.5 md:py-3 rounded-2xl bg-[#0B75E1] text-white">
                          <p className="text-sm md:text-[15px] leading-relaxed">
                            {displayedQuestion}
                            {isTypingQuestion && <span className="inline-block w-0.5 h-4 md:h-5 bg-white/80 ml-1 animate-pulse align-middle" />}
                          </p>
                        </div>
                      </div>
                      
                      {/* Claude response */}
                      {(displayedResponse || isTypingResponse) && (
                        <div className="flex items-start gap-2 md:gap-3">
                          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#D97757] flex items-center justify-center flex-shrink-0 shadow-sm">
                            <span className="text-white font-semibold text-sm">C</span>
                          </div>
                          <div className="flex-1 space-y-3">
                            <div className="px-4 md:px-5 py-2.5 md:py-3 rounded-2xl bg-white border border-gray-100 shadow-sm">
                              <p className="text-sm md:text-[15px] text-gray-700 leading-relaxed">
                                {displayedResponse}
                                {isTypingResponse && displayedResponse.length < currentConversation.response.length && (
                                  <span className="inline-block w-0.5 h-4 md:h-5 bg-gray-400 ml-1 animate-pulse align-middle" />
                                )}
                              </p>
                            </div>
                            
                            {/* Artifact */}
                            {showArtifact && currentConversation.hasArtifact && (
                              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
                                {currentConversation.artifactType === "table" && (
                                  <div>
                                    <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
                                      <svg className="w-4 h-4 text-[#D97757]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                                        <path d="M3 9h18M9 21V9"/>
                                      </svg>
                                      <span className="text-xs font-medium text-gray-600">Location Performance</span>
                                    </div>
                                    <div className="p-3">
                                      <table className="w-full text-xs md:text-sm">
                                        <thead>
                                          <tr className="border-b border-gray-100">
                                            <th className="text-left py-2 px-2 text-gray-500 font-medium">Location</th>
                                            <th className="text-right py-2 px-2 text-gray-500 font-medium">Variance</th>
                                            <th className="text-left py-2 px-2 text-gray-500 font-medium">Reason</th>
                                          </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                          <tr className="border-b border-gray-50">
                                            <td className="py-2 px-2">Downtown Express</td>
                                            <td className="py-2 px-2 text-right text-red-500 font-medium">-23%</td>
                                            <td className="py-2 px-2 text-gray-500">Heavy rain 10am-3pm</td>
                                          </tr>
                                          <tr className="border-b border-gray-50">
                                            <td className="py-2 px-2">Westside Auto Spa</td>
                                            <td className="py-2 px-2 text-right text-red-500 font-medium">-18%</td>
                                            <td className="py-2 px-2 text-gray-500">Membership churn</td>
                                          </tr>
                                          <tr>
                                            <td className="py-2 px-2">Airport Location</td>
                                            <td className="py-2 px-2 text-right text-red-500 font-medium">-12%</td>
                                            <td className="py-2 px-2 text-gray-500">Labor shortage</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                )}
                                
                                {currentConversation.artifactType === "chart" && (
                                  <div>
                                    <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
                                      <svg className="w-4 h-4 text-[#D97757]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 3v18h18"/>
                                        <path d="M18 9l-5 5-4-4-3 3"/>
                                      </svg>
                                      <span className="text-xs font-medium text-gray-600">MRR Trend - Last 6 Months</span>
                                    </div>
                                    <div className="p-4">
                                      <div className="flex items-end justify-between h-32 gap-3 px-2">
                                        {[
                                          { month: "Jan", height: 52, amount: "$847K" },
                                          { month: "Feb", height: 58, amount: "$872K" },
                                          { month: "Mar", height: 68, amount: "$915K" },
                                          { month: "Apr", height: 80, amount: "$958K" },
                                          { month: "May", height: 96, amount: "$1.01M" },
                                          { month: "Jun", height: 112, amount: "$1.04M" },
                                        ].map((item, i) => (
                                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                            <div 
                                              className="w-full bg-gradient-to-t from-[#D97757] to-[#E8A87C] rounded-t-sm"
                                              style={{ height: `${item.height}px`, minWidth: '24px' }}
                                            />
                                            <span className="text-[10px] md:text-xs text-gray-500 font-medium">{item.month}</span>
                                          </div>
                                        ))}
                                      </div>
                                      <div className="mt-3 flex items-center justify-center gap-4 text-xs">
                                        <span className="text-gray-500">Jan: $847K</span>
                                        <span className="text-[#D97757] font-semibold">Jun: $1.04M (+23%)</span>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Laptop keyboard base */}
              <div className="relative">
                <div className="h-3 md:h-4 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-lg mx-1">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0.5 md:top-1 w-16 md:w-24 h-1 md:h-1.5 bg-[#3a3a3a] rounded-full" />
                </div>
                {/* Base shadow/edge */}
                <div className="h-1.5 md:h-2 bg-[#1a1a1a] mx-8 md:mx-16 rounded-b-xl shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
