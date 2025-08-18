import { Download, Calendar, Clock, User, Mail, Phone } from "lucide-react"
import { useState } from "react"

const HeroSection = () => {
  const [openForm, setOpenForm] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
          Unlock Real Estate Liquidity through{" "}
          <span className="text-[#8694b5]">Token Swapping</span> between
          Pakistan & Dubai
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover how ZiCON Cloud&apos;s <strong>TokenizeX</strong> helps
          developers and investors transform stuck real estate into liquid,
          tradable assets without the hassle of conventional transactions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Whitepaper Download */}
          <a
            href="/whitepaper.pdf"
            download
            className="bg-white text-[#8694b5] hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-md flex items-center justify-center transition-colors shadow-sm"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Whitepaper
          </a>

          {/* Book a Consultation */}
          <button
            onClick={() => setOpenForm(true)}
            className="border border-[#8694b5] text-[#8694b5] hover:bg-white hover:text-[#7a87a7] px-8 py-3 text-lg rounded-md font-medium flex items-center justify-center transition-colors"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Consultation
          </button>
        </div>

        {/* Appointment Form (Modal) */}
        {openForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
              <button
                onClick={() => setOpenForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-center text-[#2d3e50] mb-2">
                Book a Consultation
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Fill out the form below and our team will get back to you.
              </p>

              <form className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 mb-1 flex items-center font-medium">
                    <User className="h-4 w-4 mr-2 text-[#8694b5]" /> Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#8694b5] focus:outline-none"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 mb-1 flex items-center font-medium">
                    <Mail className="h-4 w-4 mr-2 text-[#8694b5]" /> Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#8694b5] focus:outline-none"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 mb-1 flex items-center font-medium">
                    <Phone className="h-4 w-4 mr-2 text-[#8694b5]" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+92 300 0000000"
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#8694b5] focus:outline-none"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-gray-700 mb-1 flex items-center font-medium">
                    <Calendar className="h-4 w-4 mr-2 text-[#8694b5]" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#8694b5] focus:outline-none"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-gray-700 mb-1 flex items-center font-medium">
                    <Clock className="h-4 w-4 mr-2 text-[#8694b5]" /> Preferred Time
                  </label>
                  <input
                    type="time"
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#8694b5] focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Your Message (optional)"
                    rows="3"
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#8694b5] focus:outline-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#8694b5] text-white py-3 rounded-lg font-semibold hover:bg-[#7a87a7] transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
