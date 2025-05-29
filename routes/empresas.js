const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM Empresa', (err, results) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(results);
  });
});

module.exports = router;
