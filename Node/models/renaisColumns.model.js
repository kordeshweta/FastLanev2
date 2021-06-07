module.exports = function (sequelize, DataTypes) {
    return sequelize.define('renaisColumns', {
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
      columnName: { //NA, YesNo, potentialScale, weightage, CurrentScore , PotentialScore, Python
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      columnOptions: {  // ["0: Not Considered,  1: Getting Started, 2: Developing, 3: Practicing"]
        type: DataTypes.STRING,
        defaultValue: '[]',
        allowNull: true,
        get: function () {
          return JSON.parse(this.getDataValue('columnOptions'));
        },
        set: function (value) {
          return this.setDataValue('columnOptions', JSON.stringify(value));
        }
      },
      columnStatus: {
        type: DataTypes.STRING(5),
        allowNull: false,
        defaultValue: 'Yes'
      }
    },
    {
      tableName: 'renaisColumns',
    });
  };