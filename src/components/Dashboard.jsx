import { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/resim.jpeg';

const Dashboard = () => {
  const [userRole, setUserRole] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    const email = localStorage.getItem('userEmail');
    if (role) {
      setUserRole(role);
      setUserEmail(email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const getUserDisplayName = () => {
    if (userRole === 'hr') {
      return 'İK';
    } else if (userRole === 'manager') {
      return 'Yönetici';
    }
    return '';
  };

  const getUserName = () => {
    if (userEmail === 'yonetici@test.com') {
      return 'Altan Tuzel';
    } else if (userEmail === 'ik@test.com') {
      return 'Melis Durmaz';
    }
    return userEmail;
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo-container">
          <img 
            src={logo}
            alt="Logo" 
            style={{
              width: '100%',
              maxWidth: '180px',
              height: 'auto',
              display: 'block',
              margin: '0 auto 20px',
              objectFit: 'contain'
            }}
          />
          <div className="user-info" style={{
            textAlign: 'center',
            padding: '15px 0',
            borderTop: '1px solid #e0e0e0',
            borderBottom: '1px solid #e0e0e0',
            margin: '10px 0 20px'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
              {getUserDisplayName()}
            </div>
            <div style={{ fontSize: '14px', color: '#666' }}>
              {getUserName()}
            </div>
          </div>
        </div>
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
                <li>
                  <NavLink to="/dashboard/statistics">İstatistikler</NavLink>
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