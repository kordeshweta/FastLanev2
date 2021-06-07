module.exports = function (sequelize, DataTypes) {
  return sequelize.define('uxSubCategory', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    catId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    subCatName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    subCatDesc: {
      type: DataTypes.TEXT
    },
    subCatStatus: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'Yes'
    }
  },
  {
    tableName: 'uxSubCategory',
  });
};
