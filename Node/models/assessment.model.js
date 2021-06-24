module.exports = function (sequelize, DataTypes) {
    return sequelize.define('assessment', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      isAdmin: {
        type: DataTypes.STRING(5),
        allowNull: false,
        defaultValue: 'true'
      },
      organisation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      version: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '1'
      },
      assessmentStatus: {
        type: DataTypes.STRING(5),
        allowNull: false,
        defaultValue: 'Yes'
      }
    },
    {
      tableName: 'assessment',
    });
  };
  