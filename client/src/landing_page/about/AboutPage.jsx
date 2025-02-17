import { FaChartLine, FaUsers, FaShieldAlt } from "react-icons/fa";
import { User, TrendingUp, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center text-gray-700 px-6 py-12 bg-gradient-to-b from-blue-100 to-blue-300 mt-8">
      {/* About UniTrade Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-blue-700">About UniTrade</h1>
        <p className="text-lg mt-4 text-gray-800">
          UniTrade is an innovative trading platform designed to revolutionize investments
          with cutting-edge tools and real-time insights. Our mission is to empower every
          investor, from beginners to experts, to trade with confidence and maximize their financial potential.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-5xl text-center">
        {[{ icon: FaChartLine, text: "Real-Time Market Data" },
          { icon: FaUsers, text: "Community & Social Trading" },
          { icon: User, text: "Personalized Investment Plans" },
          { icon: TrendingUp, text: "AI-Powered Insights" },
          { icon: Lightbulb, text: "Smart Trading Strategies" },
          { icon: FaShieldAlt, text: "Secure & Reliable Transactions" }].map(({ icon: Icon, text }, index) => (
          <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Icon className="text-blue-600 text-4xl mx-auto mb-3" />
            <h3 className="text-2xl font-semibold text-blue-700">{text}</h3>
          </Tilt>
        ))}
      </div>

      {/* Founder Section */}
      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="mt-16 max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-blue-700">Meet the Founder</h2>
        <div className="mt-6 flex flex-col md:flex-row items-center gap-8">
          <motion.img whileHover={{ scale: 1.1 }} src="https://cdn.pixabay.com/photo/2023/04/28/23/32/ai-generated-7957457_1280.png" alt="Founder" className="w-48 h-48 rounded-full shadow-lg border-4 border-blue-700" />
          <div className="text-left max-w-md">
            <h3 className="text-2xl font-semibold text-gray-900">John Doe</h3>
            <p className="text-lg text-gray-800 mt-2">
              John is a fintech innovator and visionary leader dedicated to transforming the investment landscape.
              With over a decade of experience, he founded UniTrade to bridge the gap between technology and finance,
              making investing smarter, simpler, and more accessible for everyone.
            </p>
            <motion.button whileHover={{ scale: 1.1 }} className="mt-4 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
              Connect with John
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default About;
