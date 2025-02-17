import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <div className="pt-24 pb-16 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Trade Smarter, <br />
            <span className="text-blue-600">Invest Better</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-lg">
            Experience the future of trading with UniTrade's comprehensive platform. 
            Advanced tools, real-time analytics, and expert insights at your fingertips.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-600/20 group">
              Start Trading
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-700 text-lg font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors duration-200">
              Learn More
            </a>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10"></div>
            <img
              src="homeHero.png"
              alt="Trading Platform"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;