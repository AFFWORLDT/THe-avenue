import { ArrowRight, User, Building, Download, MapPin } from "lucide-react";

function Solutions() {
  const solutions = [
    {
      icon: <User className="h-10 w-10 text-[#dbbb90]" />,
      title: "Connect with a Specialist",
      description:
        "Access our dedicated team of over 400+ expert agents ready to assist you.",
      arrow: <ArrowRight className="h-5 w-5 text-[#dbbb90]" />,
    },
    {
      icon: <Building className="h-10 w-10 text-[#dbbb90]" />,
      title: "List Your Property",
      description:
        "Achieve optimal value by listing your property with our expert marketing strategies.",
      arrow: <ArrowRight className="h-5 w-5 text-[#dbbb90]" />,
    },
    {
      icon: <Download className="h-10 w-10 text-[#dbbb90]" />,
      title: "Download Report",
      description:
        "Download the latest Comprehensive Dubai Real Estate Market Report Q1 2025",
      arrow: <ArrowRight className="h-5 w-5 text-[#dbbb90]" />,
    },
    {
      icon: <MapPin className="h-10 w-10 text-[#dbbb90]" />,
      title: "Explore Dubai Projects",
      description:
        "Browse and find your ideal property from our extensive portfolio of Dubai projects.",
      arrow: <ArrowRight className="h-5 w-5 text-[#dbbb90]" />,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dbbb90' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 lg:mb-20 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-serif tracking-tight">
              Dubai real estate solutions focused around
              <br />
              <span className="text-[#dbbb90] font-normal">excellent customer service</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#dbbb90] to-transparent mx-auto mt-8"></div>
          </div>

          {/* Solutions Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#dbbb90]/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:border-[#dbbb90]/30"
              >
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#dbbb90]/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#dbbb90]/10 to-[#C2A17B]/5 rounded-2xl flex items-center justify-center group-hover:from-[#dbbb90]/20 group-hover:to-[#C2A17B]/10 transition-all duration-300">
                    {solution.icon}
                  </div>
                </div>

                {/* Title with Arrow */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-gray-900 font-light text-xl leading-tight font-serif tracking-wide group-hover:text-[#dbbb90] transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ml-4 flex-shrink-0">
                    {solution.arrow}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed font-light font-serif">
                  {solution.description}
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#dbbb90]/20 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
