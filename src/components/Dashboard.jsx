import { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role) {
      setUserRole(role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <nav className="main-nav">
          <ul>
            {userRole === 'hr' && (
              <>
                <li>
                  <NavLink to="/dashboard" end>Ana Sayfa</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reports">Raporlar</NavLink>
                </li>
              </>
            )}
            {userRole === 'manager' && (
              <>
              <li>
                <NavLink to="/dashboard/egitimler" end>Eğitim Sonrası Davranış Değerlendirme</NavLink>
              </li>
                              <li>
                              <NavLink to="/dashboard/reports">Raporlar</NavLink>
                            </li>
              </>
            )}
          </ul>
        </nav>
        <div className="logout-container">
          <button onClick={handleLogout} className="logout-button">
            Çıkış Yap
          </button>
        </div>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard; 