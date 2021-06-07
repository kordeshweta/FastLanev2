const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = require('../models');
const config = require('../config');
const fs = require('fs');
//const inaugrationJson = require('../inaugurationFlag.json');
const inaugrationJson = '../inaugurationFlag.json';

const User = db.user;
const SiteVisits = db.siteVisits;

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    email: req.body.email, role: req.body.role,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if (!user) {
        return res.status(500).send({ status: false, message: 'Registration failed.' });
      }
      res.send({ status: true, message: 'User registered successfully!' });
    })
    .catch(err => {
      res.status(500).send({ status: false, message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: { email: req.body.email }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ status: false, message: 'User Not found.' });
      }

      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

      if (!passwordIsValid) {
        return res.status(401).send({ status: false, message: 'Invalid Password!' });
      }
      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, config.SECRET, { expiresIn: 86400 });
      res.send({
        status: true, email: user.email,
        role: user.role, token: token,
      });
    })
    .catch(err => {
      res.status(500).send({ status: false, message: err.message });
    });
};

exports.visitCount = (req, res) => {

  SiteVisits.count()
  .then(count => {
    return res.send({ status: true, count: count });
  })
  .catch(err => {
    res.status(500).send({ status: false, message: err.message });
  });
};

exports.inauguration = (req, res) => {
  
  fs.readFile(inaugrationJson, (err, data) => {
    if (err) throw err;
    let newVal = JSON.parse(data);
    console.log('Read from file '+ newVal);
    return res.send({ status: true, flag: newVal });
  });
};

exports.revertInauguration = (req, res) => {
    
  fs.writeFile(inaugrationJson, 0, function writeJSON(err) {
    if (err) return console.log(err);
    console.log('writing to ' + inaugrationJson);
  });
  return res.send({ status: true, message: 'Success' });
};