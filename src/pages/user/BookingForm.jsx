import { useState } from 'react';
import { db } from '../../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    visitorName: '',
    visitorEmail: '',
    purpose: ''
  });
  const [error, setError] = useState('');
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get the current user's email
      const userEmail = currentUser.email;
      
      await addDoc(collection(db, 'bookings'), {
        ...formData,
        userId: currentUser.uid,
        visitorEmail: userEmail, // Add this line to ensure email is set
        visitorName: currentUser.displayName || formData.visitorName, // Add fallback for name
        status: 'pending',
        createdAt: new Date().toISOString()
      });
      navigate('/user/dashboard');
    } catch (error) {
      setError('Failed to create booking');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="py-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Create New Booking
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              {error}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Event Name
              </label>
              <input
                type="text"
                name="eventName"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                value={formData.eventName}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  value={formData.eventDate}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Event Time
                </label>
                <input
                  type="time"
                  name="eventTime"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  value={formData.eventTime}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Visitor Name
              </label>
              <input
                type="text"
                name="visitorName"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                value={formData.visitorName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Visitor Email
              </label>
              <input
                type="email"
                name="visitorEmail"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                value={formData.visitorEmail}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Purpose of Visit
              </label>
              <textarea
                name="purpose"
                required
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                value={formData.purpose}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}