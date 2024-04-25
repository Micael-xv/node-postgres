import { DataTypes } from 'sequelize';
import { sequelize } from '../config';

const LojaOnline = sequelize.define(
  'loja_online',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    nome: {
      type: DataTypes.STRING(100),
      allowNull: true,
    }, 
    cnpj: {
      type: DataTypes.STRING(18),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default LojaOnline;