'use strict';
module.exports = (sequelize, DataTypes) => {
  const produtos = sequelize.define('produtos', {
    name: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    menu: DataTypes.STRING
  }, {});
  produtos.associate = function(models) {
    // associations can be defined here
  };
  return produtos;
};