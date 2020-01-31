'use strict';
module.exports = (sequelize, DataTypes) => {
  const pedidos = sequelize.define('pedidos', {
    status: DataTypes.STRING,
    cliente: DataTypes.STRING,
    mesa: DataTypes.INTEGER
  }, {});
  pedidos.associate = function(models) {
    // associations can be defined here
  };
  return pedidos;
};