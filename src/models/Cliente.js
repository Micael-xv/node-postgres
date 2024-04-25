import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Cliente = sequelize.define(
  'clientes',
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
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Cliente;