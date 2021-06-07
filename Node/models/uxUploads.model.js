module.exports = function (sequelize, DataTypes) {
  return sequelize.define('uxUploads', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    artefactId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    fileType: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: 'Image or File',
    },
    fileName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    filePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mimeType: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fileExten: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fileSize: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    },
    fileStatus: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: 'Yes'
    }
  },
  {
    tableName: 'uxUploads',
  });
};
