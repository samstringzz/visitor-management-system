import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';
import { QRCodeSVG } from 'react-qr-code';
import { Link } from 'react-router-dom';

function UserDashboard() {
  const [bookings, setBookings] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchUserBookings = async () => {
      const q = query(
        collection(db, 'bookings'),
        where('userId', '==', currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      const userBookings = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBookings(userBookings);
    };

    fetchUserBookings();
  }, [currentUser]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-800">My Bookings</h1>
          <p className="text-gray-600">Manage your upcoming visits</p>
        </div>
        <Link
          to="/user/booking"
          className="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          <span>Create Booking</span>
        </Link>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900">No bookings yet</h3>
          <p className="mt-1 text-gray-500">Get started by creating your first booking</p>
          <Link
            to="/user/booking"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600"
          >
            Create a booking
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-gray-800">{booking.eventName}</h3>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  booking.status === 'approved' ? 'bg-green-100 text-green-800' :
                  booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {booking.status}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600">Date: {new Date(booking.eventDate).toLocaleDateString()}</p>
                <p className="text-gray-600">Time: {booking.eventTime}</p>
                {booking.status === 'approved' && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <QRCodeSVG value={booking.id} size={128} />
                    <p className="text-sm text-gray-500 mt-2 text-center">Show this QR code at entry</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserDashboard;