import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" end>Ana Sayfa</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reports">Raporlar</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 