import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Fornecedor = sequelize.define(
  'fornecedor',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    nome: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Fornecedor;