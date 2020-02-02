'use strict';
module.exports = (sequelize, DataTypes) => {
  const produtos = sequelize.define('produtos', {
    name: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    menu: DataTypes.STRING
  }, {});
  produtos.associate = function(models) {
    produtos.hasMany(models.item)
  };
  return produtos;
};