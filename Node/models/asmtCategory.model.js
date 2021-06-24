module.exports = function (sequelize, DataTypes) {
    return sequelize.define('category', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      catName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      catDescription: {
        type: DataTypes.TEXT,
        allowNull: true,
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
      tableName: 'assessmentCategory'
    });
  };
  