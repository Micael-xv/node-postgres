import { DataTypes } from 'sequelize';
import { sequelize } from '../config';
import Entrega from './Entrega';
import Cliente from './Cliente';

const Pedido = sequelize.define(
  'pedidos',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dadosDePagamento: {
      field: 'dados_de_pagamento',
      type: DataTypes.STRING(100),
      allowNull: false,
    }, 
    valorTotal: {
      field: 'valor_total',
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Pedido.belongsTo(Entrega, {
  as: 'entregas',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_entregas',
    name: 'idEntrega',
    allowNull: false,
  },
});

Pedido.belongsTo(Cliente, {
  as: 'clientes',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_clientes',
    name: 'idClientes',
    allowNull: false,
  },
});

export default Pedido;