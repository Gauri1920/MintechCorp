import React, { useState } from "react";
import { Home, Building2, Ruler, Paintbrush } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Residential Interior Design",
    description:
      "Beautiful and functional home interiors tailored to your lifestyle.",
    details:
      "We create personalized residential designs focusing on comfort, aesthetics, and functionality. Our services include furniture layout planning, lighting design, color palette selection, and 3D visualization to bring your dream home to life.",
    icon: <Home className="w-10 h-10 text-white" />,
  },
  {
    id: 2,
    title: "Commercial Interior Design",
    description:
      "Professional design solutions for offices, retail, and hospitality spaces.",
    details:
      "Our commercial interior design services ensure productive, stylish, and efficient spaces. From office layouts to retail stores and hotels, we combine functionality with brand identity to create impactful environments.",
    icon: <Building2 className="w-10 h-10 text-white" />,
  },
  {
    id: 3,
    title: "Renovation & Remodeling",
    description:
      "Refresh and modernize your existing spaces with expert renovation.",
    details:
      "We handle complete renovations and remodeling projects, updating interiors while maintaining structural integrity. Our team manages everything from space planning and material selection to final execution.",
    icon: <Ruler className="w-10 h-10 text-white" />,
  },
  {
    id: 4,
    title: "3D Visualization & Concept Design",
    description:
      "Preview your project with realistic 3D renders and conceptual layouts.",
    details:
      "Our 3D visualization services allow you to explore your design before implementation. We provide photorealistic renders, walkthroughs, and concept layouts to ensure you’re confident with your space.",
    icon: <Paintbrush className="w-10 h-10 text-white" />,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${formData.name}! We received your request for ${selectedService.title}. We will contact you soon.`
    );
    setFormData({ name: "", email: "", message: "" });
    setSelectedService(null);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12">
          Explore our professional interior design services, crafted to create functional and beautiful spaces for your home or business.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
              >
                ✖
              </button>

              {/* Modal Content */}
              <h2 className="text-2xl font-bold mb-4">
                {selectedService.title}
              </h2>
              <p className="text-gray-700 mb-6">{selectedService.details}</p>

              {/* Request Quote Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                />
                <textarea
                  name="message"
                  placeholder="Your Message / Requirements"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
