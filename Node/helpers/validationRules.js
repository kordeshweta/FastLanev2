const { check } = require('express-validator');

const User = require('../models').user;

const rules = {
  // Rule to validate email address
  email: [
    check('email', 'The email field is required.').isLength({min: 1}),
    check('email', 'The email must be a valid email address.').isEmail(),
    check('email').trim()
  ],

  // Rule to validate email uniqeness
  emailExist: [
    check('email').custom(email => {
      return User.findOne({ where: { email } }).then(user => {
        if (user) return Promise.reject('The email address is already taken.');
      });
    })
  ],

  // Rule to validate password
  password: [
    check('password', 'The password field is required.').isLength({min: 1}),
    check('password').trim()
    // check('password', 'The password must be at least 6 characters.').isLength({min: 6}),
    // check('password', 'The password should not exceed 20 characters.').isLength({max: 20})
  ],

  // Rule to validate cName
  cName: [
    check('cName', 'The cName field is required.').isLength({min: 1}),
    check('cName', 'The cName should not exceed 80 characters.').isLength({max: 80}),
    check('cName').trim()
  ],

  // Rule to validate shortDesc
  shortDesc: [
    check('shortDesc', 'The shortDesc field is required.').isLength({min: 1}),
    check('shortDesc', 'The shortDesc should not exceed 200 characters.').isLength({max: 200}),
    check('shortDesc').trim()
  ],

  // Rule to validate longDesc
  longDesc: [
    check('longDesc', 'The longDesc field is required.').isLength({min: 1}),
    check('longDesc', 'The longDesc should not exceed 550 characters.').isLength({max: 550}),
    check('longDesc').trim()
  ],

  // Rule to validate technology
  technology: [
    check('technology', 'The technology field is required.').isLength({min: 1}),
    check('technology', 'The technology should not exceed 50 characters.').isLength({max: 50}),
    check('technology').trim()
  ],

  // Rule to validate contributors
  contributors: [
    check('contributors', 'The contributors length is exceeding standard limit.').isLength({max: 550}), 
  ],

  // Rule to validate practices
  practices: [
    check('practices', 'The practices length is exceeding standard limit.').isLength({max: 400})
  ],

  // Rule to validate entity
  entity: [
    check('entity', 'The entity field is required.').isLength({min: 1}),
    check('entity', 'The entity value is not allowed.').isIn(['component', 'bestPractice', 'solution']),
    check('entity').trim()
  ],

  // Rule to validate entityId
  entityId: [
    check('entityId', 'The entityId field is required.').isLength({min: 1}),
    check('entityId').trim()
  ],

  // Rule to validate image
  image: [
    check('image', 'The image field is required.').isLength({min: 1})
  ],

  // Rule to validate file
  file: [
    check('file', 'The file field is required.').isLength({min: 1})
  ],

  // Rule to validate linkText
  linkText: [
    check('linkText', 'The linkText field is required.').isLength({min: 1}),
    check('linkText', 'The linkText should not exceed 25 characters.').isLength({max: 25}),
    check('linkText').trim()
  ]
};

module.exports = rules;
