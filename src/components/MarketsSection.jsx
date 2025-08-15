import { CheckCircle } from "lucide-react"

const MarketsSection = () => {
  const points = [
    "Dubai's DIFC & ADGM already support tokenized assets",
    "Pakistan's SECP sandbox enables fintech and blockchain pilots",
    "Pakistani diaspora in UAE represents a massive untapped investment channel",
  ]

  return (
    <section id="markets" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">
            Why <span className="text-green-600">Pakistan & Dubai</span>?
          </h2>
          <div className="space-y-6 mb-8">
            {points.map((point, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{point}</p>
              </div>
            ))}
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <div className="text-2xl"></div>
              <p className="text-lg font-semibold text-black">
                Together, Pakistan & Dubai can become the first{" "}
                <span className="text-green-600">cross-border token swapping hub for real estate</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketsSection
