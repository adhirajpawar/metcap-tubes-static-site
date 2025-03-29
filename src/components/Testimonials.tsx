
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Metcap Tubes has been our trusted supplier for copper capillary tubes for over 5 years. Their products consistently meet our quality standards, and their delivery is always on time. We highly recommend their services.",
      author: "Rahul Sharma",
      position: "Procurement Manager",
      company: "Refrigeration Systems Ltd."
    },
    {
      id: 2,
      content: "We've been working with Metcap Tubes for our industrial cooling solutions, and they have proven to be a reliable partner. Their expertise and product quality have helped us enhance our manufacturing processes.",
      author: "Anjali Patel",
      position: "Operations Director",
      company: "Cooltech Industries"
    },
    {
      id: 3,
      content: "The custom copper tubing solutions provided by Metcap Tubes perfectly matched our specific requirements. Their team was responsive, knowledgeable, and delivered exactly what we needed within the promised timeframe.",
      author: "Vikram Singh",
      position: "Technical Head",
      company: "Air Solutions Pvt. Ltd."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="section-padding bg-navy relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-copper/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-copper/10 rounded-full blur-xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h5 className="text-copper font-semibold mb-2">Testimonials</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
          <p className="text-gray-300">
            We take pride in delivering quality products and exceptional service to our clients. 
            Here's what some of them have to say about working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-navy-light/50 backdrop-blur-sm border border-navy-light rounded-xl p-8 md:p-12">
            <Quote className="text-copper h-16 w-16 opacity-20 absolute top-8 left-8" />
            
            <div className="relative z-10">
              <div key={testimonials[currentIndex].id} className="transition-opacity duration-500">
                <p className="text-white text-lg md:text-xl mb-8 relative z-10">
                  {testimonials[currentIndex].content}
                </p>
                <div className="flex items-center">
                  <div className="flex-grow">
                    <h4 className="text-copper font-bold text-lg">{testimonials[currentIndex].author}</h4>
                    <p className="text-gray-300">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevSlide} 
              className="bg-navy-light hover:bg-navy-light/80 text-white rounded-full p-3 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-copper" : "bg-gray-500 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextSlide} 
              className="bg-navy-light hover:bg-navy-light/80 text-white rounded-full p-3 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
