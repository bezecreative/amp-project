import { ArrowUpRight } from "lucide-react"

export function AiPlatformsSection() {
  const platforms = [
    {
      name: "Claude",
      vendor: "Anthropic",
      description: "Industry-leading reasoning with exceptional analytical capabilities and nuanced understanding.",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-63n3l8OvxILkiLdOwZU2BwPVB1rh8K.png",
      accent: "#D97757",
      tile: "#FBEFE9",
    },
    {
      name: "ChatGPT",
      vendor: "OpenAI",
      description: "The versatile assistant that started the revolution. Powerful for everyday operational tasks.",
      logo: null,
      accent: "#10A37F",
      tile: "#E6F5F0",
    },
    {
      name: "Gemini",
      vendor: "Google",
      description: "Google's most capable model with strong multimodal understanding and analysis.",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-FlpGHKON9k069Qma4fnkZEAAPYYLrk.jpg",
      accent: "#0B75E1",
      tile: "#EAF2FC",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#EDF2F9]/60 via-white to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0B75E1]/20 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0B75E1]" />
            <span className="text-sm font-semibold text-[#003264] tracking-wide">AI Integrations</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#003264] mb-6 text-balance">
            Works with your favorite AI tools
          </h2>
          <p className="text-lg text-gray-600 text-balance leading-relaxed">
            Connect the AI that works best for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="group relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-transparent"
            >
              {/* Top accent bar revealed on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                style={{ backgroundColor: platform.accent }}
              />

              <div className="flex items-start justify-between mb-6">
                {platform.logo ? (
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: platform.tile }}
                  >
                    <img
                      src={platform.logo || "/placeholder.svg"}
                      alt={platform.name}
                      className="w-11 h-11 rounded-lg object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: platform.accent }}
                  >
                    <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364l2.0201-1.1685a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4046-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                    </svg>
                  </div>
                )}
                <ArrowUpRight className="w-5 h-5 text-gray-300 transition-all duration-300 group-hover:text-[#0B75E1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <h3 className="text-xl font-semibold text-[#003264]">{platform.name}</h3>
                <span className="text-sm text-gray-400 font-medium">{platform.vendor}</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
