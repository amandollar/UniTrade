import { motion } from "framer-motion";
import { FaHeadset} from "react-icons/fa";

function Hero() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 text-white px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center"
            >
                <FaHeadset className="text-6xl text-white mb-4" />
                <h1 className="text-6xl font-bold">Support Center</h1>
                <p className="text-xl text-gray-200 mt-4">
                    Get help and support for all your trading needs
                </p>
            </motion.div>
        </div>
    );
}

export default Hero;
