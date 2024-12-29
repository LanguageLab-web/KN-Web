import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="https://img1.wsimg.com/isteam/ip/62cd8fe8-03fb-4249-901c-5b6fdd4532bb/WhatsApp%20Image%202024-09-03%20at%2013.05.59_0845d683.jpg/:/rs=w:187,h:140,cg:true,m/cr=w:187,h:140/qt=q:100/ll" 
                alt="KNinnovate" 
                className="h-16 w-auto" 
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/services" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Products/Services
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
              <Link to="/use-cases" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Use Cases
              </Link>
              <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-800 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Products/Services
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/use-cases" 
                className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Use Cases
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}