import { Download, Phone } from "lucide-react"

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-green-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Ready to Unlock Liquidity in Real Estate?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-md flex items-center transition-colors">
              <Download className="mr-2 h-5 w-5" />
              Download Whitepaper Now
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg rounded-md font-medium flex items-center bg-transparent transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              Talk to Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
