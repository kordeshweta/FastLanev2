const db          = require('../models');
const _           = require('underscore');
const Promise     = require('bluebird');
const Sequelize   = require('sequelize');
const fs          = require('fs');
const path        = require('path');
const UxArtefacts = db.uxArtefacts;
const UxBoard      = db.uxBoard;
const UxBoArtefact = db.uxBoardArtefacts;
const UxCategory  = db.uxCategory;
const UxPhase     = db.uxPhase;
const Uxuploads   = db.uxUploads;
const UxReview    = db.uxReview;
const UxFavourite = db. uxFavourite;
const UxSubCategory = db.uxSubCategory;

async function getIdBasedName(id, type){
    let data = [];
    if(type == 'phase'){
      await UxPhase.findOne({where: {id: id}, raw: true})
        .then(phaseData => {
             data.phaseId = phaseData.id;
             data.domainId = phaseData.domainId;
             return data;
        });
      return data;
    }else if(type == 'category'){
     await UxCategory.findOne({where: {id: id}, raw: true})
     .then(cateData => {
          data.categoryId = cateData.id;
          return UxPhase.findOne({where: {id: cateData.phaseId}, raw: true})
          .then(catPhaseData => {
              data.phaseId  = catPhaseData.id;
              data.domainId = catPhaseData.domainId;
              return data;
          });
     });
     return data;
    }else if(type == 'subcategory'){
     await UxSubCategory.findOne({where: {id: id}, raw: true})
     .then(subCateData => {
          data.subcategoryId = subCateData.id;
          return UxCategory.findOne({where: {id: subCateData.catId}, raw: true})
          .then(cateData => {
              data.categoryId = cateData.id;
              return UxPhase.findOne({where: {id: cateData.phaseId}, raw: true})
              .then(phaseData => {
                  data.phaseId  = phaseData.id;
                  data.domainId = phaseData.domainId;
                  return data;
              });
          });
     });
     return data;
    }
}

function formatBytes(bytes, decimals = 0) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const getFavourite = async (id, user) => {
    return await UxFavourite.findOne({attributes: ['user'], where: {artefactId: id, user: user}, raw: true})
                            .then(fav => {console.log(fav ) ; return (fav) ? 'Yes' : 'No'; });
}

