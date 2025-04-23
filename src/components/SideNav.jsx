import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useState, useEffect } from 'react';

export default function SideNav() {
  const location = useLocation();
  const { currentUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkUserRole = async () => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        const userData = userDoc.data();
        setIsAdmin(userData?.role === 'admin');
      }
    };
    checkUserRole();
  }, [currentUser]);

  return (
    <div className="w-64 fixed h-[calc(100vh-4rem)] bg-white shadow-lg overflow-y-auto">
      <nav className="mt-5 px-4">
        <div className="space-y-2">
          {isAdmin ? (
            <>
              <Link
                to="/admin/dashboard"
                className={`block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${
                  location.pathname === '/admin/dashboard' ? 'bg-gray-100 font-medium' : ''
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/admin/scanner"
                className={`block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${
                  location.pathname === '/admin/scanner' ? 'bg-gray-100 font-medium' : ''
                }`}
              >
                QR Scanner
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/user/dashboard"
                className={`block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${
                  location.pathname === '/user/dashboard' ? 'bg-gray-100 font-medium' : ''
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/user/booking"
                className={`block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${
                  location.pathname === '/user/booking' ? 'bg-gray-100 font-medium' : ''
                }`}
              >
                New Booking
              </Link>
              <Link
                to="/user/history"
                className={`block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${
                  location.pathname === '/user/history' ? 'bg-gray-100 font-medium' : ''
                }`}
              >
                Visit History
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}