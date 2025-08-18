const ProblemSection = () => {
  const problems = [
    "Lengthy legal and banking processes",
    "Cross-border transaction hurdles",
    "Limited investor access",
    "Lack of secondary markets",
  ]

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">
            Real Estate Is Stuck. <span className="text-[#8694b5]">Liquidity Is Locked.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Billions of dollars worth of premium properties remain unsold or difficult to trade because of:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
               <div className="flex items-start gap-6">
  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
    <div className="w-3 h-3 bg-[#8694b5] rounded-full"></div>
  </div>
  <p className="text-gray-700 font-medium">{problem}</p>
</div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
