import React, { useEffect, useState } from 'react';

function App() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Backend'den veri çekme simülasyonu
    setProject({ name: 'Pixel Quest: Element Savaşçıları', status: 'Prototip #1 Aktif' });
  }, []);

  return (
    <div className="p-10 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">CRM: Yazılım Ekibi Paneli</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
          <h2 className="text-xl mb-4 font-semibold text-blue-400">Aktif Proje</h2>
          {project && (
            <div>
              <p className="text-2xl font-bold">{project.name}</p>
              <p className="mt-2 bg-blue-900 text-blue-200 inline-block px-3 py-1 rounded text-sm">{project.status}</p>
            </div>
          )}
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl mb-4">Ajan Durumu</h2>
          <div className="text-green-400 flex items-center">
            <span className="animate-ping h-2 w-2 rounded-full bg-green-400 mr-2"></span>
            Kodlama Ajanları Çalışıyor...
          </div>
          <div className="mt-4 text-sm text-gray-400">
             - Karakter sınıfı oluşturuldu.<br/>
             - Element sistemi tanımlandı.<br/>
             - Veritabanı şeması hazır.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;