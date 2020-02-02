'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    tipo: DataTypes.STRING,
    produtosId: DataTypes.INTEGER,
    pedidosId: DataTypes.INTEGER
  }, {});
  item.associate = function(models) {

  };
  return item;
};