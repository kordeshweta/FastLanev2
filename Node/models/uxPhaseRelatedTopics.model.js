module.exports = function (sequelize, DataTypes) {
  return sequelize.define('uxPhaseRelatedTopics', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    phaseId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    topicName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    topicLink: {
      type: DataTypes.TEXT
    }
  },
  {
    tableName: 'uxPhaseRelatedTopics',
  });
};
