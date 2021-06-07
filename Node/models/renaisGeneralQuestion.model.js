module.exports = function (sequelize, DataTypes) {
  return sequelize.define('renaisGeneralQuestion', {
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
    generalQuestion: {
      type: DataTypes.TEXT
    },
    generalQuestionStatus: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'Yes'
    }
  },
  {
    tableName: 'renaisGeneralQuestion',
  });
};
