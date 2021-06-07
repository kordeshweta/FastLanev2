module.exports = function (sequelize, DataTypes) {
  return sequelize.define('renaisAnswers', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    assessmentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    queryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    queryType: {
      type: DataTypes.ENUM,
      values: ['phase', 'category', 'subcategory', 'question', 'generalquestion'],
      allowNull: false,
    },
    scoreType: { //answerNA, answerYesNo, potentialScale, weightage, CurrentScore , PotentialScore
      type: DataTypes.STRING,
      defaultValue: '[]',
      allowNull: true,
      get: function () {
        return JSON.parse(this.getDataValue('scoreType'));
      },
      set: function (value) {
        return this.setDataValue('scoreType', JSON.stringify(value));
      }
    },
    scoreValue: { //CurrentScore -> 0 , PotentialScore -> 3
      type: DataTypes.STRING,
      defaultValue: '[]',
      allowNull: true,
      get: function () {
        return JSON.parse(this.getDataValue('scoreValue'));
      },
      set: function (value) {
        return this.setDataValue('scoreValue', JSON.stringify(value));
      }
    },
    notes: {
      type: DataTypes.TEXT
    },
    answerStatus: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'Yes'
    }
  },
  {
    tableName: 'renaisAnswers',
  });
};
