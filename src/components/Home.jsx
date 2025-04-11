import { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('manuel');
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
    'Soru 1: Bu bir örnek sorudur?',
    'Soru 2: İkinci örnek soru burada yer alıyor?',
    'Soru 3: Üçüncü soru örneği?',
    'Soru 4: Dördüncü soru örneği?',
    'Soru 5: Son soru örneği?'
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
    if (!formData.egitimAdi || !formData.egitimIcerigi || !formData.egitimAmaci) {
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

  const handleSubmitToManager = () => {
    alert('Sorular yöneticiye gönderildi!');
    setShowQuestions(false);
    setFormData({
      egitimAdi: '',
      egitimIcerigi: '',
      egitimAmaci: '',
    });
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
              {dummyQuestions.map((question, index) => (
                <div key={index} className="form-group">
                  <input
                    type="text"
                    value={question}
                    readOnly
                  />
                </div>
              ))}
              <button onClick={handleSubmitToManager} className="submit-button">
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