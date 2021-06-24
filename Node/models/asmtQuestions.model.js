module.exports = function (sequelize, DataTypes) {
    return sequelize.define('asmtQuestions', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      subCategoryId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      questionText: {
        type: DataTypes.TEXT
      },
      questionOptions: {  // "Yes, No"
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
      questionWeightage: { 
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
      tableName: 'assessmentQuestions',
    });
  };
  