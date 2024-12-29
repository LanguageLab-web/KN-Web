import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-screen">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Business</span>
            <span className="block text-blue-200">With Digital Innovation</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-200">
            We help businesses navigate digital transformation with innovative solutions and expert guidance.
          </p>
        </div>
      </div>
    </div>
  );
}