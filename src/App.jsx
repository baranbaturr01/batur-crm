import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      <header className="flex justify-between items-center mb-8 border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-black text-blue-500">PIXEL QUEST: CORE</h1>
        <div className="space-x-4">
          <button onClick={() => setActiveTab('dashboard')} className="hover:text-blue-400">Dashboard</button>
          <button onClick={() => setActiveTab('skilltree')} className="hover:text-blue-400">Skill Tree</button>
          <button onClick={() => setActiveTab('market')} className="hover:text-blue-400">Market</button>
        </div>
      </header>

      {activeTab === 'dashboard' && (
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold mb-2">Proje Durumu</h3>
            <div className="text-green-500 text-sm">● Yazılım Ekibi Aktif</div>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold mb-2">Otomasyon Logları</h3>
            <div className="text-xs text-slate-400 h-20 overflow-y-auto">
              [23:37] Database: pixelquest.db initialized.<br/>
              [23:38] Backend: API endpoints listening.<br/>
              [23:39] Agent: Skill Tree logic calculated.
            </div>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-bold mb-2">Hızlı Aksiyon</h3>
            <button className="w-full bg-blue-600 py-2 rounded mt-2 hover:bg-blue-500">Deploy Build</button>
          </div>
        </div>
      )}

      {activeTab === 'skilltree' && (
        <div className="bg-slate-900 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Element Savaşçıları: Skill Tree</h2>
          <div className="grid grid-cols-4 gap-4">
            {['Pyro', 'Cryo', 'Terra', 'Aero'].map(char => (
              <div key={char} className="border border-slate-700 p-4 rounded text-center">
                <div className="text-xl font-bold mb-2">{char}</div>
                <button className="bg-slate-700 w-full py-1 rounded text-sm hover:bg-slate-600">Level 1</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'market' && (
        <div className="bg-slate-900 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Market & Yükseltmeler</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-slate-700 p-4 flex justify-between items-center">
              <span>Hız Güçlendirici</span>
              <button className="bg-emerald-600 px-4 py-1 rounded font-bold">500 Coin</button>
            </div>
            <div className="border border-slate-700 p-4 flex justify-between items-center">
              <span>Kalkan Koruması</span>
              <button className="bg-emerald-600 px-4 py-1 rounded font-bold">750 Coin</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;