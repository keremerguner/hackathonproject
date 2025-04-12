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
    'Satış Teknikleri': [
      { name: 'Müşteri İlişkileri Yönetimi', averageScore: 18 },
      { name: 'Satış Kapama Teknikleri', averageScore: 15 },
      { name: 'İkna Yöntemleri', averageScore: 17 }
    ],
    'İletişim Becerileri': [
      { name: 'Etkili Konuşma', averageScore: 16 },
      { name: 'Beden Dili', averageScore: 19 },
      { name: 'Dinleme Teknikleri', averageScore: 14 }
    ],
    'Yönetim Becerileri': [
      { name: 'Liderlik', averageScore: 20 },
      { name: 'Takım Yönetimi', averageScore: 17 },
      { name: 'Kriz Yönetimi', averageScore: 15 }
    ]
  };

  // Kişi verileri
  const personData = {
    'Ahmet Yılmaz': [
      {
        educationName: 'Satış Teknikleri',
        generalAverage: 3.8,
        subTitle: 'Müşteri İlişkileri',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'İletişim Becerileri',
        generalAverage: 3.5,
        subTitle: 'Etkili Konuşma',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'Yönetim Becerileri',
        generalAverage: 3.9,
        subTitle: 'Takım Liderliği',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Dijital Pazarlama',
        generalAverage: 3.7,
        subTitle: 'Sosyal Medya Yönetimi',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'Müşteri Deneyimi',
        generalAverage: 4.1,
        subTitle: 'Müşteri Memnuniyeti',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Proje Yönetimi',
        generalAverage: 3.6,
        subTitle: 'Agile Metodolojiler',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'Stres Yönetimi',
        generalAverage: 3.9,
        subTitle: 'İş-Yaşam Dengesi',
        averageScore: 4,
        evaluation: 1
      }
    ],
    'Mehmet Demir': [
      {
        educationName: 'Yönetim Becerileri',
        generalAverage: 4.0,
        subTitle: 'Liderlik',
        averageScore: 5,
        evaluation: 1
      },
      {
        educationName: 'İletişim Becerileri',
        generalAverage: 3.7,
        subTitle: 'Beden Dili',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Problem Çözme',
        generalAverage: 4.2,
        subTitle: 'Analitik Düşünme',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Zaman Yönetimi',
        generalAverage: 3.8,
        subTitle: 'Önceliklendirme',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'İnovasyon',
        generalAverage: 4.1,
        subTitle: 'Yaratıcı Düşünme',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Sunum Teknikleri',
        generalAverage: 3.9,
        subTitle: 'Etkili Sunum',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Ekip Yönetimi',
        generalAverage: 4.0,
        subTitle: 'Motivasyon Teknikleri',
        averageScore: 4,
        evaluation: 1
      }
    ],
    'Ayşe Kaya': [
      {
        educationName: 'Satış Teknikleri',
        generalAverage: 3.9,
        subTitle: 'Satış Kapama',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Yönetim Becerileri',
        generalAverage: 3.6,
        subTitle: 'Kriz Yönetimi',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'Müzakere Teknikleri',
        generalAverage: 4.0,
        subTitle: 'İkna Stratejileri',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Finansal Okuryazarlık',
        generalAverage: 3.7,
        subTitle: 'Bütçe Yönetimi',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'Dijital Dönüşüm',
        generalAverage: 3.8,
        subTitle: 'Teknoloji Adaptasyonu',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Marka Yönetimi',
        generalAverage: 4.1,
        subTitle: 'Marka Stratejisi',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Veri Analizi',
        generalAverage: 3.9,
        subTitle: 'Raporlama Teknikleri',
        averageScore: 4,
        evaluation: 1
      }
    ]
  };

  // Departman verileri
  const departmentData = {
    'Satış': [
      {
        educationName: 'Satış Teknikleri',
        generalAverage: 3.7,
        subTitle: 'Müşteri İlişkileri',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'İletişim Becerileri',
        generalAverage: 3.5,
        subTitle: 'İkna Teknikleri',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'Müşteri Deneyimi',
        generalAverage: 3.9,
        subTitle: 'Müşteri Memnuniyeti',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Dijital Satış',
        generalAverage: 3.6,
        subTitle: 'E-ticaret',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'Pazarlama Stratejileri',
        generalAverage: 3.8,
        subTitle: 'Pazar Analizi',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Sosyal Medya Satışı',
        generalAverage: 3.7,
        subTitle: 'Online Pazarlama',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'Satış Sonrası Hizmetler',
        generalAverage: 3.9,
        subTitle: 'Müşteri Sadakati',
        averageScore: 4,
        evaluation: 1
      }
    ],
    'İnsan Kaynakları': [
      {
        educationName: 'Yönetim Becerileri',
        generalAverage: 3.8,
        subTitle: 'Takım Yönetimi',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'İletişim Becerileri',
        generalAverage: 3.6,
        subTitle: 'Etkili İletişim',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'İşe Alım Teknikleri',
        generalAverage: 4.0,
        subTitle: 'Mülakat Yönetimi',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Performans Yönetimi',
        generalAverage: 3.7,
        subTitle: 'Değerlendirme Sistemleri',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'Çalışan Bağlılığı',
        generalAverage: 3.9,
        subTitle: 'Motivasyon Yönetimi',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'İş Hukuku',
        generalAverage: 3.8,
        subTitle: 'Yasal Düzenlemeler',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Yetenek Yönetimi',
        generalAverage: 4.1,
        subTitle: 'Kariyer Planlama',
        averageScore: 4,
        evaluation: 1
      }
    ],
    'Yönetim': [
      {
        educationName: 'Liderlik Becerileri',
        generalAverage: 4.0,
        subTitle: 'Stratejik Yönetim',
        averageScore: 5,
        evaluation: 1
      },
      {
        educationName: 'Kriz Yönetimi',
        generalAverage: 3.7,
        subTitle: 'Risk Analizi',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Stratejik Planlama',
        generalAverage: 4.1,
        subTitle: 'Hedef Belirleme',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'İnovasyon Yönetimi',
        generalAverage: 3.9,
        subTitle: 'Değişim Yönetimi',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Finansal Yönetim',
        generalAverage: 3.8,
        subTitle: 'Bütçe Planlama',
        averageScore: 3,
        evaluation: 1
      },
      {
        educationName: 'Proje Yönetimi',
        generalAverage: 4.0,
        subTitle: 'Kaynak Yönetimi',
        averageScore: 4,
        evaluation: 1
      },
      {
        educationName: 'Kurumsal Yönetişim',
        generalAverage: 3.9,
        subTitle: 'Sürdürülebilirlik',
        averageScore: 4,
        evaluation: 1
      }
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
                <TableCell>Eğitimin Adı</TableCell>
                <TableCell>Ortalama Performans Puanı</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedEducation.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.averageScore}</TableCell>
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
        <Tab label="Eğitim Adı" />
        <Tab label="Kişi Adı" />
        <Tab label="Departman Adı" />
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