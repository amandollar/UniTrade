import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-blue-200 to-blue-400 text-white px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-6xl font-bold"
      >
        Technology
      </motion.h1>
      <motion.h3 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.3 }}
        className="text-2xl mt-4"
      >
        Fast, Optimized, and Intuitive Trading Platform
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.6 }}
        className="text-lg mt-6 flex items-center gap-2"
      >
        Checkout our <Link to="/investment" className="text-blue-900 font-semibold underline flex items-center">investment offerings <ArrowRight className="ml-1" size={18} /></Link>
      </motion.p>
    </div>
  );
}

export default Hero;
