"use client"

import { useState, useEffect } from "react"

const exampleQuestions = [
  "Which locations underperformed yesterday, and why?",
  "What's my MRR trend over the last 6 months?",
  "Show me the busiest hours across all my locations",
  "Compare membership churn rates by plan type",
  "Which employees have the highest sign-up conversions?",
  "What was the weather impact on revenue last week?",
  "Show me my top referrers and their ROI",
  "How does this month compare to the same month last year?"
]

export function AskQuestionsSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const question = exampleQuestions[currentQuestion]
    let charIndex = 0
    setDisplayText("")
    setIsTyping(true)

    const typingInterval = setInterval(() => {
      if (charIndex < question.length) {
        setDisplayText(question.slice(0, charIndex + 1))
        charIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
        
        // Wait then move to next question
        setTimeout(() => {
          setCurrentQuestion((prev) => (prev + 1) % exampleQuestions.length)
        }, 3000)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [currentQuestion])

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#003264] mb-6 text-balance">
            Ask questions like an operator
          </h2>
          <p className="text-lg text-gray-600 text-balance leading-relaxed">
            No SQL. No complex filters. No training required. Just ask what you want to know 
            in the same way you would ask a colleague.
          </p>
        </div>

        {/* Animated question display */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-[#EDF2F9] p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#0B75E1] animate-pulse" />
              <span className="text-sm text-gray-500 font-medium">Ask AMP anything...</span>
            </div>
            
            <div className="min-h-[80px] flex items-center">
              <p className="text-2xl md:text-3xl text-[#003264] font-semibold">
                {displayText}
                {isTyping && <span className="inline-block w-0.5 h-8 bg-[#0B75E1] ml-1 animate-pulse">&nbsp;</span>}
              </p>
            </div>
          </div>

          {/* Question pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {exampleQuestions.slice(0, 4).map((question, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentQuestion === index
                    ? "bg-[#0B75E1] text-white"
                    : "bg-white text-gray-500 hover:text-[#003264] border border-gray-200 hover:border-[#0B75E1]/30"
                }`}
              >
                {question.length > 40 ? question.slice(0, 40) + "..." : question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
