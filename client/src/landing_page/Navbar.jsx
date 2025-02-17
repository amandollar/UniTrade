import { useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full top-0 left-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
          <TrendingUp className="h-8 w-8" />
          <span>UniTrade</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          <Link to="/about" className="hover:text-blue-500 transition-colors duration-200">
          About
          </Link>
          <Link to="/product" className="hover:text-blue-500 transition-colors duration-200">
          Products
          </Link>
          <Link to="/pricing" className="hover:text-blue-500 transition-colors duration-200">
          Pricing
          </Link>
          <Link to="/support" className="hover:text-blue-500 transition-colors duration-200">
          Support
          </Link>
          <Link to="/signup" className="hover:text-blue-500 transition-colors duration-200">
          Get Started
          </Link>
        </div>

        <button 
          className="md:hidden text-gray-600 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4">
          <Link to="/about" className="block text-gray-600 hover:text-blue-500 py-2">About</Link>
          <Link to="/product" className="block text-gray-600 hover:text-blue-500 py-2">Products</Link>
          <Link to="/pricing" className="block text-gray-600 hover:text-blue-500 py-2">Pricing</Link>
          <Link to="/support" className="block text-gray-600 hover:text-blue-500 py-2">Support</Link>
          <Link to="/signup" className="block text-gray-600 hover:text-blue-500 py-2">Get Started</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;