// Retrieve all Phases UX artefact from the database.
exports.getAllPhaseArtefacts = async(req, res) => {
    const id   = req.body.id;
    const type = req.body.type;
    const user = req.email;
    let artefactList = {};
    artefactList.artefacts = [];
    var queryString = `SELECT * FROM uxArtefacts WHERE queryId = ${id} AND  queryType='${type}' AND artefactStatus = 'Yes';`;

    Promise.map(db.sequelize.query(queryString, { type: Sequelize.QueryTypes.SELECT }), function(item) {
         
        return Promise.all([
            db.sequelize.query('SELECT id, fileType, fileName, filePath, fileExten FROM uxuploads WHERE artefactId = '+item.id,
            { type: Sequelize.QueryTypes.SELECT }).then(function(uploads) {
               
                let fileList = _.groupBy(uploads, 'fileType');
                item.files  = fileList.file;
                item.images = fileList.image;
            }),
            db.sequelize.query(`SELECT domain, phaseName FROM uxphase WHERE id = ${item.queryId} AND phaseStatus = 'Yes'`,
            { type: Sequelize.QueryTypes.SELECT }).then(function(scat) {
                item.phaseName = scat[0].phaseName;
                item.domain    = scat[0].domain;
            }),
            db.sequelize.query(`SELECT user FROM uxfavourite WHERE artefactId = ${item.id} AND user = '${user}'`,
            { type: Sequelize.QueryTypes.SELECT }).then(function(fav) {
                item.user  = (fav[0] !=null && fav[0]!= undefined) ? 'Yes' : 'No';
            })
        ]).then(function() {
           artefactList.phaseName = item['phaseName'];
           artefactList.domain    = item['domain'];
           artefactList.artefacts.push({
                'artefactId': item['id'],
                'name'      : item['artefactName'],
                'desc'      : item['artefactDesc'],
                'domain'    : item['artefactDomains'], 
                'format'    : item['artefactFormats'],
                'platform'  : item['artefactPlatforms'],
                'downloads' : item['artefactDownloads'], 
                'likes'     : item['artefactLikes'],
                'files'     : item['files'],
                'images'    : item['images'],
                'userFavour': item['user'],
                'createdAt' : item['createdAt'],
                'status'    : item['artefactStatus']
            });
            return artefactList;
            
        });
    }).then(function(artefacts) {
           artefactsls = {};
           artefactsls.name  = artefacts[0].phaseName;
           artefactsls.domain = artefacts[0].domain;
           artefactsls.artefacts  = artefacts[0].artefacts;

         return res.send({ status: true, data: artefactsls });
    }).catch(function(err) {
        const errMsg = 'Some error occurred while retrieving Artefacts.';
        return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Retrieve all Categories UX artefact from the database.
exports.getAllCategoryArtefacts = async(req, res) => {
    const id   = req.body.id;
    const type = req.body.type;
    const user = req.email;
    let artefactList = {};
    artefactList.artefacts = [];
    var queryString = `SELECT * FROM uxArtefacts WHERE queryId = ${id} AND  queryType='${type}' AND artefactStatus = 'Yes';`;
    Promise.map(db.sequelize.query(queryString, { type: Sequelize.QueryTypes.SELECT }), function(item) {
         
        return Promise.all([
            db.sequelize.query('SELECT id, fileType, fileName, filePath, fileExten FROM uxuploads WHERE artefactId = '+item.id,
            { type: Sequelize.QueryTypes.SELECT }).then(function(uploads) {
               
                let fileList = _.groupBy(uploads, 'fileType');
                item.files  = fileList.file;
                item.images = fileList.image;
            }),
            db.sequelize.query(`SELECT catName, catDesc FROM uxcategory WHERE id = ${item.queryId} AND catStatus = 'Yes'`,
            { type: Sequelize.QueryTypes.SELECT }).then(function(scat) {
                item.catName = scat[0].catName;
                item.catDesc = scat[0].catDesc;
            }),
            db.sequelize.query(`SELECT user FROM uxfavourite WHERE artefactId = ${item.id} AND user = '${user}'`,
            { type: Sequelize.QueryTypes.SELECT }).then(function(fav) {
                item.user  = (fav[0] !=null && fav[0]!= undefined) ? 'Yes' : 'No';
            })
        ]).then(function() {
           artefactList.catName = item['catName'];
           artefactList.catDesc = item['catDesc'];
           artefactList.artefacts.push({
                'artefactId': item['id'],
                'name'      : item['artefactName'],
                'desc'      : item['artefactDesc'],
                'domain'    : item['artefactDomains'], 
                'format'    : item['artefactFormats'],
                'platform'  : item['artefactPlatforms'],
                'downloads' : item['artefactDownloads'], 
                'likes'     : item['artefactLikes'],
                'files'     : item['files'],
                'images'    : item['images'],
                'userFavour': item['user'],
                'createdAt' : item['createdAt'],
                'status'    : item['artefactStatus']
            });
            return artefactList;
            
        });
    }).then(function(artefacts) {
           artefactsls = {};
           artefactsls.name = artefacts[0].catName;
           artefactsls.desc = artefacts[0].catDesc;
           artefactsls.artefacts  = artefacts[0].artefacts;

         return res.send({ status: true, data: artefactsls });
    }).catch(function(err) {
        const errMsg = 'Some error occurred while retrieving Artefacts.';
        return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Retrieve all Subcategories UX artefact from the database.
exports.getAllSubcatArtefacts = async(req, res) => {
    const id   = req.body.id;
    const type = req.body.type;
    const user = req.email;
    let artefactList = {};
    artefactList.artefacts = [];
    var queryString = `SELECT * FROM uxArtefacts WHERE queryId = ${id} AND  queryType='${type}' AND artefactStatus = 'Yes';`;
    Promise.map(db.sequelize.query(queryString, { type: Sequelize.QueryTypes.SELECT }), function(item) {
         
        return Promise.all([
            db.sequelize.query('SELECT id, fileType, fileName, filePath, fileExten FROM uxuploads WHERE artefactId = '+item.id,
            { type: Sequelize.QueryTypes.SELECT }).then(function(uploads) {
               
                let fileList = _.groupBy(uploads, 'fileType');
                item.files  = fileList.file;
                item.images = fileList.image;
            }),
            db.sequelize.query(`SELECT subCatName, subCatDesc FROM uxsubcategory WHERE id = ${item.queryId} AND subCatStatus = 'Yes'`,
            { type: Sequelize.QueryTypes.SELECT }).then(function(scat) {
                item.subCatName = scat[0].subCatName;
                item.subCatDesc = scat[0].subCatDesc;
            }),
            db.sequelize.query(`SELECT user FROM uxfavourite WHERE artefactId = ${item.id} AND user = '${user}'`,
            { type: Sequelize.QueryTypes.SELECT }).then(function(fav) {
                item.user  = (fav[0] !=null && fav[0]!= undefined) ? 'Yes' : 'No';
            })
        ]).then(function() {
           artefactList.subCatName = item['subCatName'];
           artefactList.subCatDesc = item['subCatDesc'];
           artefactList.artefacts.push({
                'artefactId': item['id'],
                'name'      : item['artefactName'],
                'desc'      : item['artefactDesc'],
                'domain'    : item['artefactDomains'], 
                'format'    : item['artefactFormats'],
                'platform'  : item['artefactPlatforms'],
                'downloads' : item['artefactDownloads'], 
                'likes'     : item['artefactLikes'],
                'files'     : item['files'],
                'images'    : item['images'],
                'userFavour': item['user'],
                'createdAt' : item['createdAt'],
                'status'    : item['artefactStatus']
            });
            return artefactList;
            
        });
    }).then(function(artefacts) {
           artefactsls = {};
           artefactsls.name = artefacts[0].subCatName;
           artefactsls.desc = artefacts[0].subCatDesc;
           artefactsls.artefacts  = artefacts[0].artefacts;

         return res.send({ status: true, data: artefactsls });
    }).catch(function(err) {
        const errMsg = 'Some error occurred while retrieving Artefacts.';
        return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};


// Retrieve all UX artefact from the database.
exports.getAllArtefacts  = async(req, res) => {

    const arteCount = await db.sequelize.query(`SELECT count(*) as count FROM uxArtefacts WHERE queryId = ${req.body.id} AND  queryType='${req.body.type}' AND artefactStatus = 'Yes'`, { type: Sequelize.QueryTypes.SELECT });
    
    if(arteCount[0].count > 0){
        if(req.body.type === 'phase'){
        this.getAllPhaseArtefacts(req, res);
        }

        if(req.body.type === 'category'){
        this.getAllCategoryArtefacts(req, res);
        }

        if(req.body.type === 'subcategory'){
            this.getAllSubcatArtefacts(req, res);
        }
    }else{
        const msg = "No Records Found.";
        return res.send({ status: true, data: msg });
    }
}

// Retrieve particular ux Artefact from the database.
exports.getArtefact = async(req, res) => {
  const id   = req.body.id;
  const user = req.email;
  let userFavour =  await getFavourite(id, user);
  let artefact = {};
  UxArtefacts.findOne({where: {id: id, artefactStatus: 'Yes'}, raw: true})
    .then(async data => {
        let nameData = await getIdBasedName(data['queryId'], data['queryType']);
        Uxuploads.findAll(
            {attributes: ['id', 'fileType', 'fileName', 'filePath', 'fileExten', 'fileSize'], 
            where: {artefactId: data['id'], fileStatus: 'Yes'}, raw: true})
        .then(uploads => {
            let files = _.groupBy(uploads, 'fileType');
            let sum = uploads.reduce((s, f) => { return s + f.fileSize;}, 0);
            let fileTotalSize = formatBytes(sum);

            artefact = {
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
                'userFavour': userFavour,
                'createdAt' : data['createdAt'],
                'status'    : data['artefactStatus'],
                'domainId'  : (nameData['domainId']) ?  nameData['domainId'] : '-',
                'phaseId'   : (nameData['phaseId']) ?  nameData['phaseId'] : '-',
                'categoryId'    : (nameData['categoryId']) ? nameData['categoryId'] : '-',
                'subcategoryId' : (nameData['subcategoryId']) ? nameData['subcategoryId'] : '-',
            };
            res.send({ status: true, data: artefact});
        });
    })
    .catch(err => {
      const errMsg = "Some error occurred while retrieving this Artefact.";
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.addArtefact = (req, res) => {
    const artefact = {
        queryId          : req.body.queryId,
        queryType        : req.body.queryType,
        artefactName     : req.body.name,
        artefactDesc     : req.body.desc,
        artefactDomains  : req.body.domain,
        artefactFormats  : req.body.format,
        artefactPlatforms: req.body.platform
    };
    UxArtefacts.create(artefact)
    .then(data => {
        console.log(data.id);
      res.send({ status: true, id: data.id});
    })
    .catch(err => {
        console.log(err);
      const errMsg = "Some error occurred while creating the Artefact.";
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.updateArtefact = (req, res) => {
    const id = req.params.id;

     const artefact = {
        queryId          : req.body.queryId,
        queryType        : req.body.queryType,
        artefactName     : req.body.name,
        artefactDesc     : req.body.desc,
        artefactDomains  : req.body.domain,
        artefactFormats  : req.body.format,
        artefactPlatforms: req.body.platform
    };

    UxArtefacts.update(artefact, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "Artefact has been updated successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot update Artefact with id=${id}. Maybe Artefact was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
       const errMsg = "Error updating Artefact with id=" + id;
       res.status(500).send({ status: false, message: err.message || errMsg });
    });
}

exports.deleteArtefact = (req, res) => {

//Single id will remove one row, To delete multiple row pass req.body.id as array eg:[1,2,4]
  const id = req.body.id;

    UxArtefacts.update({artefactStatus: 'No'}, {where: { id: id}})
    .then(num => {
        if (num >= 1) {
            Uxuploads.findAll({where: { artefactId: id}, raw: true})
            .then(upData => {
                if(upData.length >0){
                    Uxuploads.update({fileStatus: 'No'}, {where: { artefactId: id}});
                }
            }).catch(err => {
                console.log(err)
            });
            UxReview.findAll({where: { artefactId: id}, raw: true})
            .then(reData => {
                if(reData.length >0){
                    UxReview.update({reviewStatus: 'No'}, {where: { artefactId: id}})
                }
            }).catch(err => {
                console.log(err)
            });
            UxBoArtefact.destroy({ where: {artefactId: id}})
            .then(delData => {
                return delData;
            }).catch(err => {
                console.log(err)
            });
            res.send({ status: true, message: "Artefact has been deleted successfully."});
        } else {
            res.status(400).send({status: false,
                message: `Cannot delete Artefact with id=${id}.`
            });
        }
    })
    .catch(err => {
       const errMsg = "Error deleting Artefact with id=" + id;
       res.status(500).send({ status: false, message: err.message || errMsg });
    });
}

exports.addLikes = (req, res) => {
    const id   = req.body.id;
    const user = req.email;
    UxArtefacts.findOne({attributes:['artefactLikes'], where: {id: id, artefactStatus: 'Yes'}, raw:true})
    .then(data => {
        UxFavourite.create({artefactId: id, user:user})
        .then(resp => {
            if(resp.id){
                let artefactCount = data.artefactLikes+1;
                UxArtefacts.update({artefactLikes: artefactCount }, {
                    where: { id: id }
                })
                .then(num => {
                    if (num == 1) {
                        res.send({ status: true, message: "Added Favourite."});
                    } else {
                        res.status(400).send({status: false,
                        message: `Cannot update Artefact with id=${id}. Maybe Artefact was not found or req.body is empty!`
                        });
                    }
                })
                .catch(err => {
                    const errMsg = "Error updating Artefact's Like count with id=" + id;
                    res.status(500).send({ status: false, message: err.message || errMsg });
                });
            }
         })
        .catch(err => {
            const errMsg = "Error updating Artefact's Like count with id=" + id;
            res.status(500).send({ status: false, message: err.message || errMsg });
        });
    }).catch(err => {
        const errMsg = "Error Fetching Artefact's Like count with id=" + id;
        res.status(500).send({ status: false, message: err.message || errMsg });
    });
}

function removeFromBoard(boardId, artefactId){
    UxBoArtefact.destroy({ where: {boardId: boardId, artefactId:artefactId}})
    .then(delData => {
        return delData;
    }).catch(err => {
        console.log(err)
    });
}

exports.removeLikes = async (req, res) => {
    const id      = req.body.id;
    const user    = req.email;
    const boardId = (req.body.boardId && req.body.boardId!='' && req.body.boardId!='undefined') ? req.body.boardId : 0;
    UxArtefacts.findOne({attributes:['artefactLikes'], where: {id: id, artefactStatus: 'Yes'}, raw:true})
    .then(data => {
        UxFavourite.destroy({ where: {artefactId: id, user:user}})
        .then(async resp => {
            if(resp){
                if(boardId!=0){
                    await removeFromBoard(boardId, id, user);
                }
                let artefactCount = data.artefactLikes-1;
                UxArtefacts.update({artefactLikes: artefactCount }, {
                    where: { id: id }
                })
                .then(num => {
                    if (num > 0) {
                        res.send({ status: true, message: "Removed Favourite."});
                    } else {
                        res.status(400).send({status: false,
                        message: `Cannot update Artefact with id=${id}. Maybe Artefact was not found or req.body is empty!`
                        });
                    }
                })
                .catch(err => {
                    const errMsg = "Error updating Artefact's Like count with id=" + id;
                    res.status(500).send({ status: false, message: err.message || errMsg });
                });
            }
         })
        .catch(err => {
            const errMsg = "Error updating Artefact's Like count with id=" + id;
            res.status(500).send({ status: false, message: err.message || errMsg });
        });
    }).catch(err => {
        const errMsg = "Error Fetching Artefact's Like count with id=" + id;
        res.status(500).send({ status: false, message: err.message || errMsg });
    });
}

function removeAllFiles(){
    let fileDir = path.resolve("./") +"/uploads/downloads";

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
exports.downloadArtefact = async(req, res) => {
    const id   = req.body.id;
    let zip    = new require('node-zip')();
    let tmpDir = path.resolve("./") +"/uploads/downloads/";
    removeAllFiles();
    if (fs.existsSync(tmpDir)){
        UxArtefacts.findOne({where: {id: id, artefactStatus: 'Yes'}, raw: true})
        .then(data => {
            Uxuploads.findAll(
                {attributes: ['id', 'fileType', 'fileName', 'filePath', 'fileExten', 'fileSize'], 
                where: {artefactId: data['id'], fileStatus: 'Yes', fileType: 'file'}, raw: true})
            .then(uploads => {
                uploads.map(function(x){
                    zip.file(x.fileName, fs.readFileSync(path.join(path.resolve("./"), x.filePath)));
                });
                let zipData = zip.generate({ base64:false, compression: 'DEFLATE' });
                let zipName =tmpDir+data['artefactName']+".zip";
              
                fs.promises.writeFile(zipName, zipData, 'binary').then(async () => {
                    console.log("File written successfully\n");
                    let downloadCount = data.artefactDownloads+1;
                    await UxArtefacts.update({artefactDownloads: downloadCount},{where: {id: id}})
                    .then(num => {
                       if(num == 1){
                            res.download(zipName, function(err){
                                if (err){
                                    console.log(err);
                                } else {
                                    console.log('downloading successful');
                                }
                            });
                        }else{
                            const errMsg = "Error updaing download Count.";
                            res.status(500).send({ status: false, message: err.message || errMsg });
                        }
                    }).catch(err => {
                        const errMsg = "Error updaing download Count.";
                        res.status(500).send({ status: false, message: err.message || errMsg });
                    });
                }).catch(err => {
                    const errMsg = "Error Preparing Zip file for donwload.";
                    res.status(500).send({ status: false, message: err.message || errMsg });
                });
            });
        })
        .catch(err => {
        const errMsg = "Some error occurred while retrieving this Artefact.";
        res.status(500).send({ status: false, message: err.message || errMsg });
        });
    }
}

// Download particular ux Artefact's files based on Format.
exports.downloadArtefactByFormat = async(req, res) => {
    const id       = req.body.id;
    const format   = req.body.format;
    let tmpDir     = path.resolve("./") +"/uploads/downloads/";
    let zip        = new require('node-zip')();
    removeAllFiles();
    if (fs.existsSync(tmpDir)){
        UxArtefacts.findOne({where: {id: id, artefactStatus: 'Yes'}, raw: true})
        .then(data => {
            Uxuploads.findAll(
                {attributes: ['id', 'fileType', 'fileName', 'filePath', 'fileExten', 'fileSize'], 
                where: {fileExten: format, artefactId: data['id'], fileStatus: 'Yes', fileType: 'file'}, raw: true})
            .then(uploads => {
                uploads.map(function(x){
                    zip.file(x.fileName, fs.readFileSync(path.join(path.resolve("./"), x.filePath)));
                });
                let zipData = zip.generate({ base64:false, compression: 'DEFLATE' });
                let zipName = tmpDir+data.artefactName+".zip";
              
                fs.promises.writeFile(zipName, zipData, 'binary').then(async () => {
                    console.log("File written successfully\n");
                    let downloadCount = data.artefactDownloads+1;
                    await UxArtefacts.update({artefactDownloads: downloadCount},{where: {id: id}})
                    .then(num => {
                       if(num == 1){
                            res.download(zipName, function(err){
                                if (err){
                                    console.log(err);
                                } else {
                                    console.log('downloading successful');
                                }
                            });
                        }else{
                            const errMsg = "Error updaing download Count.";
                            res.status(500).send({ status: false, message: err.message || errMsg });
                        }
                    }).catch(err => {
                        const errMsg = "Error updaing download Count.";
                        res.status(500).send({ status: false, message: err.message || errMsg });
                    });
                }).catch(err => {
                    const errMsg = "Error Preparing Zip file for donwload.";
                    res.status(500).send({ status: false, message: err.message || errMsg });
                });
            });
        })
        .catch(err => {
        const errMsg = "Some error occurred while retrieving this Artefact.";
        res.status(500).send({ status: false, message: err.message || errMsg });
        });
    }
}