const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Vaga extends Model {}

Vaga.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Ativa o auto incremento
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salario: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Vaga',
  tableName: 'vagas', // Nome da tabela no banco de dados
  timestamps: false, // Desabilitar timestamps se não forem necessários
});

module.exports = Vaga;
