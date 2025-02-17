import { FaGooglePlay, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 text-white px-6">
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 text-center md:text-left px-6"
      >
        <h1 className="text-4xl font-bold text-white">{productName}</h1>
        <p className="text-lg text-gray-200 mt-4">{productDescription}</p>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <a href={learnMore} className="px-6 py-3 bg-gray-900 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition">
            Learn More
          </a>
        </div>

      </motion.div>


      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img src={imageUrl} alt={productName} className="w-80 h-80 object-contain rounded-lg shadow-lg" />
      </motion.div>
    </div>
  );
}

export default RightSection;
