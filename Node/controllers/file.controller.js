const fs   = require('fs');
const db   = require('../models');
const _    = require('underscore');
const path = require('path');
const moment =  require('moment');

const Upload = db.upload;
const Component = db.component;
const BestPractice = db.bestPractice;
const Solution = db.solution;
const RepoDownload = db.repoDownload;

// Get Model using entity and entityId
const getEntityModel = (entity, entityId, callback) => {
  if (!entity) {
    return callback({ message: 'entity can not be empty.' });
  }
  if (!entityId) {
    return callback({ message: 'entityId can not be empty.' });
  }
  if (entity === 'component') {
    return callback(null, Component.findByPk(entityId));
  }
  else if (entity === 'bestPractice') {
    return callback(null, BestPractice.findByPk(entityId));
  }
  else if (entity === 'solution') {
    return callback(null, Solution.findByPk(entityId));
  } else {
    return callback({ message: `Invalid entity value '${entity}'` });
  }
};

// Upload new image web service
exports.uploadImage = (req, res) => {
  const entity = req.body.entity;
  const entityId = req.body.entityId;
  getEntityModel(entity, entityId, (err, entityPromise) => {
    if (err) {
      return res.status(400).send(err);
    }
    entityPromise.then(Entity => {
      if (!Entity) {
        const errMsg = `The ${entity} with id: ${entityId} not found.`;
        return res.status(404).send({ status: false, message: errMsg });
      }
      return Upload.create(req.body.image);
    }).then(uploaded => {
        if (uploaded) {
          return res.send({ status: true, message: 'Image uploaded successfully!' });
        }
        res.status(500).send({ status: false, message: 'Failed to upload the image.' });
      })
      .catch(err => {
        const errMsg = 'Some error occurred while uploading image.';
        return res.status(500).send({ status: false, message: err.message || errMsg });
      });
  });
};

// Upload new image web service
exports.updateImage = (req, res) => {
  const id = req.params.id;
  let oldFile;
  Upload.findOne({
    attributes: ['filePath'],
    where: { id, fileType: 'image' }
  }).then(filePath => {
    oldFile = filePath.dataValues.filePath;
    Upload.update(
      req.body.image, {
        where: { id, fileType: 'image' }
    }).then(upload => {
      if (!upload) {
        const errMsg = `Image with id: ${id} not found.`;
        return res.status(404).send({ status: false, message: errMsg });
      }
      fs.unlink(oldFile, (err) => {
        if (err) throw err;
        res.send({ status: true, message: 'Image deleted successfully!' });
      });
    })
      .catch(err => {
        const errMsg = `Error while downloading image with id: ${id}`;
        return res.status(500).send({ status: false, message: err.message || errMsg });
      });
  });
};

