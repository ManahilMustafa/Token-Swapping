import { Download, Phone } from "lucide-react"

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Unlock Real Estate Liquidity through <span className="text-green-600">Token Swapping</span> between Pakistan
            & Dubai
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how ZiCON Cloud's <strong>TokenizeX</strong> helps developers and investors transform stuck real
            estate into liquid, tradable assets without the hassle of conventional transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-md font-medium flex items-center transition-colors">
              <Download className="mr-2 h-5 w-5" />
              Download the Whitepaper
            </button>
            <button className="border border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg rounded-md font-medium flex items-center bg-transparent transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/dubaii.jpeg')] bg-cover bg-center opacity-5"></div>
    </section>
  )
}

export default HeroSection
