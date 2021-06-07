const fs = require('fs');

const db = require('../models');

const Upload = db.upload;
const RepoDownload = db.repoDownload;

/**
 * Get extension from file name
 * @param fileName
 */
exports.getFileExt = (fileName) => {
  return fileName.substr((~-fileName.lastIndexOf('.') >>> 0) + 1);
};

/**
 * Generate version 4 unique uuid
 */
exports.genrateUUIDv4 = () => {
  const f = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return f.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

exports.getDownloadDetails = (data, where) => {
  return RepoDownload.findAndCountAll({ where, raw: true })
  .then( downl => {
    //console.log(downl);
    data.downloadDetails = downl;
  })
  .catch(err => {
    console.log(err);
  });
}
/**
 * Get files and images
 * @param data
 * @param where
 * @param callback
 */
exports.getFiles = (data, where, callback) => {
  return Upload.findAll({ where })
    .then(files => {
      for (const file of files) {
        if (file.fileType === 'image') {
          data.images.push(getParams(file));
        }
        else if (file.fileType === 'file') {
          data.files.push(getParams(file));
        }
      }
      callback(null, data);
    })
    .catch(err => {
      callback(err);
    });
};

/**
 * Fetch entity fields
 * @param entity
 */
exports.fetchFields = (entity) => {
  return {
    id: entity.id,
    cName: entity.cName,
    shortDesc: entity.shortDesc,
    longDesc: entity.longDesc,
    technology: entity.technology,
    category: entity.constructor.name,
    images: [], files: [],
    downloadDetails: [], 
    practices: entity.practices,
    contributors: entity.contributors,
    updatedAt: entity.updatedAt,
    downloadCount: entity.downloadCount
  };
};

/**
 * Delete uploaded files by entity
 * @param where
 */
exports.deleteUploads = (where) => {
  Upload.findAll({ where })
    .then(files => {
      for (const file of files) {
        fs.unlink(file.filePath, () => {});
      }
      Upload.destroy({ where });
    });
};

/**
 * Request body filter, ignoring extra unwanted params
 * @param body
 */
exports.filterBody = (body) => {
  return {
    cName: body.cName,
    shortDesc: body.shortDesc,
    technology: body.technology,
    contributors: body.contributors,
    practices: body.practices,
    longDesc: body.longDesc,
  };
};

/**
 * Build where clause for practices filter
 * @param req
 */
exports.wherePractices = (req) => {
  let where = {};
  if (req.body && req.body.practices &&
      req.body.practices instanceof Array &&
      req.body.practices.length > 0) {
    const orWhere = [];
    req.body.practices.map(practice => {
      orWhere.push(db.sequelize.where(
        db.sequelize.fn('INSTR', db.sequelize.col('practices'), `"${practice}"`),
        { [db.Sequelize.Op.gt]: 0 }
      ));
    });
    where = { [db.Sequelize.Op.or]: orWhere };
  }
  return { where };
};

/**
 * Get upload parameters
 * @param file
 */
const getParams = (file) => {
  const param = {};
  param.id = file.id;
  param.fileSize = file.fileSize;
  if (file.fileType === 'file') {
    param.linkText = file.linkText;
  }
  param.fileName = file.fileName;
  param.fileURL = `/api/download/${file.fileType}/${file.id}`;
  param.mimeType = file.mimeType;
  return param;
};
