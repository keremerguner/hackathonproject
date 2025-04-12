import { useState } from 'react';

const Egitimler = () => {
  const [activeTab, setActiveTab] = useState('tumu');
  const [selectedUser, setSelectedUser] = useState(null);
  const [completedUsers, setCompletedUsers] = useState([]);

  // Dummy veri
  const egitimler = [
    {
      id: 1,
      title: 'Müşteri Odaklılık Eğitimi',
      users: [
        {
          id: 1,
          name: 'Emrullah Erdeve',
          image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjAgMjF2LTJhNCA0IDAgMCAwLTQtNEg4YTQgNCAwIDAgMC00IDR2MiI+PC9wYXRoPjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIgLz48L3N2Zz4=',
          sicilNo: '111111111111',
          remainingDays: 2,
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
          name: 'Test Kullanıcı 1',
          image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjAgMjF2LTJhNCA0IDAgMCAwLTQtNEg4YTQgNCAwIDAgMC00IDR2MiI+PC9wYXRoPjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIgLz48L3N2Zz4=',
          sicilNo: '222222222222',
          remainingDays: 3,
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
          name: 'Test Kullanıcı 2',
          image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjAgMjF2LTJhNCA0IDAgMCAwLTQtNEg4YTQgNCAwIDAgMC00IDR2MiI+PC9wYXRoPjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIgLz48L3N2Zz4=',
          sicilNo: '333333333333',
          remainingDays: 2,
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
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
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
          Atananlar
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
          {egitimler.map(egitim => (
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
              <p>Eğitim adı: Müşteri Odaklı eğitim</p>
              <p>Eğitim tarihi: 12.04.2024</p>
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