import { BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

function Pricing() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="min-h-screen flex flex-col items-center text-gray-700 px-6 py-12 bg-gradient-to-b from-blue-100 to-blue-300 text-center">
      <h2 className="text-4xl font-bold text-blue-700">Unbeatable Pricing</h2>
      <div className="w-full md:w-[500px] mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-2xl p-6 mt-6">
        <div className="flex items-center justify-center mb-4">
          <BarChart3 className="text-blue-700 text-4xl" />
        </div>
        <table className="w-full text-center border-collapse text-gray-800">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 border">Instrument</th>
              <th className="p-3 border">Brokerage</th>
            </tr>
          </thead>
          <tbody>
            {[{name: "Equity", price: "$0.01 per share"},
              {name: "Futures & Options", price: "$0.50 per contract"},
              {name: "Currency", price: "$0.25 per lot"},
              {name: "Commodities", price: "$1 per contract"}].map(({name, price}, index) => (
              <tr key={index} className="border-b hover:bg-blue-200 transition">
                <td className="p-3 border">{name}</td>
                <td className="p-3 border">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 flex justify-center">
          <motion.a whileHover={{ scale: 1.1 }} href="/pricing" className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            View Full Pricing
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default Pricing;
