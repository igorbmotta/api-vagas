const express = require('express');
const sequelize = require('./config/database');
const vagaRoutes = require('./routes/vagaRoutes');

const app = express();
app.use(express.json());
app.use(vagaRoutes);

// Sincronizar com o banco e iniciar o servidor
sequelize.sync({ force: true }) // O force: true recria as tabelas
  .then(() => {
    console.log('Conectado ao banco de dados e tabelas criadas');
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco:', error);
  });
