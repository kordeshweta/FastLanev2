module.exports = function (sequelize, DataTypes) {
  return sequelize.define('uxReview', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    artefactId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    userEmail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    reviewDesc: {
      type: DataTypes.TEXT
    },
    reviewStatus: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'Yes'
    }
  },
  {
    tableName: 'uxReview',
  });
};
