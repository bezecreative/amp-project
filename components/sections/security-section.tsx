import { Shield, Lock, UserCheck, Eye } from "lucide-react"

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "AMP Authentication",
      description: "Access is controlled through your existing AMP login credentials. No separate accounts to manage."
    },
    {
      icon: UserCheck,
      title: "Role-Based Access",
      description: "Users only see data they are authorized to access. Permissions mirror your AMP role structure."
    },
    {
      icon: Eye,
      title: "Audit Trail",
      description: "Every query is logged and traceable. Know who asked what and when for complete accountability."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Built on the same security infrastructure that protects your AMP data. SOC 2 compliant."
    }
  ]

  return (
    <section id="security" className="py-20 md:py-32 bg-gradient-to-b from-[#EDF2F9] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <Shield className="w-4 h-4 text-[#0B75E1]" />
            <span className="text-sm text-[#003264] font-medium">Enterprise-Grade Security</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#003264] mb-6 text-balance">
            Built securely with AMP authentication and role-based access
          </h2>
          <p className="text-lg text-gray-600 text-balance leading-relaxed">
            Security is not an afterthought. AMP MCP is built from the ground up with enterprise 
            security requirements in mind, integrating seamlessly with your existing AMP permissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#0B75E1]/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-[#0B75E1]" />
              </div>
              <h3 className="font-semibold text-[#003264] mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Security visual */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="rounded-2xl bg-white p-8 shadow-lg shadow-gray-100">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-semibold text-[#003264]">Access Control Flow</span>
              <span className="text-xs text-[#0B75E1] font-medium px-3 py-1 bg-[#0B75E1]/10 rounded-full">Secure by design</span>
            </div>
            
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 p-4 rounded-xl bg-[#EDF2F9] text-center">
                <UserCheck className="w-6 h-6 text-[#0B75E1] mx-auto mb-2" />
                <p className="text-xs text-[#003264] font-semibold">User Login</p>
                <p className="text-xs text-gray-400">AMP Credentials</p>
              </div>
              
              <div className="w-8 h-0.5 bg-[#0B75E1]/30" />
              
              <div className="flex-1 p-4 rounded-xl bg-[#EDF2F9] text-center">
                <Shield className="w-6 h-6 text-[#0B75E1] mx-auto mb-2" />
                <p className="text-xs text-[#003264] font-semibold">Permission Check</p>
                <p className="text-xs text-gray-400">Role Verification</p>
              </div>
              
              <div className="w-8 h-0.5 bg-[#0B75E1]/30" />
              
              <div className="flex-1 p-4 rounded-xl bg-[#EDF2F9] text-center">
                <Eye className="w-6 h-6 text-[#0B75E1] mx-auto mb-2" />
                <p className="text-xs text-[#003264] font-semibold">Scoped Data</p>
                <p className="text-xs text-gray-400">Authorized Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
