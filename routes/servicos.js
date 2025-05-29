const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query(
    `SELECT s.Servico_id, ts.Nome_tipo AS Tipo_servico, s.Nome_servico 
     FROM Servicos s
     JOIN Tipo_Servicos ts ON ts.Tipo_servico_id = s.Tipo_servico_id`,
    (err, results) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json(results);
    }
  );
});

router.post('/', (req, res) => {
  const { Tipo_servico_id, Nome_servico } = req.body;

  db.query(
    'INSERT INTO Servicos (Tipo_servico_id, Nome_servico) VALUES (?, ?)',
    [Tipo_servico_id, Nome_servico],
    (err, results) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(201).json({ Servico_id: results.insertId, Tipo_servico_id, Nome_servico });
    }
  );
});

module.exports = router;
