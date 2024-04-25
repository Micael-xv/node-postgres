import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import Fornecedor from "./Fornecedor";

const Transportadora = sequelize.define(
  'transportadora',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cnpj: {
      type: DataTypes.STRING(18),
      allowNull: false,
      unique: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Transportadora.belongsTo(Fornecedor, {
  as: 'fornecedor',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_fornecedor',
    name: 'idFornecedor',
    allowNull: false,
  },
});

export default Transportadora;



