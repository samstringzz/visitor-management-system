import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/travel.jpg" 
              alt="Visitor Management Logo" 
              className="h-10 w-10 object-cover rounded-full mr-3"
            />
            <span className="text-xl font-bold text-gray-900">VMS</span>{/* Short name/Acronym */}
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header 
        className="relative bg-cover bg-center text-white py-24 lg:py-32"
        style={{
          backgroundImage: 'url("/backgrounds.jpg")'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg">Visitor Management System</h1>
          <p className="text-lg lg:text-xl mb-8 drop-shadow-lg">
            Streamlining access and enhancing security for your premises.
          </p>
          {/* Optional: Add main CTA buttons here or keep them in nav/below hero */}
          {/* <div className="flex justify-center space-x-4">
            <Link 
              to="/register" 
              className="px-8 py-3 bg-white text-indigo-700 text-lg font-medium rounded-md hover:bg-gray-200 transition-colors duration-200 shadow-md"
            >
              Sign Up Now
            </Link>
            <Link 
              to="/login" 
              className="px-8 py-3 border border-white text-white text-lg font-medium rounded-md hover:bg-indigo-600 transition-colors duration-200 shadow-md"
            >
              Existing User? Login
            </Link>
          </div> */}
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Key Features Designed for Efficiency and Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Streamlined Check-in */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4">
                {/* Icon: Fast Check-in */}
                <svg className="w-14 h-14 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Effortless Visitor Check-in</h3>
              <p className="text-gray-700">Welcome visitors with a smooth, digital check-in process. Reduce waiting times and create a professional first impression.</p>
            </div>

            {/* Feature 2: Enhanced Security */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4">
                {/* Icon: Security Shield */}
                <svg className="w-14 h-14 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.51A9.953 9.953 0 0112 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-1.67-.45-3.31-1.27-4.71L21 8z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Robust Security Protocols</h3>
              <p className="text-gray-700">Know exactly who is on your premises at all times. Enhance building security and ensure compliance with safety regulations.</p>
            </div>

            {/* Feature 3: Visitor Tracking */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4">
                {/* Icon: Tracking/Records */}
                <svg className="w-14 h-14 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M10 16h.01"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Visit Logs</h3>
              <p className="text-gray-700">Maintain accurate digital records of visitor activity for easy retrieval, reporting, and audits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-indigo-600 text-white text-2xl font-bold rounded-full shadow-lg">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visitor Arrives</h3>
              <p className="text-gray-600">Visitors are greeted and directed to the check-in point.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-indigo-600 text-white text-2xl font-bold rounded-full shadow-lg">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Check-in</h3>
              <p className="text-gray-600">Visitors quickly enter their details using a simple interface.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-indigo-600 text-white text-2xl font-bold rounded-full shadow-lg">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Host Notification & Entry</h3>
              <p className="text-gray-600">The host is notified, and the visitor is granted access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Elevate Your Visitor Experience</h2>
          <p className="text-lg mb-8">Join us today and simplify your visitor management process while enhancing security.</p>
          <div className="flex justify-center space-x-4">
             <Link 
              to="/register" 
              className="px-10 py-4 bg-white text-indigo-700 text-lg font-semibold rounded-md hover:bg-gray-200 transition-colors duration-200 shadow-lg"
            >
              Get Started Free
            </Link>
             <Link 
              to="/login" 
              className="px-10 py-4 border-2 border-white text-white text-lg font-semibold rounded-md hover:bg-indigo-600 transition-colors duration-200 shadow-lg"
            >
              Login to Your Account
            </Link>
          </div>
        </div>
      </section>

      {/* Footer (Optional Placeholder) */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2023 Visitor Management System. All rights reserved.</p>
      </footer>

    </div>
  );
} 