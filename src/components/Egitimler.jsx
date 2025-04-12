import { useState } from 'react';

const Egitimler = () => {
  const [activeTab, setActiveTab] = useState('tumu');
  const [selectedUser, setSelectedUser] = useState(null);
  const [completedUsers, setCompletedUsers] = useState([]);
  const [egitimlerState, setEgitimlerState] = useState([
    {
      id: 1,
      title: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
      users: [
        {
          id: 1,
          name: 'Furkan Aktürk',
          department: 'Satış Departmanı',
          image: 'https://randomuser.me/api/portraits/men/32.jpg',
          sicilNo: '111111111111',
          remainingDays: 20,
          evaluationDate: null,
          questions: [
            'Müşteriye beklediğinden fazlasını sunarak olumlu bir sürpriz yaratır',
            'Müşterinin tercih sebeplerini analiz ederek deneyimi bu yönde şekillendirir',
            'Müşteri yolculuğunun her temas noktasında olumlu deneyim yaşatmayı hedefler',
            'Hizmet sunduğu kişiyi potansiyel marka elçisi olarak görüp bu yönde etki yaratır',
            'Müşteriyle bağ kurmak için onun duygularına ve beklentilerine empatiyle yaklaşır'
          ]
        },
        {
          id: 2,
          name: 'Ayşe Yılmaz',
          department: 'İnsan Kaynakları',
          image: 'https://randomuser.me/api/portraits/women/28.jpg',
          sicilNo: '222222222222',
          remainingDays: 20,
          evaluationDate: null,
          questions: [
            'Müşteriye beklediğinden fazlasını sunarak olumlu bir sürpriz yaratır',
            'Müşterinin tercih sebeplerini analiz ederek deneyimi bu yönde şekillendirir',
            'Müşteri yolculuğunun her temas noktasında olumlu deneyim yaşatmayı hedefler',
            'Hizmet sunduğu kişiyi potansiyel marka elçisi olarak görüp bu yönde etki yaratır',
            'Müşteriyle bağ kurmak için onun duygularına ve beklentilerine empatiyle yaklaşır'
          ]
        },
        {
          id: 3,
          name: 'Mehmet Demir',
          department: 'Yönetim',
          image: 'https://randomuser.me/api/portraits/men/41.jpg',
          sicilNo: '333333333333',
          remainingDays: 20,
          evaluationDate: null,
          questions: [
            'Müşteriye beklediğinden fazlasını sunarak olumlu bir sürpriz yaratır',
            'Müşterinin tercih sebeplerini analiz ederek deneyimi bu yönde şekillendirir',
            'Müşteri yolculuğunun her temas noktasında olumlu deneyim yaşatmayı hedefler',
            'Hizmet sunduğu kişiyi potansiyel marka elçisi olarak görüp bu yönde etki yaratır',
            'Müşteriyle bağ kurmak için onun duygularına ve beklentilerine empatiyle yaklaşır'
          ]
        }
      ]
    }
  ]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      const currentDate = new Date().toLocaleString('tr-TR');
      const updatedUser = { ...selectedUser, evaluationDate: currentDate };
      
      // Eğitimler listesini güncelle
      const updatedEgitimler = egitimlerState.map(egitim => ({
        ...egitim,
        users: egitim.users.map(user => 
          user.id === selectedUser.id ? updatedUser : user
        )
      }));
      
      setEgitimlerState(updatedEgitimler);
      setCompletedUsers([...completedUsers, selectedUser.id]);
      setSelectedUser(null);
    }
  };

  const [ratings, setRatings] = useState({});
  const [noEvaluation, setNoEvaluation] = useState(false);

  const handleRatingChange = (questionIndex, rating) => {
    if (!noEvaluation) {
      setRatings({
        ...ratings,
        [questionIndex]: rating
      });
    }
  };

  return (
    <div className="egitimler">
      <div className="tabs">
        <button
          className={activeTab === 'tumu' ? 'active' : ''}
          onClick={() => setActiveTab('tumu')}
        >
          Tümü
        </button>
        <button
          className={activeTab === 'atananlar' ? 'active' : ''}
          onClick={() => setActiveTab('atananlar')}
        >
          Devam edenler
        </button>
        <button
          className={activeTab === 'tamamlananlar' ? 'active' : ''}
          onClick={() => setActiveTab('tamamlananlar')}
        >
          Tamamlananlar
        </button>
      </div>

      {!selectedUser ? (
        <div className="egitimler-list">
          {egitimlerState.map(egitim => (
            <div key={egitim.id} className="egitim-card">
              <h3>{egitim.title}</h3>
              <div className="users-grid">
                {egitim.users.map(user => {
                  if (
                    (activeTab === 'tumu') ||
                    (activeTab === 'tamamlananlar' && completedUsers.includes(user.id)) ||
                    (activeTab === 'atananlar' && !completedUsers.includes(user.id))
                  ) {
                    return (
                      <div
                        key={user.id}
                        className="user-card"
                        onClick={() => handleUserClick(user)}
                      >
                        <div className="user-image">
                          <img src={user.image} alt={user.name} />
                          <span className="remaining-days">
                            son {user.remainingDays} gün
                          </span>
                        </div>
                        <div className="user-name">{user.name}</div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="user-evaluation">
          <div className="user-info">
            <img src={selectedUser.image} alt={selectedUser.name} className="user-photo" />
            <div className="user-details">
              <p>Adı Soyadı: {selectedUser.name}</p>
              <p>Sicil No: {selectedUser.sicilNo}</p>
              <p>Departman: {selectedUser.department}</p>
              <p>Eğitim adı: Müşteri Odaklı eğitim</p>
              <p>Eğitim tarihi: 12.04.2024</p>
              {selectedUser.evaluationDate && (
                <p>Değerlendirme tarihi: {selectedUser.evaluationDate}</p>
              )}
            </div>
          </div>
          <div className="user-evaluation-container">
            <div className="user-evaluation-header">
              <h4> Lütfen aşağıdaki alanlarda çalışmanın eğitim öncesi ve sonrası davranis değişimini 1 (hiç gozlemlemedim ) ile 5 ( çok net gözlemledim ) arasında degerlendirin.</h4>
              <p> .</p>
            </div>
          </div>

          

          <form onSubmit={handleRatingSubmit} className="evaluation-form">
            <table className="questions-table">
              <thead>
                <tr>
                  <th>Sorular</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                </tr>
              </thead>
              <tbody>
                {selectedUser.questions.map((question, index) => (
                  <tr key={index}>
                    <td>{question}</td>
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <td key={rating}>
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={rating}
                          checked={ratings[index] === rating}
                          onChange={() => handleRatingChange(index, rating)}
                          disabled={noEvaluation}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="no-evaluation-checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={noEvaluation}
                  onChange={(e) => {
                    setNoEvaluation(e.target.checked);
                    if (e.target.checked) {
                      setRatings({});
                    }
                  }}
                />
                Değerlendirmeye değer bir durum bulunmamaktadır.
              </label>
            </div>

            <div className="button-group">
              <button type="button" onClick={() => setSelectedUser(null)}>
                İptal
              </button>
              <button type="submit" className="submit-button">
                Gönder
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Egitimler; 