module.exports = function (sequelize, DataTypes) {
    return sequelize.define('asmtAnswers', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      assessmentId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      questionId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      value: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1
      },
      answerStatus: {
        type: DataTypes.STRING(5),
        allowNull: false,
        defaultValue: 'Yes'
      }
    },
    {
      tableName: 'renaisAnswers'
    });
  };
  