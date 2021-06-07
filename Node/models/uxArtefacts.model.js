module.exports = function (sequelize, DataTypes) {
    return sequelize.define('uxArtefacts', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      queryId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      queryType: {
        type: DataTypes.ENUM,
        values: ['phase', 'category', 'subcategory'],
        allowNull: false,
      },
      artefactName: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      artefactDomains: {
        type: DataTypes.TEXT
      },
      artefactFormats: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      artefactPlatforms: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      artefactDesc: {
        type: DataTypes.TEXT
      },
      artefactDownloads: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: 0
      },
      artefactLikes: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: 0
      },
      artefactStatus: {
        type: DataTypes.STRING(5),
        allowNull: false,
        defaultValue: 'Yes'
      }
    },{
      tableName: 'uxArtefacts',
    });
};
