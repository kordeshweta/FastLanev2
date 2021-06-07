const db                 = require('../models');
const UxCategory         = db.uxCategory;

// Retrieve all UX Categories from the database.
exports.getAllCategories = (req, res) => {
  const id = req.params.id;
  
  UxCategory.findAll({ attributes: ['id', 'catName', 'catDesc', 'catStatus'], where: {phaseId: id, catStatus: 'Yes'}, raw: true })
    .then(uxCategories => {
      return res.send({ status: true, data: uxCategories });
    })
    .catch(err => {
      const errMsg = 'Some error occurred while retrieving All Categories.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Retrieve particular ux Category from the database.
exports.getCategorie = (req, res) => { 
  const id = req.params.id;
  
  UxCategory.findOne({ attributes: ['id', 'catName', 'catDesc', 'catStatus'], where: {id: id}})
    .then(data => {
      res.send({ status: true, data: data});
    })
    .catch(err => {
      const errMsg = "Some error occurred while retrieving this Categories.";
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.addCategory = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({status: false, message: "Category Name can not be empty!"});
    return;
  }

  const category = {
    phaseId : req.body.phaseId,
    catName : req.body.name,
    catDesc : req.body.desc
  };

  // Save Category in the database
  UxCategory.create(category)
    .then(data => {
      res.send({ status: true, data: data.id});
    })
    .catch(err => {
      const errMsg = "Some error occurred while creating the Categories.";
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.updateCategory = (req, res) => {
    const id = req.params.id;

    const category = {
      phaseId : req.body.phaseId,
      catName : req.body.name,
      catDesc : req.body.desc
    };

    UxCategory.update(category, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "Category has been updated successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
       const errMsg = "Error updating Category with id=" + id;
       res.status(500).send({ status: false, message: err.message || errMsg });
    });
}

exports.deleteCategory = (req, res) => {

  const id = req.body.id;

    UxCategory.update({catStatus: 'No'}, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "Category has been deleted successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot delete Category with id=${id}.`
        });
      }
    })
    .catch(err => {
       const errMsg = "Error deleting Category with id=" + id;
       res.status(500).send({ status: false, message: err.message || errMsg });
    });

}
