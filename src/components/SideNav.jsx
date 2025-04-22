import { Link, useLocation } from 'react-router-dom';

export default function SideNav() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white shadow-lg h-screen">
      <nav className="mt-8">
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
      </nav>
    </div>
  );
}