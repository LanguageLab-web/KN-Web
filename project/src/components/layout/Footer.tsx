import React from 'react';
import { Link } from 'react-router-dom';
import CookieConsent from './CookieConsent';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">KN Innovate</h3>
            <p className="text-sm">
              Driving digital transformation through innovation and expertise.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">160 Robinson Road #1404, Singapore 068197</p>
            <a href="mailto:contact@kninnovate.com" className="text-sm hover:text-white">
              Info@kninnovate.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              Copyright © {new Date().getFullYear()} KN Innovate - All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0 text-sm">
              Powered by KN Innovate
            </div>
          </div>
        </div>
      </div>
      <CookieConsent />
    </footer>
  );
}
