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
      models.poster.belongsTo(models.template)
    }
  };
  poster.init({
    picture: DataTypes.STRING,
    quote: DataTypes.STRING,
    author: DataTypes.STRING,
    templateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'poster',
  });
  return poster;
};