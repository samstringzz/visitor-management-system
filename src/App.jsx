import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/admin/Dashboard';  
import UserDashboard from './pages/user/Dashboard';
import BookingForm from './pages/user/BookingForm';
import ScannerPage from './pages/admin/ScannerPage';
import VisitHistory from './pages/user/VisitHistory'; 

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Admin Routes */}
          <Route 
            path="/admin/dashboard" 
            element={
              <PrivateRoute requireAdmin={true}>
                <Layout>
                  <AdminDashboard />
                </Layout>
              </PrivateRoute>
            } 
          />
          {/* Add a route for /dashboard */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Layout>
                <UserDashboard />
              </Layout>
            </PrivateRoute>
          } />
          <Route path="/user/booking" element={
            <PrivateRoute>
              <Layout>
                <BookingForm />
              </Layout>
            </PrivateRoute>
          } />
          <Route path="/user/dashboard" element={
            <PrivateRoute>
              <Layout>
                <UserDashboard />
              </Layout>
            </PrivateRoute>
          } />
          <Route path="/admin/scanner" element={
            <PrivateRoute requireAdmin={true}>
              <Layout>
                <ScannerPage />
              </Layout>
            </PrivateRoute>
          } />
          <Route path="/user/history" element={
            <PrivateRoute>
              <Layout>
                <VisitHistory />
              </Layout>
            </PrivateRoute>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
