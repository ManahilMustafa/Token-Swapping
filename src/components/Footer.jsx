import { Mail, Phone, Linkedin, Facebook, Instagram, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo / Title */}
          <h3 className="text-2xl font-bold mb-2">ZiCON Cloud</h3>
          <p className="text-gray-600 mb-6">
            TokenizeX – Tokenization & PropTech Solutions
          </p>

         {/* Contact Links */}
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
  <a
    href="mailto:contact@ziconcloud.com"
    className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
  >
    <Mail size={20} /> Email
  </a>
  <a
    href="tel:+1234567890"
    className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
  >
    <Phone size={20} /> Phone
  </a>
</div>


          {/* Social Icons */}
          <div className="flex justify-center gap-8 mb-6">
            <a
              href="https://www.facebook.com/ziconcloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:opacity-80 transition-opacity"
            >
              <Facebook size={28} />
            </a>
            <a
              href="https://www.instagram.com/ziconcloud/#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C] hover:opacity-80 transition-opacity"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://www.linkedin.com/company/zicon-europe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:opacity-80 transition-opacity"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCVLqwFvdyEm8t7J7IFIfWkg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:opacity-80 transition-opacity"
            >
              <Youtube size={28} />
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-gray-500 mb-4">
            Whitepaper explains conceptual use cases. Regulatory compliance
            required for execution.
          </p>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2025 <span className="font-semibold">ZiCON Cloud</span> – All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
