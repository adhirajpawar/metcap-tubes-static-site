
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission to a backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success('Your message has been sent successfully! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-navy py-20 px-4">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h5 className="text-copper font-semibold mb-2">Contact Us</h5>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get in Touch With Us</h1>
              <p className="text-gray-300 text-lg">
                Have questions about our products or services? We're here to help. Contact us today and our team will get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information and Form */}
        <div className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-navy">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-copper/10 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-copper" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">Our Location</h3>
                      <p className="text-gray-600">
                        Metcap Tubes Pvt. Ltd.<br />
                        Outskirts of Pune City,<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-copper/10 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-copper" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">Phone</h3>
                      <a href="tel:+918888888888" className="text-gray-600 hover:text-copper">
                        +91 8888888888
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-copper/10 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-copper" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">Email</h3>
                      <a href="mailto:info@metcaptubes.com" className="text-gray-600 hover:text-copper">
                        info@metcaptubes.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-copper/10 p-3 rounded-lg mr-4">
                      <Clock className="h-6 w-6 text-copper" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-lg font-semibold text-navy mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-navy hover:bg-navy-light text-white p-3 rounded-full transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-navy hover:bg-navy-light text-white p-3 rounded-full transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-navy hover:bg-navy-light text-white p-3 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-lg shadow-custom border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold mb-6 text-navy">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-copper"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-copper"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-copper"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-copper"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-copper"
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="bg-copper hover:bg-copper-dark text-white py-3 px-6 rounded-md font-medium transition-colors inline-flex items-center"
                    >
                      Send Message <Send size={18} className="ml-2" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Google Map (Placeholder) */}
        <div className="h-[400px] bg-gray-200 w-full">
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <p className="text-center">Google Map would be embedded here</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
