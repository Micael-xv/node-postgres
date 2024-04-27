import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Produtos = sequelize.define(
  'produtos',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    codBarra: {
      field: 'cod_barra',
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    valorUnitario: {
      field: 'valor_unitario',
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    descricaoProduto: {
      field: 'descricao_produto',
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Produtos;