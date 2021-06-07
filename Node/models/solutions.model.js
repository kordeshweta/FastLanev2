module.exports = function (sequelize, DataTypes) {
  return sequelize.define('solutions', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cName: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    shortDesc: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    longDesc: {
      type: DataTypes.STRING(550),
      allowNull: false,
    },
    technology: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    practices: {
      type: DataTypes.STRING(400),
      defaultValue: '[]',
      allowNull: true,
      get: function () {
        return JSON.parse(this.getDataValue('practices'));
      },
      set: function (value) {
        return this.setDataValue('practices', JSON.stringify(value));
      }
    },
    contributors: {
      type: DataTypes.STRING(550),
      defaultValue: '[]',
      allowNull: true,
      get: function () {
        return JSON.parse(this.getDataValue('contributors'));
      },
      set: function (value) {
        return this.setDataValue('contributors', JSON.stringify(value));
      }
    },
    downloadCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    tableName: 'solutions',
  });
};
