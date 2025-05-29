const express = require('express');
const app = express();
app.use(express.json());

// Importar rotas
const empresasRoutes = require('./routes/empresas');
const clientesRoutes = require('./routes/clientes');
const agendamentosRoutes = require('./routes/agendamentos');
const servicosRoutes = require('./routes/servicos');
const tiposServicosRoutes = require('./routes/tiposServicos');

// Usar rotas
app.use('/empresas', empresasRoutes);
app.use('/clientes', clientesRoutes);
app.use('/agendamentos', agendamentosRoutes);
app.use('/servicos', servicosRoutes);
app.use('/tipos-servicos', tiposServicosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
