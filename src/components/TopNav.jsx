import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function TopNav({ onMenuClick }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setIsProfileOpen(false);
      await auth.app.firestore().disableNetwork();
      await signOut(auth);
      navigate('/login', { replace: true });
    } catch (error) {
      console.error('Failed to log out:', error);
      // Force navigation to login even if there's an error
      navigate('/login', { replace: true });
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-bold text-gray-800 ml-2 md:ml-0">Visitor Management</h1>
          </div>
          
          {/* Profile dropdown */}
          <div className="flex items-center">
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={currentUser.photoURL || `https://ui-avatars.com/api/?name=${currentUser.email}`}
                  alt="Profile"
                />
                <span className="hidden md:block">{currentUser.email}</span>
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}