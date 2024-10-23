import React from "react";
import logo from '../images/logo2.png';

function LandingPageFooter() {
  return (
    <div className="bg-gray-100 relative mt-12">
      {/* Banner Section */}
      <div className="bg-green-900 text-center px-2 py-4 rounded-3xl absolute left-0 right-0 mx-auto z-10 max-w-screen-xl w-full" style={{ top: '-150px' }}>
        <h2 className="text-yellow-400 text-4xl font-bold mb-4">
          Ready to Transform?
        </h2>
        <p className="text-white text-lg mb-6">
          Switch to GasVision. Start your journey to smarter, safer gas management today.
        </p>
        <button className="bg-yellow-400 text-green-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
          Get Started Now
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white pt-24 pb-6 relative z-0">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl">
          {/* Logo and Nav Links */}
          <div className="flex flex-col items-start">
            <img
              src={logo}
              alt="GasVision Logo"
              className="mb-4 w-32"
            />
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-yellow-400">PRODUCTS</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">CONTACT</a></li>
              <li><a href="#privacy" className="hover:text-yellow-400">PRIVACY POLICY</a></li>
            </ul>
          </div>

          {/* Resources and About */}
          <div className="flex flex-col items-start">
            <ul className="space-y-2">
              <li><a href="#resources" className="hover:text-yellow-400">RESOURCES</a></li>
              <li><a href="#about" className="hover:text-yellow-400">ABOUT US</a></li>
              <li><a href="#terms" className="hover:text-yellow-400">TERMS AND CONDITIONS</a></li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="flex flex-col">
            <p className="mb-4">SUBSCRIBE FOR MORE GAS AND FIRE SAFETY INSIGHTS DIRECTED TO YOUR INBOX</p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-3 rounded-md w-full border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
              <button className="bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col">
            <p className="mb-4">FOLLOW US</p>
            <div className="flex space-x-4 text-yellow-400">
              <a href="#facebook" aria-label="Facebook" className="hover:text-yellow-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#instagram" aria-label="Instagram" className="hover:text-yellow-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#twitter" aria-label="Twitter" className="hover:text-yellow-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#tiktok" aria-label="TikTok" className="hover:text-yellow-500">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="hover:text-yellow-500">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 text-sm text-gray-400 border-t border-gray-700 pt-4">
          &copy; 2024 GasVision. All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default LandingPageFooter;
