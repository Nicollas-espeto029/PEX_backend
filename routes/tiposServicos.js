const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM Tipo_Servicos', (err, results) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { Nome_tipo } = req.body;

  if (!Nome_tipo) return res.status(400).json({ erro: 'Nome_tipo é obrigatório' });

  db.query(
    'INSERT INTO Tipo_Servicos (Nome_tipo) VALUES (?)',
    [Nome_tipo],
    (err, result) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(201).json({ Tipo_servico_id: result.insertId, Nome_tipo });
    }
  );
});

module.exports = router;
