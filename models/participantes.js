const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('participantes', {
    participante_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    participante_nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    participante_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    evento_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'eventos',
        key: 'evento_id'
      }
    },
    inscripcion_estado: {
      type: DataTypes.ENUM('Pendiente','Confirmado','Cancelado'),
      allowNull: true,
      defaultValue: "Pendiente"
    },
    numero_acompanantes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    inscripcion_fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'participantes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "participante_id" },
        ]
      },
      {
        name: "evento_id",
        using: "BTREE",
        fields: [
          { name: "evento_id" },
        ]
      },
    ]
  });
};
