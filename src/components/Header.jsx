import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="TokenizeX Logo" className="h-14 w-14" />
            <span className="text-2xl font-bold text-black">Token Swapping</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {/* ↑ gap-10 for wider space */}
            <button onClick={() => scrollToSection("problem")} className="text-gray-600 hover:text-black transition-colors">
              Problem
            </button>
            <button onClick={() => scrollToSection("solution")} className="text-gray-600 hover:text-black transition-colors">
              Solution
            </button>
            <button onClick={() => scrollToSection("markets")} className="text-gray-600 hover:text-black transition-colors">
              Markets
            </button>
            <button onClick={() => scrollToSection("benefits")} className="text-gray-600 hover:text-black transition-colors">
              Benefits
            </button>
            <button onClick={() => scrollToSection("platform")} className="text-gray-600 hover:text-black transition-colors">
              Platform
            </button>
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium hidden sm:inline-flex transition-colors"
              onClick={() => scrollToSection("contact")}
            >
              Talk to Our Team
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-5">
              {/* ↑ gap-5 for nice vertical spacing */}
              <button onClick={() => scrollToSection("problem")} className="text-left text-gray-600 hover:text-black transition-colors">
                Problem
              </button>
              <button onClick={() => scrollToSection("solution")} className="text-left text-gray-600 hover:text-black transition-colors">
                Solution
              </button>
              <button onClick={() => scrollToSection("markets")} className="text-left text-gray-600 hover:text-black transition-colors">
                Markets
              </button>
              <button onClick={() => scrollToSection("benefits")} className="text-left text-gray-600 hover:text-black transition-colors">
                Benefits
              </button>
              <button onClick={() => scrollToSection("platform")} className="text-left text-gray-600 hover:text-black transition-colors">
                Platform
              </button>
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium w-fit transition-colors"
                onClick={() => scrollToSection("contact")}
              >
                Talk to Our Team
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
