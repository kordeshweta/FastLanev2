module.exports = function (sequelize, DataTypes) {
  return sequelize.define('uxBoardArtefacts', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    boardId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    artefactId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  },
  {
    tableName: 'uxBoardArtefacts',
  });
};