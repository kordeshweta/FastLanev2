module.exports = function (sequelize, DataTypes) {
  return sequelize.define('renaissancePhase', {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    phaseTitle: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    phaseStatus: {
        type: DataTypes.STRING(5),
        allowNull: false,
        defaultValue: 'Yes'
    }
  },
  {
    tableName: 'renaissancePhase',
  });
};