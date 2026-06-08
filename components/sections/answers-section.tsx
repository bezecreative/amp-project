"use client"

import { BarChart3, Table, FileText, PieChart } from "lucide-react"

export function AnswersSection() {
  return (
    <section className="py-20 md:py-32 bg-[#EDF2F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#003264] mb-6 text-balance">
            Your AI creates the visuals
          </h2>
          <p className="text-lg text-gray-600 text-balance leading-relaxed">
            AMP MCP delivers your data directly to Claude (or any AI platform). The AI then generates 
            charts, tables, reports, and analysis right in your conversation. No separate dashboards 
            or tools needed - everything happens where you are already working.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chart example - Claude style */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
            {/* Claude-style header */}
            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#D97706] flex items-center justify-center">
                <span className="text-white text-xs font-medium">C</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Claude</span>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-4">Here&apos;s the weekly revenue trend for your locations:</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-3 font-medium">Weekly Revenue by Location</p>
                <div className="h-28 flex items-end justify-around gap-2">
                  {[
                    { h: 40, label: "Mon" },
                    { h: 55, label: "Tue" },
                    { h: 48, label: "Wed" },
                    { h: 72, label: "Thu" },
                    { h: 85, label: "Fri" },
                    { h: 95, label: "Sat" },
                    { h: 78, label: "Sun" }
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full bg-[#D97706] rounded-sm" style={{ height: `${bar.h}%` }} />
                      <span className="text-[10px] text-gray-400">{bar.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Table example - Claude style */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#D97706] flex items-center justify-center">
                <span className="text-white text-xs font-medium">C</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Claude</span>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-4">I&apos;ve compiled the location performance comparison:</p>
              <div className="bg-gray-50 rounded-lg overflow-hidden text-sm">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-3 font-medium text-gray-700">Location</th>
                      <th className="text-left p-3 font-medium text-gray-700">Revenue</th>
                      <th className="text-left p-3 font-medium text-gray-700">vs Last Week</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="p-3">Downtown Express</td>
                      <td className="p-3">$12,450</td>
                      <td className="p-3 text-green-600">+8.2%</td>
                    </tr>
                    <tr>
                      <td className="p-3">Westside Auto Spa</td>
                      <td className="p-3">$9,820</td>
                      <td className="p-3 text-green-600">+5.1%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Report example - Claude style */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#D97706] flex items-center justify-center">
                <span className="text-white text-xs font-medium">C</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Claude</span>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-4">Here&apos;s my analysis of this week&apos;s performance:</p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600 leading-relaxed space-y-3">
                <p><strong className="text-gray-800">Executive Summary:</strong> Overall revenue increased 12% week-over-week, with Saturday showing the strongest performance at $18,400 across all locations.</p>
                <p><strong className="text-gray-800">Key Finding:</strong> Weather data shows the revenue dip on Wednesday correlates with the afternoon rainstorm that hit between 2-5pm.</p>
              </div>
            </div>
          </div>

          {/* Breakdown example - Claude style */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#D97706] flex items-center justify-center">
                <span className="text-white text-xs font-medium">C</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Claude</span>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-4">Your membership revenue breaks down as follows:</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="16" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                      <circle cx="18" cy="18" r="16" fill="none" stroke="#D97706" strokeWidth="3" 
                        strokeDasharray="45 100" strokeLinecap="round" />
                      <circle cx="18" cy="18" r="16" fill="none" stroke="#92400E" strokeWidth="3" 
                        strokeDasharray="35 100" strokeDashoffset="-45" strokeLinecap="round" />
                      <circle cx="18" cy="18" r="16" fill="none" stroke="#FBBF24" strokeWidth="3" 
                        strokeDasharray="20 100" strokeDashoffset="-80" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#D97706]" />
                      <span className="text-gray-600">Unlimited - 45%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#92400E]" />
                      <span className="text-gray-600">Premium - 35%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FBBF24]" />
                      <span className="text-gray-600">Basic - 20%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            AMP MCP provides the data. Your AI does the rest - creating visualizations, writing analysis, 
            and answering follow-up questions all within the same conversation.
          </p>
        </div>
      </div>
    </section>
  )
}
