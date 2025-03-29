
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-copper to-copper-dark rounded-xl overflow-hidden shadow-custom">
          <div className="p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Discuss Your Copper Tubing Requirements?</h2>
              <p className="text-white/90 text-lg mb-6">
                Contact us today to discuss your specific needs. Our team is ready to provide you with high-quality copper capillary tubes and custom solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-white text-copper hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center">
                  Contact Us <ArrowRight size={18} className="ml-2" />
                </Link>
                <a href="tel:+918888888888" className="bg-copper-dark text-white hover:bg-copper-dark/90 border border-white/30 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center">
                  <Phone size={18} className="mr-2" /> Call Now
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block w-1/3 relative">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full"></div>
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
