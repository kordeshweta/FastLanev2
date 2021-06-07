module.exports = function (sequelize, DataTypes) {
  return sequelize.define('renaisCategory', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    phaseId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    catName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    iconName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    catStatus: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'Yes'
    }
  },
  {
    tableName: 'renaisCategory',
  });
};
