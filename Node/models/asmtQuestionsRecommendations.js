module.exports = function (sequelize, DataTypes) {
    return sequelize.define('asmtQuestionsRecommendations', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      questionId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      value: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: 'assessmentQuestionRecommendations',
    });
  };
  