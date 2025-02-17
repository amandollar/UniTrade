import { motion } from "framer-motion";

function Hero() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 text-white px-6 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="text-6xl font-bold text-white"
            >
                Pricing
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: -30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, delay: 0.3 }}
                className="text-xl text-gray-200 mt-4"
            >
                Free equity investment and flat ₹20 intraday and F&O trades
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-white text-gray-800 rounded-lg shadow-xl p-6 mt-6 max-w-2xl w-full"
            >
                <h2 className="text-2xl font-semibold text-blue-600">Brokerage Chart</h2>
                <table className="w-full text-center border-collapse mt-4">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="p-3 border">Instrument</th>
                            <th className="p-3 border">Brokerage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="p-3 border">Equity Delivery</td>
                            <td className="p-3 border">₹0</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3 border">Equity Intraday</td>
                            <td className="p-3 border">₹20 per trade</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3 border">Futures & Options</td>
                            <td className="p-3 border">₹20 per trade</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">Currency & Commodities</td>
                            <td className="p-3 border">₹20 per trade</td>
                        </tr>
                    </tbody>
                </table>
            </motion.div>
        </div>
    );
}

export default Hero;