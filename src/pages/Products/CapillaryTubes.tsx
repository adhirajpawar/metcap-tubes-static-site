
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { ArrowRight, Check } from 'lucide-react';

const CapillaryTubes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-navy py-20 px-4">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h5 className="text-copper font-semibold mb-2">Our Products</h5>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Copper Capillary Tubes</h1>
              <p className="text-gray-300 text-lg">
                High-quality copper capillary tubes with constant internal diameter and mirror finish, perfect for refrigeration and air-conditioning applications.
              </p>
            </div>
          </div>
        </div>

        {/* Product Overview */}
        <div className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Copper Capillary Tubes" 
                  className="rounded-lg shadow-custom w-full h-[400px] object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-4 text-navy">Product Overview</h2>
                <p className="text-gray-700">
                  Metcap Tubes Pvt. Ltd. manufactures high-quality copper capillary tubes using the plug drawn system. Our production process ensures a constant internal diameter with a mirror finish, making our tubes ideal for refrigeration, air-conditioning, and various industrial applications.
                </p>
                <p className="text-gray-700">
                  Capillary tubes function as flow control devices in refrigeration and air-conditioning systems. They create pressure drop between the condenser and evaporator in the refrigeration cycle. The precise internal diameter of our tubes ensures accurate refrigerant flow control.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-3 mt-1" />
                    <span className="text-gray-700">Manufactured using plug drawn system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-3 mt-1" />
                    <span className="text-gray-700">Constant internal diameter with mirror finish</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-3 mt-1" />
                    <span className="text-gray-700">Precision control for refrigerant flow</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-3 mt-1" />
                    <span className="text-gray-700">Multiple size options available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Product Specifications</h2>
              <p className="text-gray-600">
                Our copper capillary tubes are available in various dimensions to meet different application requirements.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-custom">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="py-4 px-6 text-left">Outside Diameter (mm)</th>
                    <th className="py-4 px-6 text-left">Inside Diameter (mm)</th>
                    <th className="py-4 px-6 text-left">Wall Thickness (mm)</th>
                    <th className="py-4 px-6 text-left">Standard Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6">1.27</td>
                    <td className="py-4 px-6">0.65</td>
                    <td className="py-4 px-6">0.31</td>
                    <td className="py-4 px-6">Coils / Cut to Length</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6">1.40</td>
                    <td className="py-4 px-6">0.76</td>
                    <td className="py-4 px-6">0.32</td>
                    <td className="py-4 px-6">Coils / Cut to Length</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">1.65</td>
                    <td className="py-4 px-6">0.91</td>
                    <td className="py-4 px-6">0.37</td>
                    <td className="py-4 px-6">Coils / Cut to Length</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6">1.80</td>
                    <td className="py-4 px-6">1.02</td>
                    <td className="py-4 px-6">0.39</td>
                    <td className="py-4 px-6">Coils / Cut to Length</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">2.10</td>
                    <td className="py-4 px-6">1.30</td>
                    <td className="py-4 px-6">0.40</td>
                    <td className="py-4 px-6">Coils / Cut to Length</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-600 mt-4 text-center">
              *Custom sizes and specifications are available upon request. Please contact us for more information.
            </p>
          </div>
        </div>

        {/* Applications */}
        <div className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Applications</h2>
              <p className="text-gray-600">
                Our copper capillary tubes are widely used in various applications across different industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-navy">Refrigeration Systems</h3>
                <p className="text-gray-600">
                  Used as metering devices in refrigerators, freezers, and commercial refrigeration equipment to control refrigerant flow.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-navy">Air Conditioning</h3>
                <p className="text-gray-600">
                  Critical components in window air conditioners, split AC units, and central air conditioning systems.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-navy">Heat Pumps</h3>
                <p className="text-gray-600">
                  Essential for controlling refrigerant flow in heat pump systems used for heating and cooling applications.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-navy">Automotive HVAC</h3>
                <p className="text-gray-600">
                  Used in automotive air conditioning systems to regulate refrigerant flow and pressure.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-navy">Industrial Cooling</h3>
                <p className="text-gray-600">
                  Applied in industrial refrigeration systems and process cooling applications.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-navy">Medical Equipment</h3>
                <p className="text-gray-600">
                  Used in medical cooling equipment and laboratory refrigeration systems.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="/contact" className="inline-flex items-center text-copper hover:text-copper-dark font-medium">
                Contact us for custom applications <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default CapillaryTubes;
