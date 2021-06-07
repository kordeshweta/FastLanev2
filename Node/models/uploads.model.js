
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('uploads', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fileType: {
      type: DataTypes.ENUM,
      values: ['image', 'file'],
      allowNull: false,
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
    fileName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    linkText: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    filePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mimeType: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fileSize: {
      type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
    },
  },
  {
    tableName: 'uploads',
  },
  {
    timestamps: true
  });
};
