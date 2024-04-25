import { DataTypes } from 'sequelize';
import { sequelize } from '../config';
import Transportadora from './Transportadora';
import Produto from './Produto';

const Entrega = sequelize.define(
  'entrega',
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
    endereco: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Entrega.belongsTo(Transportadora, {
  as: 'transportadora',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_transportadora',
    name: 'idTransportadora',
    allowNull: false,
  },
});

Entrega.belongsTo(Produto, {
  as: 'produtos',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_produtos',
    name: 'idProdutos',
    allowNull: false,
  },
});

export default Entrega;