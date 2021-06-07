const moment =  require('moment');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('siteVisits', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    createDate: {
      type: DataTypes.DATEONLY,
      get: function() {
          return moment.utc(this.getDataValue('createDate')).format('YYYY-MM-DD')
      }
    },
  },
  {
    tableName: 'siteVisits',
  });
};
