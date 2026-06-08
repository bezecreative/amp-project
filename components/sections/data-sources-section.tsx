"use client"

import { useState } from "react"
import { Database, DollarSign, Users, Cloud, TrendingUp, MessageSquare, Wallet, Clock } from "lucide-react"

const dataCategories = [
  {
    icon: DollarSign,
    title: "Revenue & Financials",
    count: 6,
    sources: ["Business Health", "Financial Summary", "Transactions", "Cash Flow", "Disputes", "Refunds"]
  },
  {
    icon: TrendingUp,
    title: "Memberships & Subscriptions",
    count: 8,
    sources: ["Subscriptions", "Plan Counts", "Plan Changes", "Plan LTV", "Churn Analysis", "Retention Offers", "MRR Tracking", "Plan Upgrades"]
  },
  {
    icon: Users,
    title: "Customers & Engagement",
    count: 5,
    sources: ["Customer Profiles", "App Logins", "NPS Surveys", "Gamification", "Loyalty Points"]
  },
  {
    icon: MessageSquare,
    title: "Marketing & Promotions",
    count: 6,
    sources: ["Coupon Promotions", "Deals Engagement", "Messaging", "Customer Journeys", "Emails", "Referrals"]
  },
  {
    icon: Clock,
    title: "Wash Activity & Operations",
    count: 6,
    sources: ["Wash Activity", "Mobile Activity", "Attendant Sign-Ups", "Fleet Washes", "KPI Metrics", "Locations"]
  },
  {
    icon: Database,
    title: "Tunnel & Sessions",
    count: 6,
    sources: ["Tunnel Sessions", "LPR Recognition", "Session Corrections", "Wait Times", "Gate Operations", "Queue Management"]
  },
  {
    icon: Wallet,
    title: "Payments & Liability",
    count: 5,
    sources: ["Prepaid Liability", "Gift Cards", "Credit Balance", "Wallet Transactions", "Purchases"]
  },
  {
    icon: Cloud,
    title: "Weather & Air Quality",
    count: 4,
    sources: ["Weather Forecast", "Weather Historical", "Air Quality Forecast", "Air Quality Historical"]
  }
]

function DataCategoryCard({ category, index }: { category: typeof dataCategories[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleSources = isExpanded ? category.sources : category.sources.slice(0, 4)
  const hiddenCount = category.sources.length - 4

  return (
    <div 
      className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:border-[#0B75E1]/20 transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-[#0B75E1]/10 flex items-center justify-center group-hover:bg-[#0B75E1] transition-colors">
          <category.icon className="w-6 h-6 text-[#0B75E1] group-hover:text-white transition-colors" />
        </div>
        <div className="px-2 py-1 rounded-full bg-[#EDF2F9] text-xs font-semibold text-[#003264]">
          {category.count} sources
        </div>
      </div>
      <h3 className="font-semibold text-[#003264] mb-3">{category.title}</h3>
      <div className="flex flex-wrap gap-1.5">
        {visibleSources.map((source, i) => (
          <span 
            key={i} 
            className="text-xs text-gray-500 bg-[#EDF2F9] px-2 py-1 rounded-md transition-all duration-300"
            style={{ 
              animationDelay: isExpanded && i >= 4 ? `${(i - 4) * 50}ms` : '0ms',
              opacity: 1 
            }}
          >
            {source}
          </span>
        ))}
        {hiddenCount > 0 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-[#0B75E1] px-2 py-1 hover:bg-[#0B75E1]/10 rounded-md transition-colors cursor-pointer font-medium"
          >
            {isExpanded ? 'Show less' : `+${hiddenCount} more`}
          </button>
        )}
      </div>
    </div>
  )
}

export function DataSourcesSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B75E1]/10 text-[#0B75E1] text-sm font-semibold mb-6">
            <Database className="w-4 h-4" />
            89 Data Sources
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#003264] mb-6 text-balance">
            Every metric your business tracks
          </h2>
          <p className="text-lg text-gray-600 text-balance leading-relaxed">
            From real-time revenue to historical weather patterns, AMP MCP gives AI access to the complete 
            picture of your car wash operations across 8 categories of business data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataCategories.map((category, index) => (
            <DataCategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
