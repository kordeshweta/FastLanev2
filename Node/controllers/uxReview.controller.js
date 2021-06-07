const db      = require('../models');
const UxReview    = db.uxReview;

// Retrieve all UX artefact from the database.
exports.getAllReviews = (req, res) => {
  const id = req.params.id;
   
  UxReview.findAll({
      attributes: {exclude: ['artefactId', 'updatedAt']},
      where: {artefactId: id, reviewStatus: 'Yes'},
      raw: true 
    })
    .then(reviews => {
      let reviewArr = [];
      reviews.forEach(function(elm, i){
        reviewArr.push({
          'id'        : elm['id'],
          'name'      : elm['userName'],
          'desc'      : elm['reviewDesc'],
          'mailId'    : elm['userEmail'],
          'status'    : elm['reviewStatus'],
          'createdOn' : elm['createdAt']
        });
      });
      return res.send({ status: true, data: reviewArr });
    })
    .catch(err => {
      const errMsg = 'Some error occurred while retrieving Artefact\'s Reviews.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.addReview = (req, res) => {
    const review = {
        artefactId : req.body.artefactId,
        userName   : req.body.name,
        userEmail  : req.email,
        reviewDesc : req.body.desc
    };
    UxReview.create(review)
    .then(data => {
      res.send({ status: true, message: 'Review Added successfully!'});
    })
    .catch(err => {
        console.log(err);
      const errMsg = "Some error occurred while creating the Review.";
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};
