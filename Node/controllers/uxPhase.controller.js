const db                   = require('../models');
const UxPhase              = db.uxPhase;
const UxPhaseRelatedTopics = db.uxPhaseRelatedTopics;

// Retrieve all UX Phase from the database.
exports.getAllPhase = (req, res) => {
  const domainId = req.params.id;
  if (!req.params.id) {
    return res.status(400).send('Domain is missing.');
  }
  UxPhase.findAll({ attributes: ['id', ['phaseName', 'name']], where: {domainId: domainId, phaseStatus: 'Yes'}, raw: true })
    .then(uxPhase => {
      return res.send({ status: true, data: uxPhase });
    })
    .catch(err => {
      const errMsg = 'Some error occurred while retrieving All Phase.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Retrieve particular uxCategory's  Related Topics from the database.
exports.getRelatedTopics = (req, res) => { 
  const id = req.params.id;
  
  UxPhaseRelatedTopics.findAll({where: {phaseId: id}})
    .then(data => {
      res.send({ status: true, data: data});
    })
    .catch(err => {
      const errMsg = "Some error occurred while retrieving this Categorie's Related Topic.";
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};


// Add Related Topic
exports.addRelatedTopics = (req, res) => { 
  // Validate request
   if (!req.body.topicName || !req.body.topicLink || !req.body.phaseId) {
    return res.status(400).send('Related Topic data is missing.');
  }
  UxPhaseRelatedTopics.create(req.body)
    .then(data => {
      res.send({ status: true, data: data.id});
    })
    .catch(err => {
      const errMsg = "Some error occurred while creating Related Topic.";
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};
