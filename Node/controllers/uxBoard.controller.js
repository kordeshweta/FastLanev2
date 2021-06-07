const db           = require('../models');
const Sequelize    = require('sequelize');
const Promise      = require('bluebird');
const _            = require('underscore');
const util         = require('util');
const fs           = require('fs');
const path         = require('path');
const UxBoard      = db.uxBoard;
const UxBoArtefact = db.uxBoardArtefacts;
const UxArtefacts  = db.uxArtefacts;
const Uxuploads    = db.uxUploads;
const UxPhase      = db.uxPhase;
const UxCategory   = db.uxCategory;
const UxSubCategory = db.uxSubCategory;
const Op            = Sequelize.Op;

exports.showBoards = async(req, res) => {
  const user    = req.email;
  const showBoard = [];

  var queryString = ` SELECT uxboard.*, concat(group_concat(artefactId))  AS artefacts_list FROM uxboard 
                      LEFT OUTER JOIN uxboardartefacts ON uxboard.id = uxboardartefacts.boardId 
                      WHERE boardStatus= 'Yes' AND (addedBy = '${user}' OR collaborators LIKE '%${user}%') GROUP BY uxboard.id`;
  await Promise.all(
    await db.sequelize.query(queryString, { type: Sequelize.QueryTypes.SELECT }).map(async (item, key) => {
      item.artefacts = [];
      showBoard[key] = item;
      let artes = (item.artefacts_list) ?  item.artefacts_list.split(','): [];
      await Promise.all(
        artes.map( async (id, index) => {
          showBoard[key].artefacts.push(await getArtefacts(id));
          return showBoard;
        })
      );
      delete showBoard[key].artefacts_list;
    })
  )
  return res.send({ status: true, data: showBoard });
}

function formatBytes(bytes, decimals = 0) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

async function getIdBasedName(id, type){
  let data = [];
  if(type == 'phase'){
    await UxPhase.findOne({where: {id: id}, raw: true})
      .then(phaseData => {
           data.phaseName = phaseData.phaseName;
           return data;
      });
    return data;
  }else if(type == 'category'){
   await UxCategory.findOne({where: {id: id}, raw: true})
   .then(cateData => {
        data.categoryName = cateData.catName;
        return UxPhase.findOne({where: {id: cateData.phaseId}, raw: true})
        .then(catPhaseData => {
            data.phaseName = catPhaseData.phaseName;
            return data;
        });
   });
   return data;
  }else if(type == 'subcategory'){
   await UxSubCategory.findOne({where: {id: id}, raw: true})
   .then(subCateData => {
        data.subcategoryName = subCateData.subCatName;
        return UxCategory.findOne({where: {id: subCateData.catId}, raw: true})
        .then(cateData => {
            data.categoryName = cateData.catName;
            return UxPhase.findOne({where: {id: cateData.phaseId}, raw: true})
            .then(phaseData => {
                data.phaseName = phaseData.phaseName;
                return data;
            });
        });
   });
   return data;
  }
}

