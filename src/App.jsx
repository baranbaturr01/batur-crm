import React, { useState } from 'react';

function App() {
  const [status, setStatus] = useState('Beklemede');
  const [loading, setLoading] = useState(false);

  const startAgent = () => {
    setLoading(true);
    setStatus('Ajan Başlatılıyor...');
    
    // 2 saniye sonra "aktif" moda geç (backend varmış gibi simüle et)
    setTimeout(() => {
      setLoading(false);
      setStatus('✅ Ajan Aktif: Yazılım süreçleri izleniyor...');
    }, 2000);
  };

  return (
    <div className="p-10 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">CRM Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl mb-4">Projeler</h2>
          <p>Yazılım Projesi: Mobil Oyun Geliştirme (Aktif)</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl mb-4">Otomasyon</h2>
          <button 
            disabled={loading}
            className={`px-4 py-2 rounded ${loading ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-500'}`}
            onClick={startAgent}
          >
            {loading ? 'İşleniyor...' : 'Ajanı Başlat'}
          </button>
          <p className="mt-4 text-sm text-green-400">{status}</p>
        </div>
      </div>
    </div>
  );
}

export default App;