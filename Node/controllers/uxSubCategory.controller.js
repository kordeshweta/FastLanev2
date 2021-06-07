const db         = require('../models');
const Sequelize  = require('sequelize');
const _          = require('underscore');
const path       = require('path');
const fs         = require('fs');
const Op         = Sequelize.Op;
const { getFileExt } = require('../helpers/utils');
const UxSubCategory  = db.uxSubCategory;
const UxSubCatImage  = db.uxSubCatImage;
const UxCategory     = db.uxCategory;
const UxPhase        = db.uxPhase;

// Retrieve all UX Categories from the database.
exports.getAllSubCategories = async(req, res) => {
  const id = req.params.id;
  if (id!='undefined') {
  const subCatCount = await db.sequelize.query(`SELECT count(*) as count FROM uxsubcategory WHERE catId = ${id} AND subCatStatus = 'Yes'`, { type: Sequelize.QueryTypes.SELECT });
  if(subCatCount[0].count > 0){
    UxSubCategory.findAll({
        attributes: {exclude: ['catId', 'createdAt', 'updatedAt']},
        where: {catId: id, subCatStatus: 'Yes'},
        include: [{
          model: UxCategory,
          attributes: ['catName', 'catDesc'],
          where: {catStatus: 'Yes'}
        }, {
          model: UxSubCatImage,
          attributes: ['id']
        }],
        raw: true 
      })
      .then(subCategories => {
        let subCat = [];
        subCat.push({"catName"  : subCategories[0]['uxCategory.catName'],
                      "catDesc" : subCategories[0]['uxCategory.catDesc'],
                      "subCats" : []});
        subCategories.forEach(function(elm, i){
          subCat[0]['subCats'].push({
            'id'    : elm['id'], 
            'name'  : elm['subCatName'], 
            'image' : (elm['uxSubCatImage.id']!=null) ?  `/api/uxSubCategory/downloadImage/${elm['uxSubCatImage.id']}` : '',
            'desc'  : elm['subCatDesc'],
            'status': elm['subCatStatus']
          });
        });
        return res.send({ status: true, data: subCat });
      })
      .catch(err => {
        const errMsg = 'Some error occurred while retrieving All Sub Categories.';
        return res.status(500).send({ status: false, message: err.message || errMsg });
      });
    }else{
      const msg = "No Records Found.";
      return res.send({ status: true, data: msg });
  }
 }
};

