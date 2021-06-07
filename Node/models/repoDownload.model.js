const moment =  require('moment');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('repoDownload', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    entity: {
      type: DataTypes.ENUM,
      values: ['component', 'bestPractice', 'solution'],
      allowNull: false,
    },
    entityId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    purpose: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    customerName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    projectID: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createDate: {
      type: DataTypes.DATEONLY,
      get: function() {
          return moment.utc(this.getDataValue('createDate')).format('YYYY-MM-DD')
      }
    },
  },
  {
    tableName: 'repoDownload',
  });
};
