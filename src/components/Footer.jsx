const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">ZiCON Cloud</h3>
          <p className="text-gray-600 mb-6">TokenizeX – Tokenization & PropTech Solutions</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8">
  <a href="mailto:contact@ziconcloud.com" className="text-gray-600 hover:text-black transition-colors">
    Email
  </a>
  <a href="tel:+1234567890" className="text-gray-600 hover:text-black transition-colors">
    Phone
  </a>
  <a href="#" className="text-gray-600 hover:text-black transition-colors">
    LinkedIn
  </a>
</div>

          <p className="text-sm text-gray-500">
            Whitepaper explains conceptual use cases. Regulatory compliance required for execution.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