// Retrieve particular ux sub Category from the database.
exports.getSubCategorie = (req, res) => { 
  const id = req.params.id;
  UxSubCategory.findOne({ attributes: ['id', 'subCatName', 'subCatDesc', 'subCatStatus'], where: {id: id},
  include: [{model: UxSubCatImage, attributes: ['id']}], raw: true })
    .then(data => {
      let output    = {};
      output.id     = data['id'];
      output.name   = data['subCatName'];
      output.desc   = data['subCatDesc'];
      output.status = data['subCatStatus'];
      output.image  = (data['uxSubCatImage.id']!=null) ?  `/api/uxSubCategory/downloadImage/${data['uxSubCatImage.id']}` : '',
      res.send({ status: true, data: output});
    })
    .catch(err => {
      const errMsg = "Some error occurred while retrieving this Categories.";
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.addUpdateSubCategoryImage = (req, res) => {
  const id = req.body.id;

  if (!req.body.id) {
    res.status(400).send({status: false, message: "Subcategory Id can not be empty!"});
    return;
  }

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let subCatImage     = req.files.image;
  subCatImage.type    = "image";
  let subCatImageName = req.files.image.name.replace(/ /g, "_");
  subCatImageName     = subCatImageName.substr(0, subCatImageName.lastIndexOf("."));
  const tmpName       = subCatImageName+'_'+id+ getFileExt(subCatImage.name);
  subCatImage.path    = path.join('uploads', `${subCatImage.type}s`, tmpName);

  subCatImage.mv(subCatImage.path, function(err) {
    if (err){
      const errMsg = `Error occured while uploading image`;
      return res.status(400).send({ status: false, message: err.message || errMsg });
    }
    let imageFile = {};
      imageFile.subCatId = id;
      imageFile.fileType   = subCatImage.type;
      imageFile.fileName   = tmpName;
      imageFile.filePath   = subCatImage.path;
      imageFile.mimeType   = subCatImage.mimetype;
      imageFile.fileExten  = getFileExt(subCatImage.name);
      imageFile.fileSize   = subCatImage.size;
  

    setTimeout(function () {
        UxSubCatImage.findOne({ where: {'subCatId': id} }).then(function(obj) {
          if(obj!=null){ imageFile.id = obj.id;  fs.unlink(obj.filePath, () => {});}
          UxSubCatImage.upsert(imageFile)
          .then(num => {
              res.send({ status: true, message: "Sub Category Image has been add/updated successfully."});
          })
          .catch(err => {
            const errMsg = "Error updating Sub Category with id=" + id;
            res.status(500).send({ status: false, message: err.message || errMsg });
          });
        })
        .catch(err => {
          const errMsg = "Error updating Sub Category with id=" + id;
          res.status(500).send({ status: false, message: err.message || errMsg });
        })
    }, 1000);
  });
}

exports.addSubCategory = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({status: false, message: "Sub Category Name can not be empty!"});
    return;
  }
  if (!req.body.catId) {
    res.status(400).send({status: false, message: "Category Id can not be empty!"});
    return;
  }

  const category = {
    catId       : req.body.catId,
    subCatName  : req.body.name,
    subCatDesc  : req.body.desc
  };

  // Save Category in the database
  UxSubCategory.create(category)
    .then(data => {
      res.send({ status: true, data: data.id});
    })
    .catch(err => {
      const errMsg = "Some error occurred while creating the Categories.";
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.updateSubCategory = (req, res) => {
    const id = req.params.id;
    const subcategory = {
      catId       : req.body.catId,
      subCatName  : req.body.name,
      subCatDesc  : req.body.desc
    };

    UxSubCategory.update(subcategory, {
        where: { id: id }
      })
      .then(num => {
        if (num == 1) {
          res.send({ status: true, message: "Subcategory has been updated successfully."});
        } else {
          res.status(400).send({status: false,
            message: `Cannot update Subcategory with id=${id}. Maybe Subcategory was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        const errMsg = "Error updating Subcategory with id=" + id;
        res.status(500).send({ status: false, message: err.message || errMsg });
      });
}

exports.deleteSubCategory = (req, res) => {

  const id = req.body.id;

    UxSubCategory.update({subCatStatus: 'No'}, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "Sub Category has been deleted successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot delete Sub Category with id=${id}.`
        });
      }
    })
    .catch(err => {
       const errMsg = "Error deleting Sub Category with id=" + id;
       res.status(500).send({ status: false, message: err.message || errMsg });
    });

}

// Download image web service
exports.downloadSubCatImage = (req, res) => {
  const id = req.params.id;

  UxSubCatImage.findOne({ where: {id: id} })
    .then(upload => {
      if (!upload) {
        const errMsg = `Image with id: ${id} not found.`;
        return res.status(404).send({ status: false, message: errMsg });
      }

      fs.access(upload.filePath, fs.F_OK, (err) => {
        if (err) {
          const errMsg = 'Image does not exist or not accessible.';
          return res.status(404).send({ status: false, message: errMsg });
        }
        res.setHeader('Content-type', upload.mimeType);
        res.download(upload.filePath, upload.fileName);
      });
    })
    .catch(err => {
      const errMsg = `Error while downloading image with id: ${id}`;
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

// Search
exports.getSearchResult = async(req, res) => {
  const keyword = req.params.keyword;
  let searchList = [];
  return Promise.all([
    UxCategory.findAll({ attributes: ['id', 'catName'],
      where: Sequelize.and( {catStatus: 'Yes' }, { catName: {[Op.like]: '%'+keyword+'%'}}),
      include:[ { model:UxPhase,  attributes: ['id', 'phaseName'], required:false } ],
      raw: true })
      .then(catData => {
        if(catData.length >0){
          catData.map( async item => {
            searchList.push({ 'id': item.id, 'name': item.catName, 'type': 'category', phaseData:{'phaseId':item['uxPhase.id'],'phaseName':item['uxPhase.phaseName'] }});
            return searchList;
          })
        }
    }),
    UxSubCategory.findAll({ attributes: ['id', 'subCatName'],
      where: Sequelize.and( {subCatStatus: 'Yes' }, { subCatName: {[Op.like]: '%'+keyword+'%'}}),
      include:[{ model:UxCategory,  attributes: ['id', 'catName'], required:false,
                include: [{ model:UxPhase,  attributes: ['id', 'phaseName'],  required:false }]
              }],
      raw: true })
      .then(subCatData => {
        if(subCatData.length >0){
          subCatData.map( async item => {
            searchList.push({ 'id': item.id, 'name': item.subCatName, 'type': 'subcategory', categoryData:{'catId':item['uxCategory.id'], 'catName':item['uxCategory.catName']}, phaseData:{'phaseId':item['uxCategory.uxPhase.id'], 'phaseName': item['uxCategory.uxPhase.phaseName']} });
            return searchList;
          })
        }
    })
  ]).then( async function() {
    return res.send({ status: true, data: searchList});
  });
};

async function getPhaseName(id){
  let data = [];
  if(id!= ''){
    await UxCategory.findOne({where: {id: id}, raw: true})
    .then(cateData => {
        data.catId   = cateData.id;
        data.catName = cateData.catName;
        return UxPhase.findOne({where: {id: cateData.phaseId}, raw: true})
        .then(catPhaseData => {
          data.phaseId   = catPhaseData.id;
          data.phaseName = catPhaseData.phaseName;
          return data;
        });
    });
    return data;
  }
}