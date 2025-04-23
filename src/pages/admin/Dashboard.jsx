import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, updateDoc, doc, getDoc } from 'firebase/firestore';
import QRCode from 'react-qr-code';
import { sendApprovalEmail } from '../../services/emailService';

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loadingApproval, setLoadingApproval] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      const querySnapshot = await getDocs(collection(db, 'bookings'));
      const bookingList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBookings(bookingList);
    };
    fetchBookings();
  }, []);

  const handleApprove = async (bookingId) => {
    setLoadingApproval(bookingId);
    try {
      const bookingRef = doc(db, 'bookings', bookingId);
      const bookingDoc = await getDoc(bookingRef);
      
      if (!bookingDoc.exists()) {
        console.error('Booking not found');
        return;
      }

      const bookingData = { id: bookingId, ...bookingDoc.data() };

      await updateDoc(bookingRef, {
        status: 'approved',
        approvedAt: new Date().toISOString()
      });

      setBookings(prevBookings => 
        prevBookings.map(booking => 
          booking.id === bookingId 
            ? { ...booking, status: 'approved' }
            : booking
        )
      );

      try {
        await sendApprovalEmail(bookingData);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }

    } catch (error) {
      console.error('Error approving booking:', error);
    } finally {
      setLoadingApproval(null);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto"> {/* Add this wrapper div */}
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Visitor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Purpose
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  QR Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{booking.visitorName}</div>
                    <div className="text-sm text-gray-500">{booking.visitorEmail}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.purpose || 'Not specified'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{new Date(booking.eventDate).toLocaleDateString()}</div>
                    <div className="text-sm text-gray-500">{booking.eventTime}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${booking.status === 'approved' ? 'bg-green-100 text-green-800' : 
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.status === 'approved' && (
                      <div className="p-2 bg-gray-50 rounded">
                        <QRCode value={booking.id} size={64} />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {booking.status === 'pending' ? (
                      <button
                        onClick={() => handleApprove(booking.id)}
                        disabled={loadingApproval === booking.id}
                        className={`${
                          loadingApproval === booking.id 
                            ? 'bg-green-400 cursor-not-allowed' 
                            : 'bg-green-500 hover:bg-green-600'
                        } text-white px-4 py-2 rounded-md transition-colors duration-200`}
                      >
                        {loadingApproval === booking.id ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Approving...
                          </span>
                        ) : (
                          'Approve'
                        )}
                      </button>
                    ) : booking.status === 'approved' ? (
                      <span className="text-green-600 font-medium">Approved</span>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;