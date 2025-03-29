
import { Factory, Settings, Zap, Award, Clock, Search } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Factory className="h-10 w-10 text-copper" />,
      title: "In-House Manufacturing",
      description: "All machinery required for producing copper capillary tubes are manufactured in-house, ensuring quality control throughout the production process."
    },
    {
      icon: <Settings className="h-10 w-10 text-copper" />,
      title: "Plug Drawn System",
      description: "Our copper capillary tubes are produced using plug drawn system, giving a constant internal diameter with mirror finish."
    },
    {
      icon: <Zap className="h-10 w-10 text-copper" />,
      title: "Reliable Performance",
      description: "Our products are engineered to provide reliable performance in cooling, heating and industrial engineering applications."
    },
    {
      icon: <Award className="h-10 w-10 text-copper" />,
      title: "Quality Assurance",
      description: "We maintain high quality standards throughout our manufacturing process to ensure product reliability and customer satisfaction."
    },
    {
      icon: <Clock className="h-10 w-10 text-copper" />,
      title: "Prompt Delivery",
      description: "We understand the importance of timely delivery and strive to meet your fastest delivery needs."
    },
    {
      icon: <Search className="h-10 w-10 text-copper" />,
      title: "Customized Solutions",
      description: "We offer customized solutions to meet specific requirements for cooling, heating and industrial engineering applications."
    }
  ];

  return (
    <div className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Our Core Capabilities</h2>
          <p className="text-gray-600">
            Metcap Tubes Pvt. Ltd. is engaged in design, manufacture and supply of quality copper capillary tube and other allied tubing jobs to meet customer quality requirements and delivery needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-custom border border-gray-100 hover:border-copper/30 transition-colors group"
            >
              <div className="mb-5 p-3 inline-flex items-center justify-center rounded-lg bg-copper/10 group-hover:bg-copper/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
