const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM Agendamento', (err, results) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { DataHorarioAgendamento, Servico_id, Cliente_id, Tempo_agendado } = req.body;

  db.query(
    'INSERT INTO Agendamento (DataHorarioAgendamento, Servico_id, Cliente_id, Tempo_agendado) VALUES (?, ?, ?, ?)',
    [DataHorarioAgendamento, Servico_id, Cliente_id, Tempo_agendado],
    (err, results) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(201).json({ Agendamento_id: results.insertId, DataHorarioAgendamento, Servico_id, Cliente_id, Tempo_agendado });
    }
  );
});

module.exports = router;
