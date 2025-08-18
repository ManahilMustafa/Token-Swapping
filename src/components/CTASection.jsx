import { Download, Phone } from "lucide-react"

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-[#eeeeee]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">
            Ready to Unlock Liquidity in Real Estate?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* PDF Download Button */}
            <a 
              href="/whitepaper.pdf" 
              download 
              className="bg-white text-[#8694b5] hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-md flex items-center transition-colors"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Whitepaper Now
            </a>

            {/* Call Button */}
          <a 
  href="https://wa.me/923229113010" 
  target="_blank" 
  rel="noopener noreferrer"
  className="border border-[#8694b5] text-[#8694b5] hover:bg-white hover:text-[#7a87a7] px-8 py-3 text-lg rounded-md font-medium flex items-center bg-transparent transition-colors"
>
  <Phone className="mr-2 h-5 w-5" />
  Chat on WhatsApp
</a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
