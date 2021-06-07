module.exports = function (sequelize, DataTypes) {
  return sequelize.define('uxBoard', {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    boardTitle: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    boardDesc: {
        type: DataTypes.TEXT
    },
    addedBy: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    collaborators: {
        type: DataTypes.TEXT
    },
    boardStatus: {
        type: DataTypes.STRING(5),
        allowNull: false,
        defaultValue: 'Yes'
    }
  },
  {
    tableName: 'uxBoard',
  });
};