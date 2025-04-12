import { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer
} from 'recharts';

const Statistics = () => {
  // Örnek veriler
  const departmentData = [
    { name: 'Satış', value: 35 },
    { name: 'Pazarlama', value: 25 },
    { name: 'İK', value: 15 },
    { name: 'Finans', value: 25 }
  ];

  const monthlyData = [
    { name: 'Ocak', tamamlanan: 4, devamEden: 2 },
    { name: 'Şubat', tamamlanan: 3, devamEden: 4 },
    { name: 'Mart', tamamlanan: 5, devamEden: 3 },
    { name: 'Nisan', tamamlanan: 6, devamEden: 2 },
    { name: 'Mayıs', tamamlanan: 4, devamEden: 4 },
    { name: 'Haziran', tamamlanan: 7, devamEden: 3 }
  ];

  const performanceData = [
    { ay: 'Ocak', skor: 75 },
    { ay: 'Şubat', skor: 82 },
    { ay: 'Mart', skor: 78 },
    { ay: 'Nisan', skor: 85 },
    { ay: 'Mayıs', skor: 88 },
    { ay: 'Haziran', skor: 92 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '30px', color: '#333' }}>Eğitim İstatistikleri</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '20px',
        marginBottom: '30px' 
      }}>
        {/* Departman Dağılımı - Pasta Grafik */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '20px', color: '#666' }}>Departman Bazlı Eğitim Dağılımı</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Aylık Eğitim Durumu - Çubuk Grafik */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '20px', color: '#666' }}>Aylık Eğitim Durumu</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="tamamlanan" name="Tamamlanan" fill="#82ca9d" />
              <Bar dataKey="devamEden" name="Devam Eden" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performans Trendi - Çizgi Grafik */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginTop: '20px'
      }}>
        <h3 style={{ marginBottom: '20px', color: '#666' }}>Ortalama Performans Trendi</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ay" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="skor" 
              name="Performans Skoru"
              stroke="#ff7300" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics; 