import React, { useState } from 'react';
import { Tabs, Tab, Select, MenuItem, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EditIcon from '@mui/icons-material/Edit';

const Reports = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Eğitim verileri
  const educationData = {
    'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE': [
      { name: 'Müşteriye beklediğinden fazlasını sunarak olumlu bir sürpriz yaratır', averageScore: 4.1 },
      { name: 'Müşterinin tercih sebeplerini analiz ederek deneyimi bu yönde şekillendirir', averageScore: 4.5 },
      { name: 'Müşteri yolculuğunun her temas noktasında olumlu deneyim yaşatmayı hedefler', averageScore: 4.2 },
      { name: 'Hizmet sunduğu kişiyi potansiyel marka elçisi olarak görüp bu yönde etki yaratır', averageScore: 3.7 },
      { name: 'Müşteriyle bağ kurmak için onun duygularına ve beklentilerine empatiyle yaklaşır', averageScore: 2.9},

    ],
    'AYAKKABI ÜRÜN EĞİTİMİ': [
      { name: 'Ayakkabının üretim süreci ve aşamaları hakkında bilgi sahibidir', averageScore: 3 },
      { name: 'Ayakkabının farklı bölümlerini ve bu bölümlerde kullanılan malzemelerin işlevlerini tanımlar', averageScore: 2.5 },
      { name: 'Ürünle ilgili müşteri sorularını, teknik bilgiyle destekleyerek açık ve doğru şekilde yanıtlar', averageScore: 4 },
      { name: 'Ayakkabıyla ilgili müşteri talep ve ihtiyaçlarını anlayarak uygun ürünü önermede etkili olur', averageScore: 3.2 },
      { name: 'Uygulamalı çalışmalarda öğrendiklerini doğru ve güvenilir ürün bilgilendirmesi ile pekiştirir', averageScore: 4.8 }
    ]
  };

  // Kişi verileri
  const personData = {
    'Ahmet Yılmaz': [
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 3.8,
        subTitle: 'Müşteriye beklediğinden fazlasını sunarak olumlu bir sürpriz yaratır',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 3.5,
        subTitle: 'Müşterinin tercih sebeplerini analiz ederek deneyimi bu yönde şekillendirir',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 3.9,
        subTitle: 'Müşteri yolculuğunun her temas noktasında olumlu deneyim yaşatmayı hedefler',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 4.7,
        subTitle: 'Hizmet sunduğu kişiyi potansiyel marka elçisi olarak görüp bu yönde etki yaratır',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 4.2,
        subTitle: 'Müşteriyle bağ kurmak için onun duygularına ve beklentilerine empatiyle yaklaşır',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 3,
        subTitle: 'Ayakkabının üretim süreci ve aşamaları hakkında bilgi sahibidir',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 4.6,
        subTitle: '	Ayakkabının farklı bölümlerini ve bu bölümlerde kullanılan malzemelerin işlevlerini tanımlar',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 2.6,
        subTitle: 'Ürünle ilgili müşteri sorularını, teknik bilgiyle destekleyerek açık ve doğru şekilde yanıtlar',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 3.4,
        subTitle: 'Ayakkabıyla ilgili müşteri talep ve ihtiyaçlarını anlayarak uygun ürünü önermede etkili olur',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 3.1,
        subTitle: 'Uygulamalı çalışmalarda öğrendiklerini doğru ve güvenilir ürün bilgilendirmesi ile pekiştirir',
        averageScore: 3,
        evaluation: 1
      },
    ],
    'Mehmet Demir': [
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 3.8,
        subTitle: 'Müşteriye beklediğinden fazlasını sunarak olumlu bir sürpriz yaratır',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 3.5,
        subTitle: 'Müşterinin tercih sebeplerini analiz ederek deneyimi bu yönde şekillendirir',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 3.9,
        subTitle: 'Müşteri yolculuğunun her temas noktasında olumlu deneyim yaşatmayı hedefler',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 4.7,
        subTitle: 'Hizmet sunduğu kişiyi potansiyel marka elçisi olarak görüp bu yönde etki yaratır',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 4.2,
        subTitle: 'Müşteriyle bağ kurmak için onun duygularına ve beklentilerine empatiyle yaklaşır',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 3,
        subTitle: 'Ayakkabının üretim süreci ve aşamaları hakkında bilgi sahibidir',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 4.6,
        subTitle: '	Ayakkabının farklı bölümlerini ve bu bölümlerde kullanılan malzemelerin işlevlerini tanımlar',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 2.6,
        subTitle: 'Ürünle ilgili müşteri sorularını, teknik bilgiyle destekleyerek açık ve doğru şekilde yanıtlar',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 3.4,
        subTitle: 'Ayakkabıyla ilgili müşteri talep ve ihtiyaçlarını anlayarak uygun ürünü önermede etkili olur',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 3.1,
        subTitle: 'Uygulamalı çalışmalarda öğrendiklerini doğru ve güvenilir ürün bilgilendirmesi ile pekiştirir',
        averageScore: 4,
        evaluation: 1
      },
    ],
    'Ayşe Kaya': [
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 3.8,
        subTitle: 'Müşteriye beklediğinden fazlasını sunarak olumlu bir sürpriz yaratır',
        averageScore: 2,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 3.5,
        subTitle: 'Müşterinin tercih sebeplerini analiz ederek deneyimi bu yönde şekillendirir',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 3.9,
        subTitle: 'Müşteri yolculuğunun her temas noktasında olumlu deneyim yaşatmayı hedefler',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 4.7,
        subTitle: 'Hizmet sunduğu kişiyi potansiyel marka elçisi olarak görüp bu yönde etki yaratır',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 4.2,
        subTitle: 'Müşteriyle bağ kurmak için onun duygularına ve beklentilerine empatiyle yaklaşır',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 3,
        subTitle: 'Ayakkabının üretim süreci ve aşamaları hakkında bilgi sahibidir',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 4.6,
        subTitle: '	Ayakkabının farklı bölümlerini ve bu bölümlerde kullanılan malzemelerin işlevlerini tanımlar',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 2.6,
        subTitle: 'Ürünle ilgili müşteri sorularını, teknik bilgiyle destekleyerek açık ve doğru şekilde yanıtlar',
        averageScore: 2,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 3.4,
        subTitle: 'Ayakkabıyla ilgili müşteri talep ve ihtiyaçlarını anlayarak uygun ürünü önermede etkili olur',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 3.1,
        subTitle: 'Uygulamalı çalışmalarda öğrendiklerini doğru ve güvenilir ürün bilgilendirmesi ile pekiştirir',
        averageScore: 3,
        evaluation: 1
      },
    ]
  };

  // Departman verileri
  const departmentData = {
    'Satış': [
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 3,
        subTitle: 'Ayakkabının üretim süreci ve aşamaları hakkında bilgi sahibidir',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 4.6,
        subTitle: '	Ayakkabının farklı bölümlerini ve bu bölümlerde kullanılan malzemelerin işlevlerini tanımlar',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 2.6,
        subTitle: 'Ürünle ilgili müşteri sorularını, teknik bilgiyle destekleyerek açık ve doğru şekilde yanıtlar',
        averageScore: 2,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 3.4,
        subTitle: 'Ayakkabıyla ilgili müşteri talep ve ihtiyaçlarını anlayarak uygun ürünü önermede etkili olur',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 3.1,
        subTitle: 'Uygulamalı çalışmalarda öğrendiklerini doğru ve güvenilir ürün bilgilendirmesi ile pekiştirir',
        averageScore: 3,
        evaluation: 1
      },
    ],
    'İnsan Kaynakları': [
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 3.8,
        subTitle: 'Müşteriye beklediğinden fazlasını sunarak olumlu bir sürpriz yaratır',
        averageScore: 2,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 3.5,
        subTitle: 'Müşterinin tercih sebeplerini analiz ederek deneyimi bu yönde şekillendirir',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 3.9,
        subTitle: 'Müşteri yolculuğunun her temas noktasında olumlu deneyim yaşatmayı hedefler',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 4.7,
        subTitle: 'Hizmet sunduğu kişiyi potansiyel marka elçisi olarak görüp bu yönde etki yaratır',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 4.2,
        subTitle: 'Müşteriyle bağ kurmak için onun duygularına ve beklentilerine empatiyle yaklaşır',
        averageScore: 4,
        evaluation: 1
      },
    ],
    'Yönetim': [
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 3.8,
        subTitle: 'Müşteriye beklediğinden fazlasını sunarak olumlu bir sürpriz yaratır',
        averageScore: 2,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 3.5,
        subTitle: 'Müşterinin tercih sebeplerini analiz ederek deneyimi bu yönde şekillendirir',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 3.9,
        subTitle: 'Müşteri yolculuğunun her temas noktasında olumlu deneyim yaşatmayı hedefler',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 4.7,
        subTitle: 'Hizmet sunduğu kişiyi potansiyel marka elçisi olarak görüp bu yönde etki yaratır',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'MEMNUN MÜŞTERİDEN TARAFTAR MÜŞTERİYE',
        generalAverage: 4.2,
        subTitle: 'Müşteriyle bağ kurmak için onun duygularına ve beklentilerine empatiyle yaklaşır',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 3,
        subTitle: 'Ayakkabının üretim süreci ve aşamaları hakkında bilgi sahibidir',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 4.6,
        subTitle: '	Ayakkabının farklı bölümlerini ve bu bölümlerde kullanılan malzemelerin işlevlerini tanımlar',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 2.6,
        subTitle: 'Ürünle ilgili müşteri sorularını, teknik bilgiyle destekleyerek açık ve doğru şekilde yanıtlar',
        averageScore: 2,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 3.4,
        subTitle: 'Ayakkabıyla ilgili müşteri talep ve ihtiyaçlarını anlayarak uygun ürünü önermede etkili olur',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'AYAKKABI ÜRÜN EĞİTİMİ',
        generalAverage: 3.1,
        subTitle: 'Uygulamalı çalışmalarda öğrendiklerini doğru ve güvenilir ürün bilgilendirmesi ile pekiştirir',
        averageScore: 3,
        evaluation: 1
      },
    ]
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setSearchTerm('');
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getMenuItems = () => {
    if (tabValue === 0) {
      return Object.keys(educationData).map((education) => (
        <MenuItem key={education} value={education}>{education}</MenuItem>
      ));
    } else if (tabValue === 1) {
      return Object.keys(personData).map((person) => (
        <MenuItem key={person} value={person}>{person}</MenuItem>
      ));
    } else {
      return Object.keys(departmentData).map((department) => (
        <MenuItem key={department} value={department}>{department}</MenuItem>
      ));
    }
  };

  const getSelectLabel = () => {
    if (tabValue === 0) {
      return "Eğitim Seçiniz";
    } else if (tabValue === 1) {
      return "Kişi Seçiniz";
    } else {
      return "Departman Seçiniz";
    }
  };

  const getEvaluationIcon = (averageScore, generalAverage) => {
    if (averageScore > generalAverage) {
      return <TrendingUpIcon style={{ color: 'green' }} />;
    } else if (averageScore < generalAverage) {
      return <TrendingDownIcon style={{ color: 'red' }} />;
    } else {
      return <TrendingFlatIcon style={{ color: 'gray' }} />;
    }
  };

  const handleExportExcel = () => {
    // Boş fonksiyon - ileride implement edilecek
    console.log('Excel export clicked');
  };

  const renderEducationTable = () => {
    const selectedEducation = educationData[searchTerm] || [];
    
    return (
      <div style={{ position: 'relative', marginBottom: '60px' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Eğitim Değerlendirme Soruları</TableCell>
                <TableCell>Ortalama Performans Puanı</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedEducation.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="center">{row.averageScore}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {searchTerm && selectedEducation.length > 0 && (
          <Button
            variant="contained"
            color="primary"
            startIcon={<FileDownloadIcon />}
            onClick={handleExportExcel}
            style={{
              position: 'absolute',
              bottom: '-50px',
              right: '0',
              backgroundColor: '#4CAF50'
            }}
          >
            Excel'e Aktar
          </Button>
        )}
      </div>
    );
  };

  const renderDetailedTable = () => {
    let selectedData = [];
    if (tabValue === 1) {
      selectedData = personData[searchTerm] || [];
    } else {
      selectedData = departmentData[searchTerm] || [];
    }

    return (
      <div style={{ position: 'relative', marginBottom: '60px' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
             <TableCell>Eğitim Adı</TableCell>
              <TableCell>Genel Performans Ortalama</TableCell>
              <TableCell>Davranış Gözlemi</TableCell>
              <TableCell>Ortalama Performans Puanı</TableCell>
              <TableCell align="center">Performans Değerlendirme</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
              {selectedData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.educationName}</TableCell>
                  <TableCell>{row.generalAverage}</TableCell>
                  <TableCell>{row.subTitle}</TableCell>
                  <TableCell>{row.averageScore}</TableCell>
                  <TableCell align="center">
                    {getEvaluationIcon(row.averageScore, row.generalAverage)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {searchTerm && selectedData.length > 0 && (
          <Button
            variant="contained"
            color="primary"
            startIcon={<FileDownloadIcon />}
            onClick={handleExportExcel}
            style={{
              position: 'absolute',
              bottom: '-50px',
              right: '0',
              backgroundColor: '#4CAF50'
            }}
          >
            Excel'e Aktar
          </Button>
        )}
      </div>
    );
  };

  const getSearchHelperText = () => {
    if (tabValue === 0) {
      return 'Mevcut eğitimler: Satış Teknikleri, İletişim Becerileri, Yönetim Becerileri';
    } else if (tabValue === 1) {
      return 'Mevcut kişiler: Ahmet Yılmaz, Mehmet Demir, Ayşe Kaya';
    } else {
      return 'Mevcut departmanlar: Satış, İnsan Kaynakları, Yönetim';
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Eğitim Eklilik analizi" />
        <Tab label="Katılımcı Performans Analizi" />
        <Tab label="Grup performans analizi" />
      </Tabs>

      <div style={{ margin: '20px 0' }}>
        <FormControl fullWidth>
          <InputLabel>{getSelectLabel()}</InputLabel>
          <Select
            value={searchTerm}
            label={getSelectLabel()}
            onChange={handleSearchChange}
            style={{ marginBottom: '20px' }}
          >
            <MenuItem value="">
              <em>Seçiniz</em>
            </MenuItem>
            {getMenuItems()}
          </Select>
        </FormControl>

        {tabValue === 0 && renderEducationTable()}
        {tabValue === 1 && renderDetailedTable()}
        {tabValue === 2 && renderDetailedTable()}
      </div>
    </div>
  );
};

export default Reports; 