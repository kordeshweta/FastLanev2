module.exports = function (sequelize, DataTypes) {
  return sequelize.define('renaisQuestions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    queryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    queryType: {
      type: DataTypes.ENUM,
      values: ['phase', 'category', 'subcategory'],
      allowNull: false,
    },
    question: {
      type: DataTypes.TEXT
    },
    questionType: { //Current , Potential
      type: DataTypes.STRING(400),
      defaultValue: '[]',
      allowNull: true,
      get: function () {
        return JSON.parse(this.getDataValue('questionType'));
      },
      set: function (value) {
        return this.setDataValue('questionType', JSON.stringify(value));
      }
    },
    questionOptions: {  // "0, 1, 2", ""
      type: DataTypes.STRING,
      defaultValue: '[]',
      allowNull: true,
      get: function () {
        return JSON.parse(this.getDataValue('questionOptions'));
      },
      set: function (value) {
        return this.setDataValue('questionOptions', JSON.stringify(value));
      }
    },
    questionWeightage: { // "No Logging, Trace level",""
      type: DataTypes.STRING,
      defaultValue: '[]',
      allowNull: true,
      get: function () {
        return JSON.parse(this.getDataValue('questionWeightage'));
      },
      set: function (value) {
        return this.setDataValue('questionWeightage', JSON.stringify(value));
      }
    },
    questionStatus: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'Yes'
    }
  },
  {
    tableName: 'renaisQuestions',
  });
};
