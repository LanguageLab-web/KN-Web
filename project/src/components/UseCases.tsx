import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Users } from 'lucide-react';

const useCases = [
  {
    title: 'Agentic Solutions for Occupancy Management',
    icon: Users,
    description: 'Empowering clients with cutting-edge agentic solutions for efficient occupancy management.',
    benefits: [
      'Enhanced operational efficiency',
      'Real-time occupancy tracking',
      'Proactive management capabilities',
      'Improved decision-making through analytics'
    ]
  },
  {
    title: 'WhatsApp Capabilities for Hospitality Guest Servicing',
    icon: MessageSquare,
    description: 'Enhance guest experience with real-time messaging and automated services through WhatsApp integration.',
    benefits: [
      'Instant guest communication',
      'Automated service requests',
      'Personalized guest experience',
      '24/7 availability'
    ]
  },
  {
    title: 'Agentic Responses for Emails',
    icon: Mail,
    description: 'Intelligent email processing with sentiment analysis and classification capabilities.',
    benefits: [
      'Automated email classification',
      'Sentiment analysis',
      'Priority handling',
      'Smart response suggestions'
    ]
  }
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Use Cases</h2>
          <p className="mt-4 text-lg text-gray-600">
            Real-world applications of our innovative solutions
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <useCase.icon className="h-8 w-8 text-blue-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{useCase.description}</p>
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Key Benefits:</h4>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-gray-700">
                      <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
