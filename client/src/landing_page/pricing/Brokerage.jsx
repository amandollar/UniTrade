import { useState } from "react";
import { motion } from "framer-motion";

function Brokerage() {
    const [investment, setInvestment] = useState(1000);
    const [brokerage, setBrokerage] = useState(20);

    const calculateBrokerage = (amount) => {
        setInvestment(amount);
        setBrokerage(amount > 0 ? Math.min(20, amount * 0.002) : 0);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 text-white px-6 text-center">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-6xl font-bold text-white"
            >
                Brokerage Calculator
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-xl text-gray-200 mt-4"
            >
                Calculate your brokerage charges easily
            </motion.p>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-white text-gray-800 rounded-lg shadow-xl p-6 mt-6 max-w-2xl w-full"
            >
                <h2 className="text-2xl font-semibold text-blue-600">Enter Investment Amount</h2>
                <input
                    type="number"
                    value={investment}
                    onChange={(e) => calculateBrokerage(e.target.value)}
                    className="w-full p-3 mt-4 border border-gray-300 rounded-lg text-gray-700"
                    placeholder="Enter amount in INR"
                />
                <h3 className="text-xl font-medium text-gray-900 mt-4">Estimated Brokerage: ₹{brokerage.toFixed(2)}</h3>
            </motion.div>
        </div>
    );
}

export default Brokerage;