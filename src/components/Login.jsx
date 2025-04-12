import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/resim.jpeg';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('tr'); // Varsayılan dil Türkçe
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Çeviriler
  const translations = {
    tr: {
      login: 'Giriş Yap',
      email: 'Email',
      password: 'Şifre',
      forgotPassword: 'Şifreni mi unuttun?',
      errorMessage: 'Hatalı email veya şifre!',
      turkish: 'Türkçe',
      english: 'İngilizce'
    },
    en: {
      login: 'Login',
      email: 'Email',
      password: 'Password',
      forgotPassword: 'Forgot Password?',
      errorMessage: 'Invalid email or password!',
      turkish: 'Turkish',
      english: 'English'
    }
  };

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
      alert(translations[language].errorMessage);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <div className="login-page">
      <div style={{ 
        position: 'absolute', 
        top: '20px', 
        left: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '5px'
      }}>
        <button
          onClick={toggleDropdown}
          style={{
            padding: '8px 16px',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            minWidth: '150px',
            justifyContent: 'space-between',
            color: 'black'
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {language === 'tr' ? '🇹🇷' : '🇬🇧'}
            {language === 'tr' ? translations[language].turkish : translations[language].english}
          </span>
          <span style={{ fontSize: '12px' }}>▼</span>
        </button>
        
        {isDropdownOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '4px',
            width: '150px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            zIndex: 1000,
          }}>
            <button
              onClick={() => selectLanguage('tr')}
              style={{
                padding: '8px 16px',
                width: '100%',
                border: 'none',
                backgroundColor: language === 'tr' ? '#f0f0f0' : 'white',
                cursor: 'pointer',
                textAlign: 'left',
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              🇹🇷 {translations[language].turkish}
            </button>
            <button
              onClick={() => selectLanguage('en')}
              style={{
                padding: '8px 16px',
                width: '100%',
                border: 'none',
                backgroundColor: language === 'en' ? '#f0f0f0' : 'white',
                cursor: 'pointer',
                textAlign: 'left',
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderTop: '1px solid #ddd'
              }}
            >
              🇬🇧 {translations[language].english}
            </button>
          </div>
        )}
      </div>
      <div className="login-box">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <h2>{translations[language].login}</h2>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder={translations[language].email}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder={translations[language].password}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">{translations[language].login}</button>
          <div style={{ textAlign: 'right', marginTop: '10px' }}>
            <a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>
              {translations[language].forgotPassword}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; 