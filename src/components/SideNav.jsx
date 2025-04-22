import { Link, useLocation } from 'react-router-dom';

export default function SideNav() {
  const location = useLocation(); // Ensure useLocation is used

  return (
    <div className="w-64 min-h-screen bg-white shadow-lg"> {/* Changed h-full to min-h-screen */}
      <nav className="mt-5 px-4">
        {/* Make nav items more touch-friendly on mobile */}
        <div className="space-y-2">
          <Link
            to="/dashboard"
            className="block px-4 py-3 rounded-md hover:bg-gray-100 text-gray-700 hover:text-gray-900"
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
        </div>
      </nav>
    </div>
  );
}