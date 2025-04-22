import TopNav from './TopNav';
import SideNav from './SideNav';
import { useState } from 'react';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed top-0 w-full z-20">
        <TopNav onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>
      <div className="flex pt-16">
        {/* Mobile sidebar overlay */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden ${
            isSidebarOpen ? 'block' : 'hidden'
          }`}
          onClick={() => setIsSidebarOpen(false)}
        />
        
        {/* Sidebar */}
        <div className={`fixed left-0 h-[calc(100vh-4rem)] z-10 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:h-full`}>
          <SideNav />
        </div>

        {/* Main content */}
        <div className="flex-1 w-full lg:ml-64 p-4 md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}