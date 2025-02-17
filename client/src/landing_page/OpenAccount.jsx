import { UserPlus, CheckCircle2 } from "lucide-react";

function CreateAccount() {
  const benefits = [
    "Zero Brokerage Trading",
    "Real-time Market Data",
    "Advanced Trading Tools",
    "Expert Research Reports"
  ];

  return (
    <div className="py-24 bg-blue-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
              <h2 className="text-3xl font-bold mb-6">Why Choose UniTrade?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-200" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20">
                  <UserPlus className="h-8 w-8" />
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Start Your Trading Journey
                </h2>
                <p className="text-gray-600 mb-8">
                  Join millions of traders who trust UniTrade for their investment needs.
                </p>
              </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-600/20"
                >
                  Create Free Account
                </button>

              <p className="mt-6 text-center text-sm text-gray-500">
                By creating an account, you agree to our{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;