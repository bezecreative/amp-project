import { Shield, Lock, KeyRound } from "lucide-react"

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Seamless, Secure Sign-In",
      description: "Authenticate with your existing AMP credentials."
    },
    {
      icon: KeyRound,
      title: "Role-Based Access, Locked Down",
      description: "Access is restricted to approved roles managed in the AMP platform."
    },
    {
      icon: Shield,
      title: "Encrypted & Auditable",
      description: "Data encryption in transit and at rest, with full audit trails tracking every request."
    }
  ]

  return (
    <section id="security" className="py-20 md:py-32 bg-gradient-to-b from-[#EDF2F9] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <Shield className="w-4 h-4 text-[#0B75E1]" />
            <span className="text-sm text-[#003264] font-medium">Security</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#003264] mb-6 text-balance">
            Built securely with AMP authentication and role-based access
          </h2>
          <p className="text-lg text-gray-600 text-balance leading-relaxed">
            AMP MCP integrates directly with your existing AMP permissions, so security stays
            consistent with the platform you already trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#0B75E1]/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-[#0B75E1]" />
              </div>
              <h3 className="font-semibold text-[#003264] mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
