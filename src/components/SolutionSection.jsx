import { Building2, Globe, TrendingUp, Shield } from "lucide-react"

const SolutionSection = () => {
  const features = [
    {
      icon: Building2,
      title: "Fractional Ownership",
      description: "Divide high-value assets into smaller investable tokens",
    },
    {
      icon: Globe,
      title: "Cross-Border Swaps",
      description: "Enable Pakistan-Dubai real estate exchange in minutes",
    },
    {
      icon: TrendingUp,
      title: "No Banking Hassle",
      description: "Reduce reliance on slow remittance and approvals",
    },
    {
      icon: Shield,
      title: "Smart Contract Security",
      description: "Compliance and trust built into every swap",
    },
  ]

  return (
    <section id="solution" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">
            <span className="text-[#8694b5]">Token Swapping</span> with TokenizeX
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            ZiCON Cloud's <strong>TokenizeX</strong> introduces a blockchain-powered model where property ownership is
            fractionalized into tokens and seamlessly exchanged across borders.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow bg-white"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-[#8694b5]" />
                </div>
                <h3 className="font-semibold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
