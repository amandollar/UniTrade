import { FaGooglePlay, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 text-white px-6">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img src={imageUrl} alt={productName} className="w-80 h-80 object-contain rounded-lg shadow-lg" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 text-center md:text-left px-6"
      >
        <h1 className="text-4xl font-bold text-white">{productName}</h1>
        <p className="text-lg text-gray-200 mt-4">{productDescription}</p>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <a href={tryDemo} className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
            Try Demo
          </a>
          <a href={learnMore} className="px-6 py-3 bg-gray-900 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition">
            Learn More
          </a>
        </div>
        <div className="mt-6 flex justify-center md:justify-start items-center gap-6">
          <a href={googlePlay} className="flex items-center gap-3">
            <FaGooglePlay className="text-white text-3xl" />
            <span className="text-lg">Get it on Google Play</span>
          </a>
          <a href={appStore} className="flex items-center gap-3">
            <FaApple className="text-white text-3xl" />
            <span className="text-lg">Download on the App Store</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default LeftSection;
