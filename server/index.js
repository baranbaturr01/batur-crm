// Backend yapısı için basit bir sunucu
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/tasks', (req, res) => {
    res.json([{ id: 1, title: 'Mobil Oyun API Entegrasyonu', status: 'In Progress' }]);
});

app.listen(port, () => console.log(`Backend running on port ${port}`));