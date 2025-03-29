
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Factory, Users, Award, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-navy py-20 px-4">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h5 className="text-copper font-semibold mb-2">About Us</h5>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Journey to Excellence in Copper Tubing</h1>
              <p className="text-gray-300 text-lg">
                Since 2001, Metcap Tubes Pvt. Ltd has been a pioneer in providing total solutions for cooling, heating, and industrial engineering applications.
              </p>
            </div>
          </div>
        </div>

        {/* Company History */}
        <div className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Metcap Tubes Facility" 
                  className="rounded-lg shadow-custom w-full h-[400px] object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-4 text-navy">Our History</h2>
                <p className="text-gray-700">
                  Metcap Tubes Pvt. Ltd, has been established in the year 2001-2002 as SSI unit to manufacturer copper capillary tubes and allied tubing jobs. The company expanded its activities gradually to become pioneers in total solution for Cooling, Heating and Industrial Engineering Applications.
                </p>
                <p className="text-gray-700">
                  It is located in the outskirts of beautiful Pune city- (Maharashtra). Today Pune is the hub of refrigeration and air-conditioning city because leading manufacturers like Godrej & Boyce Co. Ltd, Whirllpool Ltd, LG, Haier etc are having their manufacturing facilities around Pune.
                </p>
                <p className="text-gray-700">
                  Metcap Tubes Pvt.Ltd is engaged in design, manufacture and supply of quality copper capillary tube and other allied tubing jobs to meet customer quality requirement and fastest delivery needs. Capillary tubes are produced using plug drawn system. Plug drawn cold drawing process gives a constant internal diameter with mirror finish.
                </p>
                <p className="text-gray-700">
                  It is our pleasure to mention here that all machineries required for producing copper capillary tubes are manufactured in house. Hence we at Metcap assure customer for our quality reliability and prompt services in chosen field.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h5 className="text-copper font-semibold mb-2">Why Choose Us</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Our Commitment to Quality and Innovation</h2>
              <p className="text-gray-600">
                At Metcap Tubes Pvt. Ltd., we are committed to delivering high-quality products and exceptional service to our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-custom border border-gray-100">
                <Factory className="h-12 w-12 text-copper mb-6" />
                <h3 className="text-xl font-bold mb-3 text-navy">Quality Manufacturing</h3>
                <p className="text-gray-600">
                  Our state-of-the-art manufacturing facilities and in-house machinery production ensure the highest quality copper capillary tubes with consistent internal diameter and mirror finish.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-custom border border-gray-100">
                <Users className="h-12 w-12 text-copper mb-6" />
                <h3 className="text-xl font-bold mb-3 text-navy">Expert Team</h3>
                <p className="text-gray-600">
                  Our team of experienced engineers and technicians brings years of industry expertise to every project, ensuring optimal solutions for your specific requirements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-custom border border-gray-100">
                <Award className="h-12 w-12 text-copper mb-6" />
                <h3 className="text-xl font-bold mb-3 text-navy">Proven Track Record</h3>
                <p className="text-gray-600">
                  With over two decades of experience serving major manufacturers in the refrigeration and air-conditioning industry, we have a proven track record of delivering excellence.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-custom border border-gray-100">
                <Globe className="h-12 w-12 text-copper mb-6" />
                <h3 className="text-xl font-bold mb-3 text-navy">Strategic Location</h3>
                <p className="text-gray-600">
                  Located in Pune, the hub of refrigeration and air-conditioning manufacturing in India, we are strategically positioned to serve major clients efficiently and promptly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="section-padding bg-navy">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-navy-light/30 backdrop-blur-sm border border-navy-light rounded-lg p-8">
                <h3 className="text-copper font-bold text-2xl mb-6">Our Mission</h3>
                <p className="text-white text-lg">
                  To provide high-quality copper capillary tubes and allied products that meet the exact specifications and requirements of our clients, while maintaining the highest standards of quality, reliability, and customer service.
                </p>
              </div>

              <div className="bg-navy-light/30 backdrop-blur-sm border border-navy-light rounded-lg p-8">
                <h3 className="text-copper font-bold text-2xl mb-6">Our Vision</h3>
                <p className="text-white text-lg">
                  To be recognized as the industry leader in copper tubing solutions, continuously innovating our products and processes to serve the evolving needs of the refrigeration, air-conditioning, and industrial engineering sectors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
