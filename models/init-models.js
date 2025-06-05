var DataTypes = require("sequelize").DataTypes;
var _eventos = require("./eventos");
var _participantes = require("./participantes");

function initModels(sequelize) {
  var eventos = _eventos(sequelize, DataTypes);
  var participantes = _participantes(sequelize, DataTypes);

  participantes.belongsTo(eventos, { as: "evento", foreignKey: "evento_id"});
  eventos.hasMany(participantes, { as: "participantes", foreignKey: "evento_id"});

  return {
    eventos,
    participantes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
