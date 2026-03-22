const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const db = new sqlite3.Database('./crm.db');

app.use(cors());
app.use(express.json());

// Initialize Database
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS projects (id INTEGER PRIMARY KEY, name TEXT, status TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS content (id INTEGER PRIMARY KEY, title TEXT, status TEXT)");
});

// API Endpoints
app.get('/api/projects', (req, res) => {
    db.all("SELECT * FROM projects", [], (err, rows) => res.json(rows));
});

// Mock Agent Automation Endpoint
app.post('/api/agent/trigger', (req, res) => {
    const { action } = req.body;
    console.log(`Agent triggered: ${action}`);
    res.json({ message: "Agent started successfully!", status: "active" });
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));