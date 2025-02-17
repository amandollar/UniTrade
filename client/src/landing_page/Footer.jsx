import { TrendingUp, MapPin, Phone, Mail, ArrowRight, Globe2 } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">UniTrade</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in the world of trading. Experience seamless transactions and expert insights.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <MapPin className="h-5 w-5" />
                <span>123 Trading Street, Financial District</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Mail className="h-5 w-5" />
                <span>support@unitrade.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Our Products', 'Pricing Plans', 'Contact Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Market Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Market Resources</h3>
            <ul className="space-y-4">
              {[
                { name: 'NSE India', url: 'https://www.nseindia.com/' },
                { name: 'BSE India', url: 'https://www.bseindia.com/' },
                { name: 'SEBI', url: 'https://www.sebi.gov.in/' },
                { name: 'MoneyControl', url: 'https://www.moneycontrol.com/' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Globe2 className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest market insights and updates.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} UniTrade. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;