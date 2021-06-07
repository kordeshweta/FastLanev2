module.exports = function (sequelize, DataTypes) {
  return sequelize.define('renaisGuidelines', {
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
    catId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    guideline: {
      type: DataTypes.TEXT
    },
    guidelineRemark: {
      type: DataTypes.TEXT
    },
    guidelineStatus: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'Yes'
    }
  },
  {
    tableName: 'renaisGuidelines',
  });
};
