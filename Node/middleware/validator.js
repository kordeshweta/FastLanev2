const { validationResult } = require('express-validator');

const rules = require('../helpers/validationRules');

// Validate request and return errors if any.
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let arrErrors = errors.array().map((error) => {
      return error.msg;
    });
    if (arrErrors.length) {
      return res.status(400).send({ status: false, message: arrErrors[0] });
    }
  }
  next();
};

module.exports = {
  // Validator for user login
  login: [
    ...rules.email, ...rules.password, validateRequest
  ],

  // Validator for user registration
  register: [
    ...rules.email, ...rules.emailExist, ...rules.password, validateRequest
  ],

  // Validator for entities like components, best practices and solutions
  entityFields: [
    ...rules.cName, ...rules.shortDesc, ...rules.longDesc, ...rules.technology,
    ...rules.contributors, ...rules.practices, validateRequest
  ],

  // Validator for file upload
  file: [
    ...rules.entity, ...rules.entityId,
    ...rules.file, ...rules.linkText, validateRequest
  ],

  // Validator for image upload
  image: [
    ...rules.entity, ...rules.entityId,
    ...rules.image, validateRequest
  ]
};
