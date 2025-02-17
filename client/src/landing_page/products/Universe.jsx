import { motion } from "framer-motion";

function Universe() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 text-white px-6 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="text-5xl font-bold text-white"
            >
                The UniTrade Universe
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: -30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, delay: 0.3 }}
                className="text-lg text-gray-200 mt-4"
            >
                Extend your experience with our partner platforms
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-8 mt-6"
            >
                <img src="sensibullLogo.svg" alt="Sensibull" className="w-40 h-auto object-contain rounded-lg shadow-lg" />
                <img src="smallcaseLogo.png" alt="Smallcase" className="w-40 h-auto object-contain rounded-lg shadow-lg" />
                <img src="zerodhaFundhouse.png" alt="Zerodha Fundhouse" className="w-40 h-auto object-contain rounded-lg shadow-lg" />
            </motion.div>
        </div>
    );
}

export default Universe;