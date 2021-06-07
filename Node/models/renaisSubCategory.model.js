module.exports = function (sequelize, DataTypes) {
  return sequelize.define('renaisSubCategory', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    catId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    subCatName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    subCatDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    subCatStatus: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'Yes'
    }
  },
  {
    tableName: 'renaisSubCategory',
  });
};
