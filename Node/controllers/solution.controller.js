const db = require('../models');
const utils = require('../helpers/utils');

const Solution = db.solution;
const filters = { entity: 'solution' };

exports.sqlDump = (req, res) => {
  Solution.findAll({}).then(resp => {
    res.send(resp);
  }).catch(err => {
    res.send(err);
  })
};
// Create and Save a new Solution
exports.create = (req, res) => {
  // Create a Solution
  const newSolution = utils.filterBody(req.body);

  // Save Solution in the database
  Solution.create(newSolution)
    .then(solution => {
      res.send({ status: true,
        message: 'Solution created successfully!',
        solution: utils.fetchFields(solution),
      });
    })
    .catch(err => {
      const errMsg = 'Some error occurred while creating the solution.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Retrieve all Solutions from the database.
exports.findAll = async (req, res) => {
  const solutionData = [];

  Solution.findAll(utils.wherePractices(req))
    .then(async solutions => {
      if (solutions.length <= 0) {
        return res.send({ status: true, solutions });
      }
      for (let i = 0; i < solutions.length; i++) {
        filters.entityId = solutions[i].id;
        const data = utils.fetchFields(solutions[i]);
        await utils.getDownloadDetails(data, filters);
        utils.getFiles(data, filters, (err, data) => {
          if (err) {
            const errMsg = 'Some error occurred while retrieving solutions.';
            return res.status(500).send({ status: false, message: err.message || errMsg });
          }
          solutionData.push(data);
          if ((i + 1) === solutions.length) {
            return res.send({ status: true, solutions: solutionData });
          }
        });
      }
    })
    .catch(err => {
      const errMsg = 'Some error occurred while retrieving solutions.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Find a single Solution with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Solution.findByPk(id)
    .then(solution => {
      if (!solution) {
        const errMsg = `Solution with id: ${id} not found.`;
        return res.status(404).send({ status: false, message: errMsg });
      }
      filters.entityId = solution.id;
      const data = utils.fetchFields(solution);
      utils.getFiles(data, filters, (err, solutionData) => {
        if (err) {
          const errMsg = `Error retrieving solution with id: ${id}`;
          return res.status(500).send({ status: false, message: err.message || errMsg });
        }
        res.send({ status: true, solution: solutionData });
      });
    })
    .catch(err => {
      const errMsg = `Error retrieving solution with id: ${id}`;
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Update a solution by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Solution.findByPk(id)
    .then(solution => {
      if (solution) {
        return solution.update(utils.filterBody(req.body));
      }
      res.status(404).send({ status: false, message: `Solution with id: ${id} not found` });
    })
    .then(solution => {
      if (solution) {
        return res.send({ status: true, message: 'Solution updated successfully.' });
      }
      res.status(500).send({ status: false, message: 'Failed to update the solution.' });
    })
    .catch(err => {
      const errMsg = `Error updating solution with id: ${id}`;
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Delete a Solution with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Solution.destroy({ where: { id } })
    .then(solution => {
      if (solution) {
        utils.deleteUploads({ entity: filters.entity, entityId: id });
        return res.send({ status: true, message: 'Solution  deleted successfully!' });
      }
      res.status(404).send({ status: false, message: `Solution with id: ${id} not found.` });
    })
    .catch(err => {
      const errMsg = `Could not delete solution with id: ${id}`;
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};
