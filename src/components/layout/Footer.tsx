import React from 'react';
import { Leaf, Github, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <span className="font-bold text-xl">EcoLearn</span>
            </div>
            <p className="mt-2 text-sm text-green-100">
              Learn, play, and make a difference for our planet.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2 text-green-100">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-200">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-green-500 text-center text-sm text-green-100">
          <p>&copy; {new Date().getFullYear()} EcoLearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;