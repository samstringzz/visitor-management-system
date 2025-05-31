import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/travel.jpg" 
              alt="Visitor Management Logo" 
              className="h-10 w-10 object-cover rounded-full mr-3 shadow"
            />
            <span className="text-xl font-bold text-gray-900">Visitors Management System</span>{/* Short name/Acronym */}
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-16 lg:py-0 bg-white">
        {/* Container for the split layout */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Left side with background image */}
          <div 
            className="w-full lg:w-1/2 h-64 lg:h-auto bg-cover bg-center relative rounded-lg lg:rounded-none shadow-lg lg:shadow-none mb-8 lg:mb-0"
            style={{
              backgroundImage: 'url("/background.png")',
              minHeight: '400px' // Ensure a minimum height on large screens
            }}
          >
          </div>

          {/* Right side with content */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Modern Visitor Management</h1>
            <p className="text-lg lg:text-xl text-gray-700 mb-8">
              Effortlessly manage guest arrivals, enhance security, and gain valuable insights.
            </p>
            {/* Optional: Add main CTA buttons here if desired in this layout */}
             <div className="flex justify-center lg:justify-start space-x-4">
               <Link 
                to="/register" 
                className="px-8 py-3 bg-indigo-600 text-white text-lg font-medium rounded-md hover:bg-indigo-700 transition-colors duration-200 shadow-md"
              >
                Get Started Free
              </Link>
               <Link 
                to="/login" 
                className="px-8 py-3 border border-indigo-600 text-indigo-600 text-lg font-medium rounded-md hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200 shadow-md"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Key Features Designed for Your Needs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1: Streamlined Check-in */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-5 p-3 bg-indigo-100 rounded-full">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Effortless Digital Check-in</h3>
              <p className="text-gray-700">Provide visitors with a quick, intuitive self check-in experience via tablet or kiosk, reducing queues and administrative burden.</p>
            </div>

            {/* Feature 2: Enhanced Security */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-5 p-3 bg-indigo-100 rounded-full">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.51A9.953 9.953 0 0112 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-1.67-.45-3.31-1.27-4.71L21 8z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Heightened Premises Security</h3>
              <p className="text-gray-700">Instantly know who is on-site, their purpose, and host. Enhance safety, manage emergencies, and ensure compliance with entry policies.</p>
            </div>

            {/* Feature 3: Visitor Tracking */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-5 p-3 bg-indigo-100 rounded-full">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M10 16h.01"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Digital Visit Logs</h3>
              <p className="text-gray-700">Automatically capture and store comprehensive visitor data for easy reporting, historical lookups, and fulfilling audit requirements digitally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Simple Steps to Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-indigo-600 text-white text-2xl font-bold rounded-full shadow-lg">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sign Up/Login</h3>
              <p className="text-gray-600">Create your account or log in to the system dashboard.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-indigo-600 text-white text-2xl font-bold rounded-full shadow-lg">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Set Up Your Profile</h3>
              <p className="text-gray-600">Add necessary information for smooth visitor interactions.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-indigo-600 text-white text-2xl font-bold rounded-full shadow-lg">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Managing Visitors</h3>
              <p className="text-gray-600">Utilize the intuitive dashboard to track and manage all visits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-indigo-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">Ready to Transform Your Visitor Experience?</h2>
          <p className="text-lg lg:text-xl mb-10 opacity-95">Implement a modern, efficient, and secure system today. It's quick and easy to get started.</p>
          <div className="flex justify-center space-x-6">
             <Link 
              to="/register" 
              className="px-10 py-4 bg-white text-indigo-800 text-lg font-semibold rounded-full hover:bg-gray-200 transition-colors duration-200 shadow-lg transform hover:scale-105"
            >
              Create Your Free Account
            </Link>
             <Link 
              to="/login" 
              className="px-10 py-4 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-200 shadow-lg transform hover:scale-105"
            >
              Existing User Login
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Visitor Management System. All rights reserved.</p>
      </footer>

    </div>
  );
} 