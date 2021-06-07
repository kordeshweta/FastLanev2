const db = require('../models');
const utils = require('../helpers/utils');

const BestPractice = db.bestPractice;
const filters = { entity: 'bestPractice' };

// Create and Save a new Best Practice
exports.create = (req, res) => {
  // Create a new Best Practice
  const newBestPractice = utils.filterBody(req.body);

  // Save Best Practice in the database
  BestPractice.create(newBestPractice)
    .then(bestPractice => {
      res.send({ status: true,
        message: 'Best practice created successfully!',
        bestPractice: utils.fetchFields(bestPractice),
      });
    })
    .catch(err => {
      const errMsg = 'Some error occurred while creating the best practice.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Retrieve all BestPractices from the database.
exports.findAll = async (req, res) => {
  const bestPracticeData = [];

  BestPractice.findAll(utils.wherePractices(req))
    .then(async bestPractices => {
      if (bestPractices.length <= 0) {
        return res.send({ status: true, bestPractices });
      }
      for (let i = 0; i < bestPractices.length; i++) {
        filters.entityId = bestPractices[i].id;
        const data = utils.fetchFields(bestPractices[i]);
        await utils.getDownloadDetails(data, filters);
        utils.getFiles(data, filters, (err, data) => {
          if (err) {
            const errMsg = 'Some error occurred while retrieving best practices.';
            return res.status(500).send({ status: false, message: err.message || errMsg });
          }
          bestPracticeData.push(data);
          if ((i + 1) === bestPractices.length) {
            return res.send({ status: true, bestPractices: bestPracticeData });
          }
        });
      }
    })
    .catch(err => {
      const errMsg = 'Some error occurred while retrieving best practices.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Find a single best practice with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  BestPractice.findByPk(id)
    .then(bestPractice => {
      if (!bestPractice) {
        const errMsg = `Best practice with id: ${id} not found.`;
        return res.status(404).send({ status: false, message: errMsg });
      }
      filters.entityId = bestPractice.id;
      const data = utils.fetchFields(bestPractice);
      utils.getFiles(data, filters, (err, bestPracticeData) => {
        if (err) {
          const errMsg = `Error retrieving best practice with id: ${id}`;
          return res.status(500).send({ status: false, message: err.message || errMsg });
        }
        res.send({ status: true, bestPractice: bestPracticeData });
      });
    })
    .catch(err => {
      const errMsg = `Error retrieving best practice with id: ${id}`;
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Update a best practice by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  BestPractice.findByPk(id)
    .then(bestPractice => {
      if (bestPractice) {
        return bestPractice.update(utils.filterBody(req.body));
      }
      res.status(404).send({ status: false, message: `Best practice with id: ${id} not found` });
    })
    .then(bestPractice => {
      if (bestPractice) {
        return res.send({ status: true, message: 'Best practice updated successfully.' });
      }
      res.status(500).send({ status: false, message: 'Failed to update the best practice.' });
    })
    .catch(err => {
      const errMsg = `Error updating best practice with id: ${id}`;
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Delete a best practice with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  BestPractice.destroy({ where: { id }})
    .then(bestPractice => {
      if (bestPractice) {
        utils.deleteUploads({ entity: filters.entity, entityId: id });
        return res.send({ status: true, message: 'Best practice deleted successfully!' });
      }
      res.status(404).send({ status: false, message: `Best practice with id: ${id} not found.` });
    })
    .catch(err => {
      const errMsg = `Could not delete best practice with id: ${id}`;
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};