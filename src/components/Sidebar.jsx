import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import logo from '../assets/image.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img 
          src={logo}
          alt="Logo" 
          className="logo"
        />
      </div>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Ana Sayfa
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/reports" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Raporlar
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 