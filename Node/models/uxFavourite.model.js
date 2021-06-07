module.exports = function (sequelize, DataTypes) {
  return sequelize.define('uxFavourite', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    artefactId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  },
  {
    tableName: 'uxFavourite',
  });
};