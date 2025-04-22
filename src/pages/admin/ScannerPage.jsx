import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export default function ScannerPage() {
  const [scanResult, setScanResult] = useState(null);
  const [visitorData, setVisitorData] = useState(null);
  const [error, setError] = useState('');

  const handleScan = async (result) => {
    if (result) {
      try {
        const bookingRef = doc(db, 'bookings', result.text);
        const bookingSnap = await getDoc(bookingRef);
        
        if (bookingSnap.exists()) {
          setVisitorData(bookingSnap.data());
        } else {
          setError('Invalid QR code');
        }
      } catch (error) {
        setError('Error fetching visitor data');
      }
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Scan Visitor QR Code</h1>
      
      <div className="mb-8">
        <QrReader
          onResult={handleScan}
          constraints={{ facingMode: 'environment' }}
          className="w-full"
        />
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {visitorData && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Visitor Information</h2>
          <div className="space-y-2">
            <p><strong>Name:</strong> {visitorData.visitorName}</p>
            <p><strong>Email:</strong> {visitorData.visitorEmail}</p>
            <p><strong>Event:</strong> {visitorData.eventName}</p>
            <p><strong>Date:</strong> {visitorData.eventDate}</p>
            <p><strong>Purpose:</strong> {visitorData.purpose}</p>
            <p><strong>Status:</strong> {visitorData.status}</p>
          </div>
        </div>
      )}
    </div>
  );
}