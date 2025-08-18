import { Building2, Users, Shield, CheckCircle } from "lucide-react"

const BenefitsSection = () => {
  const stakeholders = [
    {
      title: "Developers",
      benefits: ["Unlock liquidity", "Accelerate sales", "Expand global investor pool"],
      icon: Building2,
    },
    {
      title: "Investors",
      benefits: ["Lower entry barriers", "Diversify across markets", "Faster exit options"],
      icon: Users,
    },
    {
      title: "Regulators",
      benefits: ["Transparent transactions", "Better compliance", "New capital inflows"],
      icon: Shield,
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">
            Who Gains from <span className="text-[#8694b5]">Token Swapping?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stakeholders.map((stakeholder, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow bg-white"
              >
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <stakeholder.icon className="h-8 w-8 text-[#8694b5]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 text-center">{stakeholder.title}</h3>
                <ul className="space-y-2">
                  {stakeholder.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#8694b5] flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
