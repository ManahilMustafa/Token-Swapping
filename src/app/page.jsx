

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Download,
  Phone,
  Building2,
  Users,
  Shield,
  TrendingUp,
  Globe,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

export default function TokenizeXLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/tokenizex-logo.png" alt="TokenizeX Logo" className="h-10 w-10" />
              <span className="text-xl font-bold text-black">TokenizeX</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("problem")}
                className="text-gray-600 hover:text-black transition-colors"
              >
                Problem
              </button>
              <button
                onClick={() => scrollToSection("solution")}
                className="text-gray-600 hover:text-black transition-colors"
              >
                Solution
              </button>
              <button
                onClick={() => scrollToSection("markets")}
                className="text-gray-600 hover:text-black transition-colors"
              >
                Markets
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-600 hover:text-black transition-colors"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("platform")}
                className="text-gray-600 hover:text-black transition-colors"
              >
                Platform
              </button>
            </nav>

            {/* CTA Button and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white hidden sm:inline-flex"
                onClick={() => scrollToSection("contact")}
              >
                Talk to Our Team
              </Button>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("problem")}
                  className="text-left text-gray-600 hover:text-black transition-colors"
                >
                  Problem
                </button>
                <button
                  onClick={() => scrollToSection("solution")}
                  className="text-left text-gray-600 hover:text-black transition-colors"
                >
                  Solution
                </button>
                <button
                  onClick={() => scrollToSection("markets")}
                  className="text-left text-gray-600 hover:text-black transition-colors"
                >
                  Markets
                </button>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="text-left text-gray-600 hover:text-black transition-colors"
                >
                  Benefits
                </button>
                <button
                  onClick={() => scrollToSection("platform")}
                  className="text-left text-gray-600 hover:text-black transition-colors"
                >
                  Platform
                </button>
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white w-fit"
                  onClick={() => scrollToSection("contact")}
                >
                  Talk to Our Team
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Unlock Real Estate Liquidity through <span className="text-green-600">Token Swapping</span> between
              Pakistan & Dubai
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how ZiCON Cloud's <strong>TokenizeX</strong> helps developers and investors transform stuck real
              estate into liquid, tradable assets without the hassle of conventional transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                <Download className="mr-2 h-5 w-5" />
                Download the Whitepaper
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/dubai-lahore-blockchain.png')] bg-cover bg-center opacity-5"></div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">
              Real Estate Is Stuck. <span className="text-green-600">Liquidity Is Locked.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Billions of dollars worth of premium properties remain unsold or difficult to trade because of:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Lengthy legal and banking processes",
                "Cross-border transaction hurdles",
                "Limited investor access",
                "Lack of secondary markets",
              ].map((problem, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-700 font-medium">{problem}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">
              <span className="text-green-600">Token Swapping</span> with TokenizeX
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              ZiCON Cloud's <strong>TokenizeX</strong> introduces a blockchain-powered model where property ownership is
              fractionalized into tokens and seamlessly exchanged across borders.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
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
              ].map((feature, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-black mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Pakistan & Dubai Section */}
      <section id="markets" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">
              Why <span className="text-green-600">Pakistan & Dubai</span>?
            </h2>
            <div className="space-y-6 mb-8">
              {[
                "Dubai's DIFC & ADGM already support tokenized assets",
                "Pakistan's SECP sandbox enables fintech and blockchain pilots",
                "Pakistani diaspora in UAE represents a massive untapped investment channel",
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{point}</p>
                </div>
              ))}
            </div>
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">👉</div>
                  <p className="text-lg font-semibold text-black">
                    Together, Pakistan & Dubai can become the first{" "}
                    <span className="text-green-600">cross-border token swapping hub for real estate</span>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">
              Who Gains from <span className="text-green-600">Token Swapping</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Developers",
                  benefits: ["Unlock liquidity", "Accelerate sales", "Expand global investor pool"],
                  icon: Building2,
                },
                {
                  title: "Investors",
                  benefits: ["Lower entry barriers", "Diversify across markets", "Faster exit options"],
                  icon: Users,
                },
                {
                  title: "Regulators",
                  benefits: ["Transparent transactions", "Better compliance", "New capital inflows"],
                  icon: Shield,
                },
              ].map((stakeholder, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <stakeholder.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4 text-center">{stakeholder.title}</h3>
                    <ul className="space-y-2">
                      {stakeholder.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About TokenizeX Section */}
      <section id="platform" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">
              Built for the Future of <span className="text-green-600">PropTech</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              TokenizeX is an end-to-end tokenization and asset swap platform by <strong>ZiCON Cloud</strong>. It
              enables real estate developers and investors to:
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                "Tokenize assets",
                "Swap across jurisdictions",
                "Comply with KYC/AML",
                "Trade in a secondary market",
              ].map((capability, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <ArrowRight className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-medium">{capability}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <img
                  src="/modern-tokenization-dashboard.png"
                  alt="TokenizeX Platform Dashboard"
                  className="rounded-lg max-w-full h-auto"
                />
              </div>
              <p className="text-gray-600">TokenizeX Platform Dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to Unlock Liquidity in Real Estate?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                <Download className="mr-2 h-5 w-5" />
                Download Whitepaper Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white text-black py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">ZiCON Cloud</h3>
            <p className="text-gray-600 mb-6">TokenizeX – Tokenization & PropTech Solutions</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-8">
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
    </div>
  )
}
