import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Reports from './components/Reports';
import Egitimler from './components/Egitimler';
import Statistics from './components/Statistics';

const PrivateRoute = ({ children, allowedRole }) => {
  const userRole = localStorage.getItem('userRole');
  
  if (!userRole) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          <Route index element={
            <PrivateRoute allowedRole="hr">
              <Home />
            </PrivateRoute>
          } />
          <Route path="reports" element={
            <PrivateRoute allowedRole="hr">
              <Reports />
            </PrivateRoute>
          } />
          <Route path="egitimler" element={
            <PrivateRoute allowedRole="manager">
              <Egitimler />
            </PrivateRoute>
          } />
          <Route path="statistics" element={
            <PrivateRoute allowedRole="manager">
              <Statistics />
            </PrivateRoute>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
