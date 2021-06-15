'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class template extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.template.hasMany(models.poster)
    }
  };
  template.init({
    name: DataTypes.STRING,
    text_position: DataTypes.STRING,
    font_color: DataTypes.STRING,
    font: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'template',
  });
  return template;
};