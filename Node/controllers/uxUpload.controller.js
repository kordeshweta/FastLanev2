const db      = require('../models');
const path       = require('path');
const fs         = require('fs');
const { getFileExt } = require('../helpers/utils');
const UxUploads = db.uxUploads;
const UxArtefacts = db.uxArtefacts;

const getFileCount = async (id, type) => {
    return await UxUploads.findAll({where: {artefactId: id, fileType: type}, raw: true})
                          .then(fileC => {return fileC.length; });
}

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Retrieve all UX Categories from the database.
exports.getAllFiles = (req, res) => {
  const id = req.body.id;
  UxUploads.findAll({ 
    attributes: ['id', ['fileName', 'name'], ['fileType', 'type'], ['filePath', 'path'], ['fileExten', 'exten']], 
    where: {fileStatus: 'Yes', artefactId:id}, raw: true })
    .then(uxFiles => {

      return res.send({ status: true, data: uxFiles });
    })
    .catch(err => {
      const errMsg = 'Some error occurred while retrieving All Files.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.deleteFiles = (req, res) => {

//Single id will remove one row, To delete multiple row pass req.body.id as array eg:[1,2,4]
  const id = req.body.id;
    UxUploads.update({fileStatus: 'No'}, {where: { id: id}})
    .then(num => {
          if (num >= 1 ) {
              res.send({ status: true, message: "File has been deleted successfully."});
          } else {
              res.status(400).send({status: false,
              message: `Cannot delete this file with id=${id}.`
              });
          }
    }) 
    .catch(err => {
        const errMsg = "Error deleting Uploaded images/files with id=" + id;
        res.status(500).send({ status: false, message: err.message || errMsg });
    })
}

addImage = async(req, res) => {
 
  const id           = req.body.id;
  const format       = req.body.format;
  const isThumb      = req.body.isThumb;
  let artefactImage  = req.files.image;
  let artefactName   = req.files.image.name.replace(/ /g, "_");
  artefactName       = artefactName.substr(0, artefactName.lastIndexOf("."));
  let countImages    = await getFileCount(id, 'image');
  countImages        = countImages+1;
  const tmpName      = artefactName+'_thumbnail'+'_'+countImages+makeid(5)+ getFileExt(artefactImage.name);
  artefactImage.type = "image";
  artefactImage.path = path.join('uploads', `${artefactImage.type}s`, tmpName);
  let exten = getFileExt(artefactImage.name).split(".");
  x = exten[1];

  if (!req.body.format) {
      return res.status(400).send({ status: false, message:'Upload format is missing.'});
  }

  if(format.indexOf(x) != -1){
    artefactImage.mv(artefactImage.path, function(err) {
        if (err){
          const errMsg = `Error occured while uploading image`;
          return res.status(400).send({ status: false, message: err.message || errMsg });
        }
        let imageFile = {};
            imageFile.artefactId = id;
            imageFile.fileType   = artefactImage.type;
            imageFile.fileName   = tmpName;
            imageFile.filePath   = artefactImage.path;
            imageFile.mimeType   = artefactImage.mimetype;
            imageFile.fileExten  = getFileExt(artefactImage.name);
            imageFile.fileSize   = artefactImage.size;

        UxUploads.create(imageFile)
        .then(data => {
          if(!isThumb){
            UxArtefacts.findOne({where: { id: id}, raw: true})
            .then(reData => {
              if(reData){
                let formatVal = reData.artefactFormats;
                if(formatVal.indexOf(x) == -1){
                  formatVal += ',.'+x;
                  UxArtefacts.update({artefactFormats: formatVal}, {where: { id: id}});
                }
              }
            });
          }
          res.send({ status: true, message: 'Image uploaded successfully!'});
        })
        .catch(err => {
          const errMsg = "Some error occurred while uploading the image.";
          res.status(500).send({ status: false, message: err.message || errMsg });
        });
    });
  }else{
     return res.status(400).send({ status: false, message:'Sorry, Can not upload. Upload format is not matching.'});
  }
}

addFile = async (req, res) => {
  const id          = req.body.id;
  const format      = req.body.format;
  const isThumb     = req.body.isThumb;
  let artefactFile  = req.files.file;
  let countFiles    =  await getFileCount(id, 'file');
  countFiles        = countFiles+1;
  let artefactName  = req.files.file.name.replace(/ /g, "_");
  artefactName      = artefactName.substr(0, artefactName.lastIndexOf("."));
  const tmpName     = artefactName+'_file'+'_'+countFiles+makeid(5)+getFileExt(artefactFile.name);
  artefactFile.type = "file";
  artefactFile.path = path.join('uploads', `${artefactFile.type}s`, tmpName);

  if (!req.body.format) {
      return res.status(400).send({ status: false, message:'Upload format is missing.'});
  }

  let exten = getFileExt(artefactFile.name).split(".");
  x = exten[1];
  if(format.indexOf(x) != -1){
    artefactFile.mv(artefactFile.path, function(err) {
        if (err){
          const errMsg = `Error occured while uploading file`;
          return res.status(400).send({ status: false, message: err.message || errMsg });
        }
        let uploadFile = {};
            uploadFile.artefactId = id;
            uploadFile.fileType   = artefactFile.type;
            uploadFile.fileName   = tmpName;
            uploadFile.filePath   = artefactFile.path;
            uploadFile.mimeType   = artefactFile.mimetype;
            uploadFile.fileExten  = getFileExt(artefactFile.name);
            uploadFile.fileSize   = artefactFile.size;

        UxUploads.create(uploadFile)
        .then(data => {
          if(!isThumb){
            UxArtefacts.findOne({where: { id: id}, raw: true})
            .then(reData => {
              if(reData){
                let formatVal = reData.artefactFormats;
                if(formatVal.indexOf(x) == -1){
                  formatVal += ',.'+x;
                  UxArtefacts.update({artefactFormats: formatVal}, {where: { id: id}});
                }
              }
            });
          }
          res.send({ status: true, message: 'File uploaded successfully!'});
        })
        .catch(err => {
          const errMsg = "Some error occurred while uploading the file.";
          res.status(500).send({ status: false, message: err.message || errMsg });
        });
    });
  }else{
     return res.status(400).send({ status: false, message:'Sorry, Can not upload. Upload format is not matching.'});
  }
}

exports.addFiles = (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    if(req.files.image){
      addImage(req, res);
    }

    if(req.files.file){
      addFile(req, res);
    }
}

// Download image web service
exports.downloadImage = (req, res) => {
  const id = req.params.id;

  UxUploads.findOne({ where: { id, fileType: 'image' } })
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

// Download file web service
exports.downloadFile = (req, res) => {
  const id = req.params.id;

  UxUploads.findOne({ where: { id, fileType: 'file' } })
    .then(upload => {
      if (!upload) {
        const errMsg = `File with id: ${id} not found.`;
        return res.status(404).send({ status: false, message: errMsg });
      }
      fs.access(upload.filePath, fs.F_OK, (err) => {
        if (err) {
          const errMsg = 'File does not exist or not accessible.';
          return res.status(404).send({ status: false, message: errMsg });
        }
        res.setHeader('Content-type', upload.mimeType);
        res.download(upload.filePath, upload.fileName);
      });
    })
    .catch(err => {
      const errMsg = `Error while downloading file with id: ${id}`;
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};
