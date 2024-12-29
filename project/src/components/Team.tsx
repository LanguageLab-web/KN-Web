import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const leaders = [
  {
    name: 'Kenneth Chow',
    role: 'Co-Founder(CIO/CTO)',
    image: 'https://img1.wsimg.com/isteam/ip/62cd8fe8-03fb-4249-901c-5b6fdd4532bb/kenneth.jpg/:/cr=t:8.9%25,l:0%25,w:100%25,h:82.2%25/rs=w:600,h:600,cg=true/qt=q:76',
    bio: 'A visionary tech leader with extensive experience in digital transformation and innovation.',
    details: `
      Kenneth is a seasoned banking professional with 28 years of experience in technology and software development, specializing in Retail, Wealth Management, and Corporate Banking. As Managing Partner, he works with clients to navigate complex digital transformations across these areas. 

      With a focus on leveraging advanced technology, he helps organizations manage global stakeholders, optimize development teams, and align strategic initiatives with cutting-edge digital platforms. His expertise spans finance and accounts management, treasury, payments, AML/KYC, CRM, core banking, digital channels, and contact center applications.

      Kenneth has held leadership roles at major financial institutions, including JTC, Citibank, Barclays Bank, UOB, HSBC, Acommerce Thailand, and Kasikorn Bank Thailand. This extensive background equips him to deliver impactful solutions that drive both immediate and long-term value for his clients.
    `,
    contact: 'Contact Kenneth',
  },
  {
    name: 'Neelkant Rawal',
    role: 'Co-Founder',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGQkq5WP_v2Sw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685464072303?e=1740614400&v=beta&t=QSR2Ap4lG7FWEfPywAp96X8YdbvEg7WYtFguqAJyZFM',
    bio: 'Expert in business development and strategic solutions with a focus on client success.',
    details: `
      Neelkant specializes in advising businesses on tailored solutions and strategies. He brings deep expertise in understanding client needs and delivering impactful results across various industries. His strategic approach focuses on aligning business objectives with innovative solutions.
    `,
    contact: 'Contact Neelkant',
  },
  {
    name: 'Paul Wee',
    role: 'Process Re-engineering and Ops',
    image: 'https://img1.wsimg.com/isteam/ip/62cd8fe8-03fb-4249-901c-5b6fdd4532bb/Paul%20Profile.png/:/cr=t:2.72%25,l:0%25,w:100%25,h:94.56%25/rs=w:600,h:600,cg=true/qt=q:76',
    bio: 'Specialized in optimizing business processes and operational excellence.',
    details: `
      Paul brings over 25 years of expertise in banking, financial services, and payment systems. He has a proven track record of leading high-performing teams and driving operational excellence. 

      His deep experience in process re-engineering and digital transformation has consistently helped organizations improve efficiency and adapt to evolving industry demands. Paul's leadership roles at DBS, Citibank, Barclays Bank, UOB, and NETS have equipped him with the tools to navigate large-scale transformation projects successfully.
    `,
    contact: 'Contact Paul',
  },
];

export default function Team() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const handleLeaderClick = (leader) => {
    setSelectedLeader(leader);
  };

  const handleClosePopup = () => {
    setSelectedLeader(null);
  };

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet the experts leading our digital transformation initiatives.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <div key={leader.name} className="flex flex-col items-center">
              <img
                className="w-40 h-40 rounded-full object-cover"
                src={leader.image}
                alt={leader.name}
              />
              <h3
                className="mt-6 text-xl font-semibold text-gray-900 cursor-pointer"
                onClick={() => handleLeaderClick(leader)}
              >
                {leader.name}
              </h3>
              <p className="text-blue-600 font-medium">{leader.role}</p>
              <p className="mt-2 text-gray-600 text-center">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedLeader && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg max-w-lg w-full shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">{selectedLeader.name}</h3>
              <p className="text-blue-600 font-medium mt-2">{selectedLeader.role}</p>
              <p className="mt-4 text-gray-700 whitespace-pre-wrap">{selectedLeader.details}</p>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="block text-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
                >
                  {selectedLeader.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
