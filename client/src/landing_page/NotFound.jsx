import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-blue-200 to-blue-400 text-white px-6">
      <div className="container text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-lg mx-auto"
        >
          <div
            className="h-96 bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage:
                "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
            }}
          >
            <h1 className="text-9xl font-extrabold text-gray-900 drop-shadow-lg">404</h1>
          </div>
        </motion.div>

        {/* Message Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-[-50px]"
        >
          <h3 className="text-4xl font-bold text-gray-900">Looks like you're lost</h3>
          <p className="text-lg text-gray-800 mt-2">The page you are looking for is not available!</p>
          <Link
            to="/"
            className="mt-6 inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Go to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;