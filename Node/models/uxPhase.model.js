module.exports = function (sequelize, DataTypes) {
  return sequelize.define('uxPhase', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    phaseName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    domainId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    domain: {
      type: DataTypes.ENUM,
      values: ['User Experience Design', 'Project Delivery', 'Sales & Marketing'],
      allowNull: false,
    },
    phaseStatus: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'Yes'
    }
  },
  {
    tableName: 'uxPhase',
  });
};