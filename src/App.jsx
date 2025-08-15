import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ProblemSection from "./components/ProblemSection"
import SolutionSection from "./components/SolutionSection"
import MarketsSection from "./components/MarketsSection"
import BenefitsSection from "./components/BenefitsSection"
import PlatformSection from "./components/PlatformSection"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <MarketsSection />
      <BenefitsSection />
      <PlatformSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
