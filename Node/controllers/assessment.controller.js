const db                = require('../models');
const AssessmentCategory    = db.asmtCategory;
const AssessmentSubCategory = db.asmtSubCategory;
const AssessmentQuestions   = db.asmtQuestions;
const Assessment  = db.assessment;
const AssessmentAnswers     = db.asmtAnswers;

exports.getAssessmentQuestions = (req, res) => {
  const subCategoryId = req.params.id;
  AssessmentQuestions.findAll({ where: {subCategoryId: subCategoryId}, raw: true })
  .then(questionsData => {
    return res.send({ status: true, data: questionsData, subCategoryId: parseInt(subCategoryId) });
  })
  .catch(err => {
    const errMsg = 'Some error occurred while retrieving SubCategory Questions.';
    return res.status(500).send({ status: false, message: err.message || errMsg });
  });
};

