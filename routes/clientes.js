const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM Clientes', (err, results) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { Nome, Email, Endereco } = req.body;

  db.query(
    'INSERT INTO Clientes (Nome, Email, Endereco) VALUES (?, ?, ?)',
    [Nome, Email, Endereco],
    (err, results) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(201).json({ Cliente_id: results.insertId, Nome, Email, Endereco });
    }
  );
});

module.exports = router;
