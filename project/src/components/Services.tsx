import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Code2, RefreshCw, Briefcase } from 'lucide-react';

const services = [
  {
    title: 'Digital Strategy Development',
    description: 'Unlock Your Potential with a Strategic Approach',
    icon: BarChart2,
    features: [
      'Market Analysis',
      'Strategic Planning',
      'Roadmap Creation'
    ],
    additionalInfo: `Digital Strategy Development involves analyzing the current market trends and your business objectives. This service focuses on identifying opportunities for growth and creating a comprehensive roadmap to achieve your goals.

    Our approach ensures alignment between your business needs and the technological advancements required to stay ahead in a competitive market.`
  },
  {
    title: 'Technology Solutions',
    description: 'Leverage Cutting-Edge Technology to Enhance Your Operations',
    icon: Code2,
    features: [
      'System Integration',
      'Custom Software Development',
      'Cloud Solutions'
    ],
    additionalInfo: `Our Technology Solutions focus on providing seamless system integration, custom software tailored to your needs, and scalable cloud solutions. We leverage cutting-edge technology to improve efficiency and enhance operational effectiveness.

    By adopting the latest advancements in technology, your business can achieve greater agility and remain adaptable to industry changes.`
  },
  {
    title: 'Digital Transformation',
    description: 'Transform Your Business with Innovative Solutions',
    icon: RefreshCw,
    features: [
      'Process Optimization',
      'Change Management',
      'Technology Adoption'
    ],
    additionalInfo: `Digital Transformation is about reimagining your business processes to align with modern technologies. It includes optimizing workflows, managing organizational change, and adopting innovative tools to streamline operations.

    Embrace transformation to achieve higher efficiency, improve customer experiences, and unlock new revenue streams.`
  },
  {
    title: 'Consulting and Advisory',
    description: 'Gain Expert Insights and Guidance for Strategic Decisions',
    icon: Briefcase,
    features: [
      'Business Consulting',
      'Technology Advisory',
      'Workshops and Training'
    ],
    additionalInfo: `Our Consulting and Advisory services provide expert guidance to help you navigate complex business challenges. From strategic planning to technology adoption, we ensure your organization is well-prepared for the future.

    We also offer workshops and training sessions to empower your team with the skills needed to drive innovation and growth.`
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleClosePopup = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive solutions for your digital transformation journey
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="relative group">
              <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 group-hover:shadow-xl">
                <service.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-8 inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg max-w-lg w-full shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
              <p className="mt-4 text-gray-700 whitespace-pre-wrap">{selectedService.additionalInfo}</p>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="block text-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
