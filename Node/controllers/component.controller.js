const db = require('../models');
const utils = require('../helpers/utils');

const Component = db.component;
const filters = { entity: 'component' };

// Create and Save a new Component
exports.create = (req, res) => {
  // Create a new Component
  const newComponent = utils.filterBody(req.body);

  // Save Component in the database
  Component.create(newComponent)
    .then(component => {
      res.send({ status: true,
        message: 'Component created successfully!',
        component: utils.fetchFields(component),
      });
    })
    .catch(err => {
      const errMsg = 'Some error occurred while creating the component.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Retrieve all Components from the database.
exports.findAll = async (req, res) => {
  const componentData = [];
  Component.findAll(utils.wherePractices(req))
    .then(async components => {
      if (components.length <= 0) {
        return res.send({ status: true, components });
      }
      for (let i = 0; i < components.length; i++) {
        filters.entityId = components[i].id;
        const data = utils.fetchFields(components[i]);
        await utils.getDownloadDetails(data, filters);
        utils.getFiles(data, filters, (err, data) => {
          if (err) {
            const errMsg = 'Some error occurred while retrieving components.';
            return res.status(500).send({ status: false, message: err.message || errMsg });
          }
          componentData.push(data);
          if ((i + 1) === components.length) {
            return res.send({ status: true, components: componentData });
          }
        });
      }
    })
    .catch(err => {
      const errMsg = 'Some error occurred while retrieving components.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Find a single component with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Component.findByPk(id)
    .then(component => {
      if (!component) {
        const errMsg = `Component with id: ${id} not found.`;
        return res.status(404).send({ status: false, message: errMsg });
      }
      filters.entityId = component.id;
      const data = utils.fetchFields(component);
      utils.getFiles(data, filters, (err, componentData) => {
        if (err) {
          const errMsg = `Error retrieving component with id: ${id}`;
          return res.status(500).send({ status: false, message: err.message || errMsg });
        }
        res.send({ status: true, component: componentData });
      });
    })
    .catch(err => {
      const errMsg = `Error retrieving component with id: ${id}`;
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Update a component by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Component.findByPk(id)
    .then(component => {
      if (component) {
        const updatedComponent = utils.filterBody(req.body);
        return component.update(updatedComponent);
      }
      res.status(404).send({ status: false, message: `Component with id: ${id} not found` });
    })
    .then(component => {
      if (component) {
        return res.send({ status: true, message: 'Component updated successfully.' });
      }
      res.status(500).send({ status: false, message: 'Failed to update the component.' });
    })
    .catch(err => {
      const errMsg = `Error updating component with id: ${id}`;
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Delete a component with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Component.destroy({ where: { id } })
    .then(component => {
      if (component) {
        utils.deleteUploads({ entity: filters.entity, entityId: id });
        return res.send({ status: true, message: 'Component deleted successfully!' });
      }
      res.status(404).send({ status: false, message: `Component with id: ${id} not found.` });
    })
    .catch(err => {
      const errMsg = `Could not delete component with id: ${id}`;
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};
