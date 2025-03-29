
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-custom">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Copper tubes manufacturing" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 h-48 w-48 border-8 border-copper rounded-lg z-[-1]"></div>
              <div className="absolute -top-6 -left-6 bg-navy h-24 w-24 rounded-lg z-[-1]"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h5 className="text-copper font-semibold mb-2">About Metcap Tubes</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">Pioneering Excellence in Copper Tubing Since 2001</h2>
            </div>
            
            <p className="text-gray-700">
              Metcap Tubes Pvt. Ltd, has been established in the year 2001-2002 as SSI unit to manufacturer copper capillary tubes and allied tubing jobs. The company expanded its activities gradually to become pioneers in total solution for Cooling, Heating and Industrial Engineering Applications.
            </p>
            
            <p className="text-gray-700">
              It is located in the outskirts of beautiful Pune city- (Maharashtra). Today Pune is the hub of refrigeration and air-conditioning city because leading manufacturers like Godrej & Boyce Co. Ltd, Whirllpool Ltd, LG, Haier etc are having their manufacturing facilities around Pune.
            </p>
            
            <div className="pt-4">
              <Link to="/about" className="inline-flex items-center text-copper hover:text-copper-dark font-medium">
                Learn more about us <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
