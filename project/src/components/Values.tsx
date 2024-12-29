import React from 'react';

const values = [
  {
    title: 'Trust',
    description: 'Trust is the cornerstone of our client relationships and internal culture. We believe in building long-lasting partnerships by being transparent, honest, and reliable. Our clients can count on us to deliver on our promises and to approach every project with integrity. By fostering an environment where trust is paramount, we ensure that our clients feel confident and secure in their decision to work with us.'
  },
  {
    title: 'Expertise',
    description: 'Expertise is at the heart of our service offering. Our team consists of seasoned professionals with deep industry knowledge and a proven track record of success. We are committed to staying at the forefront of digital trends and technologies, continuously enhancing our skills and insights to provide innovative solutions. Our clients benefit from our expertise as we apply best practices and tailored strategies to meet their unique needs and achieve their goals.'
  },
  {
    title: 'Proactive',
    description: 'Being proactive means anticipating challenges and opportunities before they arise. At KNI, we take initiative and address potential issues early, ensuring that projects stay on track and goals are met efficiently. We don\'t wait for problems to occur; instead, we actively seek out ways to improve and innovate. Our proactive mindset allows us to offer solutions that drive results and create value for our clients.'
  }
];

export default function Values() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Our values are the foundation of everything we do. They drive our approach to digital consulting and shape our relationships with clients, partners, and each other. Here's a closer look at the values that guide us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value) => (
            <div key={value.title} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}