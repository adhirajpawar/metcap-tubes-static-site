
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-navy to-navy-light overflow-hidden">
      {/* Copper gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-copper/20 to-transparent mix-blend-overlay" />
      
      <div className="container-custom py-20 md:py-28 lg:py-32 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Leading <span className="text-copper">Copper Capillary</span> Tube Manufacturers
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Pioneers in total solution for Cooling, Heating and Industrial Engineering Applications since 2001.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Get in Touch <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/about" className="bg-white text-navy hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors inline-block">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-copper/10 backdrop-blur-sm border border-copper/30 rounded-xl p-8 relative">
              <div className="relative z-10">
                <h3 className="text-copper font-bold text-2xl mb-4">Quality Products</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="bg-copper rounded-full h-5 w-5 flex items-center justify-center mr-3 mt-1 text-white flex-shrink-0">✓</span>
                    <span>Copper Capillary Tubes manufactured using plug drawn system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-copper rounded-full h-5 w-5 flex items-center justify-center mr-3 mt-1 text-white flex-shrink-0">✓</span>
                    <span>Constant internal diameter with mirror finish</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-copper rounded-full h-5 w-5 flex items-center justify-center mr-3 mt-1 text-white flex-shrink-0">✓</span>
                    <span>In-house machinery manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-copper rounded-full h-5 w-5 flex items-center justify-center mr-3 mt-1 text-white flex-shrink-0">✓</span>
                    <span>Quality reliability and prompt services</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-copper/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-copper/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
