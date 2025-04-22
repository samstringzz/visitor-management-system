import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function PrivateRoute({ children, requireAdmin }) {
  const { currentUser, loading } = useAuth();
  const [userRole, setUserRole] = useState(null);
  const [checkingRole, setCheckingRole] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkUserRole = async () => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        const userData = userDoc.data();
        setUserRole(userData?.role);
      }
      setCheckingRole(false);
    };

    checkUserRole();
  }, [currentUser]);

  if (loading || checkingRole) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    // Redirect to login with the attempted path stored
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requireAdmin && userRole !== 'admin') {
    return <Navigate to="/user/dashboard" replace />;
  }

  return children;
}