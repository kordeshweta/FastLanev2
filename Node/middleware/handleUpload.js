const path = require('path');

const { getFileExt, genrateUUIDv4 } = require('../helpers/utils');

exports.options = (uploadLimit) => ({
  abortOnLimit: true,
  limits: {
    fileSize: uploadLimit * 1024 * 1024
  },
  limitHandler: (req, res) => {
    const errMsg = `File upload limit of ${uploadLimit}mb exceeded`;
    return res.status(413).send({ status: false, message: errMsg });
  }
});

const fileUpload = (file, callback) => {
  const tmpName = genrateUUIDv4() + getFileExt(file.name);
  file.path = path.join('uploads', `${file.type}s`, tmpName);
  file.mv(file.path, (err) => {
    if (err) {
      return callback(err);
    }
    callback(null, {
      fileType: file.type,
      entity: file.entity,
      entityId: file.entityId,
      fileName: file.name,
      linkText: file.linkText,
      mimeType: file.mimetype,
      fileSize: file.size,
      filePath: file.path,
    });
  });
};

exports.image = (req, res, next) => {
  if (req.files && req.files.image) {
    req.files.image.type = 'image';
    req.files.image.entity = req.body.entity;
    req.files.image.entityId = req.body.entityId;

    fileUpload(req.files.image, (err, image) => {
      if (err) {
        const errMsg = `Error occured while uploading image`;
        return res.status(400).send({ status: false, message: err.message || errMsg });
      }
      req.body.image = image;
      next();
    });
  } else {
    next();
  }
};

exports.file = (req, res, next) => {
  if (req.files && req.files.file) {
    req.files.file.type = 'file';
    req.files.file.entity = req.body.entity;
    req.files.file.entityId = req.body.entityId;
    req.files.file.linkText = req.body.linkText;

    fileUpload(req.files.file, (err, file) => {
      if (err) {
        const errMsg = `Error occured while uploading file`;
        return res.status(400).send({ status: false, message: err.message || errMsg });
      }
      req.body.file = file;
      next();
    });
  } else {
    next();
  }
};
