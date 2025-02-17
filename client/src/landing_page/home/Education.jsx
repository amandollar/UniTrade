import { BookOpen, GraduationCap, MessageSquare } from "lucide-react";

function Education() {
  return (
    <div className="py-24 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Learn & Grow with UniTrade</h2>
          <p className="text-xl text-gray-600">Access world-class educational resources and expert insights to enhance your trading knowledge.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trading Academy</h3>
            <p className="text-gray-600 mb-6">Comprehensive courses from basics to advanced trading strategies.</p>
            <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
              Start Learning
              <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Analysis</h3>
            <p className="text-gray-600 mb-6">Daily market insights and analysis from industry experts.</p>
            <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
              View Analysis
              <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
            <p className="text-gray-600 mb-6">Join our community of traders and share insights.</p>
            <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
              Join Discussion
              <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;