import { useState } from 'react';
import { TextField, IconButton, Paper, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import EditIcon from '@mui/icons-material/Edit';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';

const Home = () => {
  const [activeTab, setActiveTab] = useState('manuel');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    egitimAdi: '',
    egitimIcerigi: '',
    egitimAmaci: '',
  });
  const [showQuestions, setShowQuestions] = useState(false);

  const tabs = [
    { id: 'manuel', label: 'Manuel' },
    { id: 'lms', label: 'LMS' },
    { id: 'enocta', label: 'Enocta' },
    { id: 'sap', label: 'SAP' }
  ];

  // Dummy sorular
  const dummyQuestions = [
    'Müşteri ihtiyaçlarını doğru analiz edebiliyor mu?',
    'Ürün bilgisine hakim mi?',
    'İletişim becerileri yeterli mi?',
    'Satış kapama teknikleri başarılı mı?',
    'Müşteri takibi yapıyor mu?'
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowQuestions(false);
    setFormData({
      egitimAdi: '',
      egitimIcerigi: '',
      egitimAmaci: '',
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCreate = () => {
    if (!formData.egitimAdi || !formData.egitimIcerigi || !formData.egitimAmaci || !selectedDate) {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }
    setShowQuestions(true);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`${file.name} dosyası yüklendi!`);
    }
  };

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };

  const handleSubmitToManager = () => {
    alert(`Sorular yöneticiye gönderildi! Seçilen süre: ${selectedDuration}, Eğitim Tarihi: ${selectedDate.format('DD/MM/YYYY')}`);
    setShowQuestions(false);
    setFormData({
      egitimAdi: '',
      egitimIcerigi: '',
      egitimAmaci: '',
    });
    setSelectedDuration('');
    setSelectedDate(null);
  };

  return (
    <div className="home">
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'manuel' && (
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="egitimAdi">Eğitim Adı</label>
            <input
              id="egitimAdi"
              type="text"
              name="egitimAdi"
              placeholder="Eğitim adını giriniz"
              value={formData.egitimAdi}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Eğitim Tarihi</label>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
              <DatePicker
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {
                    variant: "outlined",
                    placeholder: "Tarih seçiniz",
                    fullWidth: true,
                  }
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="form-group">
            <label htmlFor="egitimIcerigi">Eğitim İçeriği</label>
            <input
              id="egitimIcerigi"
              type="text"
              name="egitimIcerigi"
              placeholder="Eğitimin içeriğini giriniz"
              value={formData.egitimIcerigi}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="egitimAmaci">Eğitim Amacı</label>
            <input
              id="egitimAmaci"
              type="text"
              name="egitimAmaci"
              placeholder="Eğitimin amacını giriniz"
              value={formData.egitimAmaci}
              onChange={handleInputChange}
            />
          </div>
          <div className="button-group">
            <input
              type="file"
              id="excel-upload"
              accept=".xlsx,.xls"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
            <label htmlFor="excel-upload" className="button">
              Excel Dosyası Yükle
            </label>
            <button onClick={handleCreate}>Oluştur</button>
          </div>

          {showQuestions && (
            <div className="questions">
              <h3>Sorular</h3>
              <Paper style={{ padding: '20px', margin: '20px' }}>
                {dummyQuestions.map((question, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '15px',
                      gap: '10px'
                    }}
                  >
                    <TextField
                      fullWidth
                      label={`Soru ${index + 1}`}
                      value={question}
                      disabled
                      variant="outlined"
                    />
                    <IconButton
                      color="primary"
                      style={{ cursor: 'not-allowed' }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <EditIcon />
                    </IconButton>
                  </div>
                ))}
                
                <FormControl component="fieldset" style={{ marginTop: '20px' }}>
                  <FormLabel component="legend">Eğitim Süresi</FormLabel>
                  <RadioGroup
                    value={selectedDuration}
                    onChange={handleDurationChange}
                    style={{ marginTop: '10px' }}
                  >
                    <FormControlLabel 
                      value="4-6" 
                      control={<Radio />} 
                      label="4-6 Hafta" 
                    />
                    <FormControlLabel 
                      value="8-10" 
                      control={<Radio />} 
                      label="8-10 Hafta" 
                    />
                  </RadioGroup>
                </FormControl>
              </Paper>
              <button 
                onClick={handleSubmitToManager} 
                className="submit-button"
                disabled={!selectedDuration}
                style={{
                  opacity: selectedDuration ? 1 : 0.5,
                  cursor: selectedDuration ? 'pointer' : 'not-allowed'
                }}
              >
                Soruları Yöneticiye Gönder
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home; 