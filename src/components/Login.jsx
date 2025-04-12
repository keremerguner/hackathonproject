import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/resim.jpeg';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Dummy kullanıcı bilgileri
  const users = {
    'ik@test.com': {
      password: '123456',
      role: 'hr'
    },
    'yonetici@test.com': {
      password: '123456',
      role: 'manager'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users[formData.email];
    
    if (user && user.password === formData.password) {
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userEmail', formData.email);
      
      if (user.role === 'hr') {
        navigate('/dashboard');
      } else {
        navigate('/dashboard/egitimler');
      }
    } else {
      alert('Hatalı email veya şifre!');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Giriş Yap</h2>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Şifre"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Giriş Yap</button>
        </form>
      </div>
    </div>
  );
};

export default Login; 