async function getArtefacts(id){
  let artefact = {};
  if(id!=null){

    return UxArtefacts.findOne({where: {id: id, artefactStatus: 'Yes'}, raw: true})
      .then(async data => {
        let nameData = await getIdBasedName(data['queryId'], data['queryType']);
        return Uxuploads.findAll(
              {attributes: ['id', 'fileType', 'fileName', 'filePath', 'fileExten', 'fileSize'], 
              where: {artefactId: data['id'], fileStatus: 'Yes'}, raw: true})
          .then(uploads => {
              let files = _.groupBy(uploads, 'fileType');
              let sum = uploads.reduce((s, f) => { return s + f.fileSize;}, 0);
              let fileTotalSize = formatBytes(sum);

              artefact = {
                  'id'        : data['id'],
                  'name'      : data['artefactName'],
                  'desc'      : data['artefactDesc'],
                  'domain'    : data['artefactDomains'],
                  'format'    : data['artefactFormats'],
                  'platform'  : data['artefactPlatforms'],
                  'downloads' : data['artefactDownloads'],
                  'likes'     : data['artefactLikes'],
                  'images'    : files.image,
                  'files'     : files.file,
                  'fileSize'  : fileTotalSize,
                  'createdAt' : data['createdAt'],
                  'status'    : data['artefactStatus'],
                  'phaseName' : (nameData['phaseName']) ?  nameData['phaseName'] : '-',
                  'categoryName'    : (nameData['categoryName']) ? nameData['categoryName'] : '-',
                  'subcategoryName' : (nameData['subcategoryName']) ? nameData['subcategoryName'] : '-',
              };
              return artefact;
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

// Retrieve all UX Board List for Dropdown from the database.
exports.getBoardList = (req, res) => {
  const user = req.email;
  
  UxBoard.findAll({ attributes: { 
        include: [[Sequelize.fn("COUNT", Sequelize.col("uxBoardArtefacts.id")), "artefactCount"]] 
    },
    where: Sequelize.and( {boardStatus: 'Yes' }, Sequelize.or({ addedBy: user }, { collaborators: {[Op.like]: '%'+user+'%'} })),
    include: [{
        model: UxBoArtefact, attributes: [], required:false
    }],
    group: ['UxBoard.id'],
    raw: true })
    .then(board => {
      let boardList = [];
      board.forEach(function(elm, i){
         boardList.push({
            'id'        : elm['id'],
            'addedBy'   : elm['addedBy'],
            'title'     : elm['boardTitle'], 
            'desc'      : elm['boardDesc'],
            'count'     : elm['artefactCount'],
            'status'    : elm['boardStatus'],
            'createdAt' : elm['createdAt'],
            'updatedAt' :  elm['updatedAt'],
            'collaborators' : elm['collaborators']
        });

      });
      return res.send({ status: true, data: boardList });
    })
    .catch(err => {
      const errMsg = 'Some error occurred while retrieving All Categories.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.addBoard = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({status: false, message: "Board Title can not be empty!"});
    return;
  }

  const board = {
    boardTitle    : req.body.title,
    addedBy       : req.email,
    boardDesc     : req.body.desc,
    collaborators : req.body.collaborators
  };

  // Save Board in the database
  UxBoard.create(board)
    .then(data => {
      res.send({ status: true, message: 'Your board has been created successfully.'});
    })
    .catch(err => {
      const errMsg = "Some error occurred while creating the Board.";
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.updateBoard = (req, res) => {
    const id = req.params.id;

    const board = {
      boardTitle    : req.body.title,
      boardDesc     : req.body.desc,
      collaborators : req.body.collaborators
    };

    UxBoard.update(board, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "Board has been updated successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot update Board with id=${id}. Maybe Board was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
       const errMsg = "Error updating Board with id=" + id;
       res.status(500).send({ status: false, message: err.message || errMsg });
    });
}

exports.deleteBoard = (req, res) => {

  const id = req.body.id;

    UxBoard.update({boardStatus: 'No'}, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "Board has been deleted successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot delete Board with id=${id}.`
        });
      }
    })
    .catch(err => {
       const errMsg = "Error deleting Board with id=" + id;
       res.status(500).send({ status: false, message: err.message || errMsg });
    });
}

exports.addToBoard = (req, res) => {

  const user      = req.email;
  const boardInfo = {
    boardId    : req.body.boardId,
    artefactId : req.body.artefactId
  };

  let ids    = [];
  let delIds = [];
  UxBoard.findAll({ attributes: ['id'],
  where: Sequelize.and( {boardStatus: 'Yes' }, Sequelize.or({ addedBy: user }, { collaborators: {[Op.like]: '%'+user+'%'} })),
  raw: true })
  .then(board => {
    board.map(data => {
      ids.push(data.id);
    });
    
    UxBoArtefact.findAll({attributes: ['id'],
      where: { boardId: {
        [Op.in]: ids
      }, artefactId: boardInfo.artefactId},
      raw: true
    })
    .then(artef => {
      artef.map(item => {
        delIds.push(item.id);
      });
      UxBoArtefact.destroy({ where: { id: { [Op.in]: delIds} } })
      .then(data => {
        //Save Artefact to Board in the database
        UxBoArtefact.create(boardInfo)
        .then(data => {
          res.send({ status: true, message: 'Artefact has been added to selected board successfully.'});
        })
        .catch(err => {
          const errMsg = "Some error occurred while adding the Artefact to the Board.";
          res.status(500).send({ status: false, message: err.message || errMsg });
        });
      })
    })
  });
};

// Retrieve all UX Board List for Dropdown from the database.
exports.getBoardArtefacts = async (req, res) => {
  const boardId = req.params.id;
  
  UxBoArtefact.findAll({ where: {boardId: boardId}, raw: true })
    .then(async artes => {
      let artefactList = [];
      await Promise.all(
        artes.map( async (item, index) => {
          artefactList.push(await getArtefacts(item.artefactId));
          return artefactList;
        })
      );
      return res.send({ status: true, data: artefactList });
    })
    .catch(err => {
      const errMsg = 'Some error occurred while retrieving All Categories.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

function removeAllFiles(){
  let fileDir = path.resolve("./") +"/uploads/downloadFiles";

  if (!fs.existsSync(fileDir)){
      fs.mkdirSync(fileDir);
  }else{
     fs.readdir(fileDir, (err, files) => {
      if (err) throw err;
    
      for (const file of files) {
        fs.unlink(path.join(fileDir, file), err => {
          if (err) throw err;
        });
      }
    })
  }
}

// Download particular ux Artefact's files.
exports.downloadArtefactFiles = async(req, res) => {
  const boardName = req.body.boardName;
  const ids       = req.body.ids;
  let zip         = new require('node-zip')();
  let tmpDir      = path.resolve("./") +"/uploads/downloadFiles/";
  let filesList   = [];
  let updateCount = [];
  removeAllFiles();
  if (fs.existsSync(tmpDir)){
    await Promise.all(
      ids.map( async item => {
        let fileObj = item.ids;
        await Promise.all(
          fileObj.map( async (id, index) => {
            return Uxuploads.findAll(
              {attributes: ['id', 'fileType', 'fileName', 'filePath', 'fileExten', 'fileSize'], 
              where: {id:id, fileStatus: 'Yes', fileType: 'file'}, raw: true})
              .then(fileObj => {
                filesList.push({'fileName':fileObj[0].fileName, 'filePath':fileObj[0].filePath});
                return filesList;
            });
          })
        );
      })
    );

    filesList.map(function(x){
      zip.file(x.fileName, fs.readFileSync(path.join(path.resolve("./"), x.filePath)));
    });
    let zipData = zip.generate({ base64:false, compression: 'DEFLATE' });
    let zipName = tmpDir+boardName+".zip";

    fs.promises.writeFile(zipName, zipData, 'binary').then(async () => {
      console.log("File written successfully\n");
      await Promise.all(
        ids.map( async item => {
          let arteId = item.artefactId;
          let count  = item.count;
            return  await UxArtefacts.update({artefactDownloads: count+1},{where: {id: arteId}})
            .then(num => {
                updateCount.push(num);
                return updateCount;
            });
        })
      );
      if(updateCount.length>0){
        res.download(zipName, function(err){
          if (err){
              console.log(err);
          } else {
              console.log('downloading successful');
          }
        });
      }
    }).catch(err => {
        const errMsg = "Error Preparing Zip file for donwload.";
        res.status(500).send({ status: false, message: err.message || errMsg });
    });
  }
}