// Download image web service
exports.downloadImage = (req, res) => {
  const id = req.params.id;

  Upload.findOne({ where: { id, fileType: 'image' } })
    .then(upload => {
      if (!upload) {
        const errMsg = `Image with id: ${id} not found.`;
        return res.status(404).send({ status: false, message: errMsg });
      }
      fs.access(upload.filePath, fs.F_OK, (err) => {
        if (err) {
          const errMsg = 'Image does not exist or not accessible.';
          return res.status(404).send({ status: false, message: errMsg });
        }
        res.setHeader('Content-type', upload.mimeType);
        res.download(upload.filePath, upload.fileName);
      });
    })
    .catch(err => {
      const errMsg = `Error while downloading image with id: ${id}`;
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Delete image web service
exports.deleteImage = (req, res) => {
  let imagePath = null;
  const id = req.params.id;

  Upload.findOne({ where: { id, fileType: 'image' } })
    .then(upload => {
      if (!upload) {
        const errMsg = `Image with id: ${id} not found.`;
        return res.status(404).send({ status: false, message: errMsg });
      }
      imagePath = upload.filePath;
      return upload.destroy({ where: { id } });
    })
    .then(deleted => {
      if (!deleted) {
        const errMsg = `Could not delete image with id: ${id}.`;
        return res.status(500).send({ status: false, message: errMsg });
      }
      if (imagePath) {
        fs.unlink(imagePath, () => { });
      }
      res.send({ status: true, message: 'Image deleted successfully!' });
    })
    .catch(err => {
      const errMsg = `Error while deleting image with id: ${id}`;
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Upload new file web service
exports.uploadFile = (req, res) => {
  const entity = req.body.entity;
  const entityId = req.body.entityId;

  if (!req.body.linkText) {
    return res.status(404).send({ status: false, message: `The linkText can not be empty!.` });
  }

  getEntityModel(entity, entityId, (err, entityPromise) => {
    if (err) {
      return res.status(400).send(err);
    }
    entityPromise.then(Entity => {
      if (!Entity) {
        const errMsg = `The ${entity} with id: ${entityId} not found.`;
        return res.status(404).send({ status: false, message: errMsg });
      }
      return Upload.create(req.body.file);
    })
      .then(uploaded => {
        if (uploaded) {
          return res.send({ status: true, message: 'File uploaded successfully!' });
        }
        res.status(500).send({ status: false, message: 'Failed to upload the file.' });
      })
      .catch(err => {
        const errMsg = 'Some error occurred while uploading file.';
        return res.status(500).send({ status: false, message: err.message || errMsg });
      });
  });
};

// Upload new image web service
exports.updateFile = (req, res) => {
  const id = req.params.id;
  let oldFile;
  Upload.findOne({
    attributes: ['filePath'],
    where: { id, fileType: 'file' }
  }).then(filePath => {
    oldFile = filePath.dataValues.filePath;
    Upload.update(
      req.body.file, {
        where: { id, fileType: 'file' }
    }).then(upload => {
      if (!upload) {
        const errMsg = `File with id: ${id} not found.`;
        return res.status(404).send({ status: false, message: errMsg });
      }
      fs.unlink(oldFile, (err) => {
        if (err) throw err;
        res.send({ status: true, message: 'File update successfully!' });
      });
    })
      .catch(err => {
        const errMsg = `Error while update file with id: ${id}`;
        return res.status(500).send({ status: false, message: err.message || errMsg });
      });
  });
};

exports.getDownloadDetails = (req, res) => {
  const id = req.params.id;
  const type = req.params.type;
  RepoDownload.findAndCountAll({ where: {entity: type, entityId: id}, raw: true })
    .then( downl => {

      return res.send({ status: true, data: downl });
    })
    .catch(err => {
      const errMsg = 'Some error occurred while retrieving all download details.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
}

function captureDownloadDetails(id, type, purpose, project, customer, remark, name, email) {

  const downloadDetail = {
    entityId : id,
    entity   : type,
    purpose  : purpose,
    projectID  : project,
    customerName: customer,
    remark   : remark,
    name     : name,
    email    : email,
    createDate :  moment().format('YYYY-MM-DD')
  };

  RepoDownload.create(downloadDetail)
  .then(inserted => {
    console.log('Download Details captured');
  })
  .catch(err => {
    const errMsg = 'Some error occurred while creating the Download Details.';
    console.log(err.message || errMsg);
  });
}

function updateDownloadCount(id, type){
  if(type == 'component'){
    Component.findOne({ where: { 'id': id }, raw:true })
    .then(component => {
      if (component) {
        Component.increment('downloadCount', { where: { id: id } })
        .then(num => {
           console.log(num);
        })
        .catch(err => {
          console.log(err);
        });
      }
    })
  }

  if(type == 'bestpractice'){
    BestPractice.findOne({ where: { 'id': id }, raw:true })
    .then(bestpractices => {
      if (bestpractices) {
        BestPractice.increment('downloadCount', { where: { id: id } })
        .then(num => {
           console.log(num);
        })
        .catch(err => {
          console.log(err);
        });
      }
    })
  }

  if(type == 'solution'){
    Solution.findOne({ where: { 'id': id }, raw:true })
    .then(solutions => {
      if (solutions) {
        Solution.increment('downloadCount', { where: { id: id } })
        .then(num => {
           console.log(num);
        })
        .catch(err => {
          console.log(err);
        });
      }
    })
  }
  
}

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

// Download file web service
exports.downloadFile = (req, res) => {
  const id      = req.params.id;
  const type    = req.params.type;
  const purpose = req.body.purpose;
  const project  = req.body.project;
  const customer = req.body.customer;
  const remark  = req.body.remark; 
  const zip     = new require('node-zip')();
  const tmpDir  = path.resolve("./") +"/uploads/downloadFiles/";
  if (!purpose) {
    const errMsg = `Please enter purpose.`;
    return res.status(404).send({ status: false, message: errMsg });
  }else{
    if (purpose =='project' && (!project && !customer)) {
      const errMsg = `Please enter ProjectID and Customer Details.`;
      return res.status(404).send({ status: false, message: errMsg });
    }
    removeAllFiles();
    if (fs.existsSync(tmpDir)){
      Upload.findAll({ where: { entityId: id, entity: type, fileType: 'file' }, raw:true })
        .then(filesList => {
          if (!filesList) {
            const errMsg = `${type} with id: ${id} files not found.`;
            return res.status(404).send({ status: false, message: errMsg });
          }else{
            filesList.map(function(x){
              zip.file(x.fileName, fs.readFileSync(path.join(path.resolve("./"), x.filePath)));
            });
            let zipData = zip.generate({ base64:false, compression: 'DEFLATE' });
            let zipName = tmpDir+type+".zip";
            fs.promises.writeFile(zipName, zipData, 'binary').then(async () => {
              console.log("File written successfully\n");
              updateDownloadCount(id, type);
              captureDownloadDetails(id, type, purpose, project, customer, remark, req.user, req.email);
              res.download(zipName, function(err){
                if (err){
                    console.log(err);
                } else {
                    console.log('downloading successful');
                }
              });
            }).catch(err => {
                const errMsg = "Error Preparing Zip file for donwload.";
                res.status(500).send({ status: false, message: err.message || errMsg });
            });
          }
        })
        .catch(err => {
          const errMsg = `Error while downloading ${type} with id: ${id}`;
          return res.status(500).send({ status: false, message: err.message || errMsg });
        });
    }
  }
};

// Delete file web service
exports.deleteFile = (req, res) => {
  let filePath = null;
  const id = req.params.id;

  Upload.findOne({ where: { id, fileType: 'file' } })
    .then(upload => {
      if (!upload) {
        const errMsg = `File with id: ${id} not found.`;
        return res.status(404).send({ status: false, message: errMsg });
      }
      filePath = upload.filePath;
      return upload.destroy({ where: { id } });
    })
    .then(deleted => {
      if (!deleted) {
        const errMsg = `Could not delete file with id: ${id}.`;
        return res.status(500).send({ status: false, message: errMsg });
      }
      if (filePath) {
        fs.unlink(filePath, () => { });
      }
      res.send({ status: true, message: 'File deleted successfully!' });
    })
    .catch(err => {
      const errMsg = `Error while deleting file with id: ${id}`;
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

//to get all downloads in repository
// exports.getAllRepoDownloads = (req, res) => {

//   RepoDownload.findAll()
//   .then(repoDown => {
//     return res.send({ status: true, data: repoDown });
//   })
//   .catch(err => {
//     const errMsg = 'Some error occurred while retrieving All Repo Downloads.';
//     return res.status(500).send({ status: false, message: err.message || errMsg });
//   });
// };

exports.getAllRepoDownloads = async (req, res) => {
  let repoDownloads = []
  let constId=[]
  let bestPracticeId = []
  let bestPractices = []
  let solutionsId = []
  let solutions = []
  let returnRepo = []
  let addRepo = {}
  await RepoDownload.findAll()
  .then(repoDown => {
    repoDownloads = repoDown
    for(let rep of repoDown){
      if(rep['dataValues']['entity']==='component'){
        constId.push(rep['dataValues']['entityId'])
      }else if(rep['dataValues']['entity']==='bestPractice'){
        bestPracticeId.push(rep['dataValues']['entityId'])
      }else if(rep['dataValues']['entity']==='solution'){
        solutionsId.push(rep['dataValues']['entityId'])
      }
    }
    return BestPractice.findAll({attributes:['id','cName'], where:{id : bestPracticeId}, raw: true})
  })
  .then(bestpractices => {
    bestPractices = bestpractices
    return Solution.findAll({attributes:['id','cName'], where:{id : solutionsId}, raw: true})
  })
  .then(Solutions => {
    solutions = Solutions
    return Component.findAll({attributes:['id','cName'], where:{id : constId}, raw: true})
  })
  .then(compo=> {
      for(let rep of repoDownloads){
        if(rep['dataValues']['entity']==='component'){
          addRepo = {...rep['dataValues']}
          for(let i =0 ; i < compo.length; i++){
            if(compo[i]['id']===rep['dataValues']['entityId']){
              addRepo.cName = compo[i].cName
              break;
            }
          }
          returnRepo.push(addRepo)
          addRepo = {}
        }else if(rep['dataValues']['entity']==='bestPractice'){
          addRepo = {...rep['dataValues']}
          for(let i =0 ; i < bestPractices.length; i++){
            if(bestPractices[i]['id']===rep['dataValues']['entityId']){
              addRepo.cName = bestPractices[i].cName
              break;
            }
          }
          returnRepo.push(addRepo)
          addRepo = {}
        }else if(rep['dataValues']['entity']==='solution'){
          addRepo = {...rep['dataValues']}
          for(let i =0 ; i < solutions.length; i++){
            if(solutions[i]['id']===rep['dataValues']['entityId']){
              addRepo.cName = solutions[i].cName
              break;
            }
          }
          returnRepo.push(addRepo)
          addRepo = {}
        }
      }
      return res.send({ status: true, data: returnRepo});
    })
  .catch(err => {
    const errMsg = 'Some error occurred while retrieving All Repo Downloads.';
    return res.status(500).send({ status: false, message: err.message || errMsg });
  });
};