import React, { useEffect, useState } from 'react';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="p-10 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">CRM Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl mb-4">Projeler</h2>
          {projects.map(p => <div key={p.id}>{p.name} - {p.status}</div>)}
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl mb-4">Otomasyon</h2>
          <button 
            className="bg-blue-600 px-4 py-2 rounded"
            onClick={() => fetch('http://localhost:3001/api/agent/trigger', { method: 'POST', body: JSON.stringify({action: 'deploy'}), headers: {'Content-Type': 'application/json'} })}
          >
            Ajanı Başlat
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;