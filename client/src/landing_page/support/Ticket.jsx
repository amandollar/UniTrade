import { useState } from "react";
import { motion } from "framer-motion";
import {FaEnvelope, FaCheckCircle } from "react-icons/fa";



function Ticket() {
    const [issue, setIssue] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 text-white px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center"
            >
                <FaEnvelope className="text-5xl text-white mb-4" />
                <h1 className="text-4xl font-bold">Submit a Ticket</h1>
                <p className="text-lg text-gray-200 mt-4">
                    Describe your issue and our team will get back to you
                </p>
            </motion.div>
            <motion.form
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                onSubmit={handleSubmit}
                className="bg-white text-gray-800 rounded-lg shadow-xl p-6 mt-6 max-w-2xl w-full"
            >
                <textarea
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-700"
                    placeholder="Describe your issue here"
                    rows="4"
                ></textarea>
                <button
                    type="submit"
                    className="mt-4 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
                >
                    Submit Ticket
                </button>
                {submitted && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-green-500 mt-4 flex items-center justify-center gap-2"
                    >
                        <FaCheckCircle className="text-green-500" /> Your ticket has been submitted successfully!
                    </motion.p>
                )}
            </motion.form>
        </div>
    );
}

export default Ticket;
