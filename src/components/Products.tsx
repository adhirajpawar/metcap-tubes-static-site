
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Copper Capillary Tubes",
      description: "High-quality copper capillary tubes with constant internal diameter and mirror finish.",
      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/products/capillary-tubes"
    },
    {
      id: 2,
      name: "Industrial Solutions",
      description: "Comprehensive solutions for heating, cooling, and refrigeration systems.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/products/industrial-solutions"
    },
    {
      id: 3,
      name: "Customized Tubing",
      description: "Custom-designed copper tubes to meet specific requirements for various applications.",
      image: "https://images.unsplash.com/photo-1586864387789-628af9feed72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/products/customized-tubing"
    }
  ];

  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h5 className="text-copper font-semibold mb-2">Our Products</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">High-Quality Copper Tubing Solutions</h2>
          <p className="text-gray-600">
            We provide premium quality copper capillary tubes and allied products for various applications. 
            Our products are designed and manufactured to meet the highest industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-custom group"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-navy">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link 
                  to={product.link} 
                  className="inline-block text-copper font-medium hover:text-copper-dark"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products/capillary-tubes" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
