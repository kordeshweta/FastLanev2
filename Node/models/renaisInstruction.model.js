module.exports = function (sequelize, DataTypes) {
  return sequelize.define('renaisInstruction', {
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
    instruction: {
      type: DataTypes.TEXT
    },
    instructionStatus: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'Yes'
    }
  },
  {
    tableName: 'renaisInstruction',
  });
};
