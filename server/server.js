const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const db = new sqlite3.Database('./pixelquest.db');

app.use(cors());
app.use(express.json());

// Initialize Database
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS projects (id INTEGER PRIMARY KEY, name TEXT, status TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS characters (id INTEGER PRIMARY KEY, name TEXT, element TEXT, speed REAL, strength REAL, shield REAL)");
    
    // Seed projects if empty
    db.get("SELECT COUNT(*) as count FROM projects", (err, row) => {
        if (row.count === 0) {
            db.run("INSERT INTO projects (name, status) VALUES ('Pixel Quest', 'Development')");
        }
    });
});

app.get('/api/projects', (req, res) => {
    db.all("SELECT * FROM projects", [], (err, rows) => res.json(rows));
});

app.get('/api/characters', (req, res) => {
    db.all("SELECT * FROM characters", [], (err, rows) => res.json(rows));
});

app.listen(3001, () => console.log('Backend running on port 3001'));