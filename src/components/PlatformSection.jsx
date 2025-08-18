import { ArrowRight } from "lucide-react"

const PlatformSection = () => {
  const capabilities = [
    "Tokenize assets",
    "Swap across jurisdictions",
    "Comply with KYC/AML",
    "Trade in a secondary market",
  ]

  return (
    <section id="platform" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">
            Built for the Future of <span className="text-[#8694b5]">PropTech</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            TokenizeX is an end-to-end tokenization and asset swap platform by <strong>ZiCON Cloud</strong>. It enables
            real estate developers and investors to:
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center space-x-3">
                <ArrowRight className="h-5 w-5 text-[#8694b5]" />
                <span className="text-gray-700 font-medium">{capability}</span>
              </div>
            ))}
          </div>
      

        </div>
      </div>
    </section>
  )
}

export default PlatformSection
