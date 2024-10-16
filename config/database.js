const { Sequelize } = require('sequelize');  // Importa o Sequelize

// String de conexão atualizada
const sequelize = new Sequelize('postgresql://igor:hrhdX69nWK4l72zJjPJv7g@boxing-quagga-2475.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full', {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});

module.exports = sequelize;
