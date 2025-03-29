
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProductDropdown = () => {
    setProductDropdownOpen(!productDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-custom sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-copper font-heading font-bold text-2xl">METCAP</span>
            <span className="text-navy font-heading font-medium text-lg">TUBES</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-copper font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-copper font-medium">
              About Us
            </Link>
            <div className="relative">
              <button 
                onClick={toggleProductDropdown}
                className="flex items-center text-gray-700 hover:text-copper font-medium"
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {productDropdownOpen && (
                <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link to="/products/capillary-tubes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-copper hover:text-white">
                      Copper Capillary Tubes
                    </Link>
                    <Link to="/products/industrial-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-copper hover:text-white">
                      Industrial Solutions
                    </Link>
                    <Link to="/products/customized-tubing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-copper hover:text-white">
                      Customized Tubing
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/contact" className="text-gray-700 hover:text-copper font-medium">
              Contact
            </Link>
            <a href="tel:+918888888888" className="btn-primary">
              Call Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-copper focus:outline-none focus:text-copper"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          <div className="flex flex-col space-y-4 pt-2">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-copper font-medium px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-copper font-medium px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            
            <div className="px-4">
              <button 
                onClick={toggleProductDropdown}
                className="flex items-center text-gray-700 hover:text-copper font-medium py-2"
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {productDropdownOpen && (
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  <Link 
                    to="/products/capillary-tubes" 
                    className="text-gray-600 hover:text-copper text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Copper Capillary Tubes
                  </Link>
                  <Link 
                    to="/products/industrial-solutions" 
                    className="text-gray-600 hover:text-copper text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Industrial Solutions
                  </Link>
                  <Link 
                    to="/products/customized-tubing" 
                    className="text-gray-600 hover:text-copper text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Customized Tubing
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-copper font-medium px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="px-4">
              <a href="tel:+918888888888" className="btn-primary inline-block">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
