import { Award, Trophy, Star, Medal, Shield, TrendingUp, Wallet, LineChart } from "lucide-react";

function Awards() {
  const awards = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Best Trading Platform",
      year: "2024",
      issuer: "Financial Excellence Awards"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Innovation in FinTech",
      year: "2023",
      issuer: "Global Finance Summit"
    },
    {
      icon: <Medal className="h-8 w-8" />,
      title: "Best Customer Service",
      year: "2024",
      issuer: "Trading Excellence"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Most Secure Platform",
      year: "2023",
      issuer: "Cyber Security Awards"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognized for excellence in providing innovative trading solutions and exceptional user experience
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6 text-blue-600">
                {award.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
              <p className="text-gray-600 mb-2">{award.issuer}</p>
              <span className="text-blue-600 font-semibold">{award.year}</span>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Why Choose UniTrade?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <LineChart className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        Advanced Trading Tools
                      </h4>
                      <p className="text-gray-600">
                        Professional-grade tools for both novice and expert traders
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <Shield className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        Bank-Grade Security
                      </h4>
                      <p className="text-gray-600">
                        Your investments are protected by state-of-the-art security
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <Wallet className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        Zero Hidden Fees
                      </h4>
                      <p className="text-gray-600">
                        Transparent pricing with no surprise charges
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        Real-time Analytics
                      </h4>
                      <p className="text-gray-600">
                        Make informed decisions with instant market insights
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-600/20"
                >
                  Start Trading Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;