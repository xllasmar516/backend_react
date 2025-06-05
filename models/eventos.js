const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eventos', {
    evento_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    evento_nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    evento_descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    evento_imagen: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    evento_fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    evento_localizacion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    evento_organizador: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'eventos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "evento_id" },
        ]
      },
    ]
  });
};
