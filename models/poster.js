'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class poster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  poster.init({
    picture: DataTypes.STRING,
    quote: DataTypes.TEXT,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'poster',
  });
  return poster;
};