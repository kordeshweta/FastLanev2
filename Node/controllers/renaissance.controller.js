const db                = require('../models');
const RenaissancePhase  = db.renaissancePhase;
const RenaisCategory    = db.renaisCategory;
const RenaisSubCategory = db.renaisSubCategory;
const RenaisQuestions   = db.renaisQuestions;
const RenaisGuidelines  = db.renaisGuidelines;
const RenaisAssessment  = db.renaisAssessment;
const RenaisAnswers     = db.renaisAnswers;
const RenaisColumns     = db.renaisColumns
const RenaisInstruction = db.renaisInstruction;
const RenaisGeneralQuestion  = db.renaisGeneralQuestion;

// Retrieve all Renaissance Phases from the database.
exports.getAllRenaisPhases = (req, res) => {
  
    RenaissancePhase.findAll({ where: {phaseStatus: 'Yes'}, raw: true })
    .then(renaisPhase => {
      return res.send({ status: true, data: renaisPhase });
    })
    .catch(err => {
      const errMsg = 'Some error occurred while retrieving All Renaissance Phase.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.addRenaisColumns = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({status: false, message: "Column Names can not be empty!"});
    return;
  }

  const columns = {
    phaseId : req.body.phaseId,
    columnName : req.body.name,
    columnOptions : (req.body.options) ? req.body.options : '[]'
  };

  // Save Columns in the database
  RenaisColumns.create(columns)
    .then(data => {
      res.send({ status: true, data: data.id});
    })
    .catch(err => {
      const errMsg = "Some error occurred while creating the Column.";
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.addRenaisCategory = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({status: false, message: "Category Name can not be empty!"});
      return;
    }
  
    const category = {
      phaseId : req.body.phaseId,
      catName : req.body.name,
      iconName : req.body.icon
    };
  
    // Save Category in the database
    RenaisCategory.create(category)
      .then(data => {
        res.send({ status: true, data: data.id});
      })
      .catch(err => {
        const errMsg = "Some error occurred while creating the Categories.";
        res.status(500).send({ status: false, message: err.message || errMsg });
      });
};

exports.addRenaisSubCategory = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({status: false, message: "Sub Category Name can not be empty!"});
      return;
    }
  
    const subCategory = {
        catId : req.body.catId,
        subCatName : req.body.name,
        subCatDescription : req.body.desc
    };
  
    // Save Sub Category in the database
    RenaisSubCategory.create(subCategory)
      .then(data => {
        res.send({ status: true, data: data.id});
      })
      .catch(err => {
        const errMsg = "Some error occurred while creating the Sub Categories.";
        res.status(500).send({ status: false, message: err.message || errMsg });
      });
};

exports.addRenaisQuestions = (req, res) => {
    // Validate request
    if (!req.body.question) {
      res.status(400).send({status: false, message: "Question can not be empty!"});
      return;
    }
  
    const question = {
        queryId: req.body.queryId,
        queryType: req.body.queryType,
        question: req.body.question,
        questionType: req.body.questionType,
        questionOptions: req.body.questionOptions,
        questionWeightage: req.body.questionWeightage
    };
  
    // Save Questions in the database
    RenaisQuestions.create(question)
      .then(data => {
        res.send({ status: true, data: data.id});
      })
      .catch(err => {
        const errMsg = "Some error occurred while creating the Question.";
        res.status(500).send({ status: false, message: err.message || errMsg });
      });
};


exports.addRenaisGuidelines = (req, res) => {
    // Validate request
    if (!req.body.guideline) {
      res.status(400).send({status: false, message: "Guideline can not be empty!"});
      return;
    }
  
    const guideline = {
        phaseId:req.body.phaseId,
        catId: req.body.catId,
        guideline: req.body.guideline,
        guidelineRemark: req.body.guidelineRemark
    };
  
    // Save Guidelines in the database
    RenaisGuidelines.create(guideline)
      .then(data => {
        res.send({ status: true, data: data.id});
      })
      .catch(err => {
        const errMsg = "Some error occurred while creating the Guideline.";
        res.status(500).send({ status: false, message: err.message || errMsg });
      });
};

exports.addRenaisAssessment = (req, res) => {
    // Validate request
    if (!req.body.organisation) {
      res.status(400).send({status: false, message: "Organisation can not be empty!"});
      return;
    }
  
    const assessment = {
        phaseId: req.body.phaseId,
        name: req.user,
        email : req.email,
        organisation: req.body.organisation
    };
  
    // Save Assessment in the database
    RenaisAssessment.create(assessment)
      .then(data => {
        res.send({ status: true, data: data.id});
      })
      .catch(err => {
        const errMsg = "Some error occurred while creating the Assessment.";
        res.status(500).send({ status: false, message: err.message || errMsg });
      });
};


exports.addRenaisGeneralQuestion = (req, res) => {
    // Validate request
    if (!req.body.question) {
      res.status(400).send({status: false, message: "General Questuion can not be empty!"});
      return;
    }
  
    const generalQ = {
        phaseId: req.body.phaseId,
        generalQuestion: req.body.question
    };
  
    // Save Assessment in the database
    RenaisGeneralQuestion.create(generalQ)
      .then(data => {
        res.send({ status: true, data: data.id});
      })
      .catch(err => {
        const errMsg = "Some error occurred while creating the General Questuion.";
        res.status(500).send({ status: false, message: err.message || errMsg });
      });
};

exports.addRenaisAnswer = (req, res) => {
    // Validate request
    if (!req.body.assessmentId) {
      res.status(400).send({status: false, message: "AssessmentId can not be empty!"});
      return;
    }

    const answer = {
        assessmentId: req.body.assessmentId,
        queryType: req.body.queryType,
        queryId: req.body.queryId,
        scoreType : (req.body.scoreType) ? req.body.scoreType : '[]',
        scoreValue: (req.body.scoreValue) ? req.body.scoreValue : '[]',
        notes: (req.body.notes) ? req.body.notes : null,
    };
  
    // Save Answer in the database
    RenaisAnswers.create(answer)
      .then(data => {
        res.send({ status: true, data: data.id});
      })
      .catch(err => {
        const errMsg = "Some error occurred while creating the Answer.";
        res.status(500).send({ status: false, message: err.message || errMsg });
      });
};

exports.addRenaisInstruction = (req, res) => {
  // Validate request
  if (!req.body.instruction) {
    res.status(400).send({status: false, message: "Instruction can not be empty!"});
    return;
  }

  const instruction = {
      phaseId: req.body.phaseId,
      instruction: req.body.instruction
  };

  // Save Assessment in the database
  RenaisInstruction.create(instruction)
    .then(data => {
      res.send({ status: true, data: data.id});
    })
    .catch(err => {
      const errMsg = "Some error occurred while creating the Instruction.";
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.getRenaisColumns = (req, res) => {
    const id = req.params.id;
    RenaisColumns.findAll({ where: {phaseId: id}, raw: true })
    .then(renaisColu => {
      return res.send({ status: true, data: renaisColu });
    })
    .catch(err => {
      const errMsg = 'Some error occurred while retrieving All Renaissance Columns.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.getRenaisCategoty = (req, res) => {
    const phaseId = req.params.id;
    RenaisCategory.findAll({ where: {phaseId: phaseId}, raw: true })
    .then(renaisCat => {
      return res.send({ status: true, data: renaisCat });
    })
    .catch(err => {
      const errMsg = 'Some error occurred while retrieving All Renaissance Category.';
      return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.getRenaisSubCategoty = (req, res) => {
  const catId = req.params.id;
  RenaisSubCategory.findAll({ where: {catId: catId}, raw: true })
  .then(renaissubCat => {
    return res.send({ status: true, data: renaissubCat });
  })
  .catch(err => {
    const errMsg = 'Some error occurred while retrieving All Renaissance Sub Category.';
    return res.status(500).send({ status: false, message: err.message || errMsg });
  });
};

exports.getRenaisQuestion = (req, res) => {
  const id = req.params.id;
  const type = req.params.type;
  RenaisQuestions.findAll({ where: {queryId: id, queryType: type}, raw: true })
  .then(renaisQuest => {
    return res.send({ status: true, data: renaisQuest, queryId: parseInt(id) });
  })
  .catch(err => {
    const errMsg = 'Some error occurred while retrieving All Renaissance Questions.';
    return res.status(500).send({ status: false, message: err.message || errMsg });
  });
};

exports.getRenaisGeneralQuestion = (req, res) => {
  const id = req.params.id;
  RenaisGeneralQuestion.findAll({ where: {phaseId: id}, raw: true })
  .then(renaisGQ => {
    return res.send({ status: true, data: renaisGQ });
  })
  .catch(err => {
    const errMsg = 'Some error occurred while retrieving All Renaissance General Questions.';
    return res.status(500).send({ status: false, message: err.message || errMsg });
  });
};

exports.getRenaisInstruction = (req, res) => {
  const id = req.params.id;
  RenaisInstruction.findAll({ where: {phaseId: id, instructionStatus: 'Yes'}, raw: true })
  .then(renaisInst => {
    return res.send({ status: true, data: renaisInst });
  })
  .catch(err => {
    const errMsg = 'Some error occurred while retrieving All Renaissance Instruction.';
    return res.status(500).send({ status: false, message: err.message || errMsg });
  });
};

exports.getRenaisGuidelines = (req, res) => {
  const id = req.params.id;
  RenaisGuidelines.findAll({ where: {catId: id, guidelineStatus: 'Yes', phaseId: req.params.phaseId}, raw: true })
  .then(renaisGuid => {
    return res.send({ status: true, data: renaisGuid });
  })
  .catch(err => {
    const errMsg = 'Some error occurred while retrieving All Renaissance Guidelines.';
    return res.status(500).send({ status: false, message: err.message || errMsg });
  });
};

exports.getRenaisAllAssessment = (req, res) => {
  const id = req.params.id;
  const role = req.params.role;
  const email = req.email;
  RenaisAssessment.findAll({ where: {phaseId: id, isAdmin: role, assessmentStatus: 'Yes'}, raw: true })
  .then(renaisAssess => {
    return res.send({ status: true, data: renaisAssess });
  })
  .catch(err => {
    const errMsg = 'Some error occurred while retrieving All Renaissance All Assessment.';
    return res.status(500).send({ status: false, message: err.message || errMsg });
  });
};

exports.getRenaisHistory = (req, res) => {
  const id = req.params.id;
  const email = req.email;
  RenaisAssessment.findAll({ where: {phaseId: id, email: email, assessmentStatus: 'Yes'}, raw: true })
  .then(renaisHistory => {
    return res.send({ status: true, data: renaisHistory });
  })
  .catch(err => {
    const errMsg = 'Some error occurred while retrieving All Renaissance Assessment History.';
    return res.status(500).send({ status: false, message: err.message || errMsg });
  });
};

exports.getRenaisAnswers = async (req, res) => { // Have more work to do
  const assessmentId = req.params.id;
  let answers = [];
  
  RenaisAnswers.findAll({ where: {assessmentId: assessmentId}, raw: true })
  .then(async renaisAnswers => {
    await Promise.all(
      renaisAnswers.map( async (data, index) => {

        let nameData = await getIdBasedName(data.queryId, data.queryType);
        answers.push({
          'id' : data['id'],
          'phaseId': nameData['phaseId'],
          'phaseName': nameData['phaseName'],
          'catId' : nameData['catId'],
          'catName': nameData['catName'],
          'subCatId' : nameData['subcatId'],
          'subcatName': nameData['subcatName'],
          'generalQuestId': nameData['generalQuestId'],
          'generalQuestion' : nameData['generalQuestion'],
          'questId' : data.queryId,
          'questName': data.queryType,
          'question' : nameData['question'],
          'questionType' : nameData['questionType'],
          'questionOptions' : nameData['questionOptions'],
          'questionWeightage' : nameData['questionWeightage'],
          'questionStatus' : nameData['questionStatus'],
          'scoreType' : data.scoreType,
          'scoreValue' : data.scoreValue,
          'notes' : data.notes
        });
        
        return answers;
      })
    );

    return res.send({ status: true, data: answers });
  })
  .catch(err => {
    const errMsg = 'Some error occurred while retrieving All Renaissance Assessment Answers.';
    return res.status(500).send({ status: false, message: err.message || errMsg });
  });
};

async function getIdBasedName(id, type){
  let data = [];
  if(type == 'phase'){
    await RenaissancePhase.findOne({where: {id: id}, raw: true})
      .then(phaseData => {
          data.phaseId = phaseData.id;
          data.phaseName = phaseData.phaseTitle;
          return data;
      });
    return data;
  }else if(type == 'category'){
   await RenaisCategory.findOne({where: {id: id}, raw: true})
   .then(cateData => {
        data.catId = cateData.id;
        data.catName = cateData.catName;
        return RenaissancePhase.findOne({where: {id: cateData.phaseId}, raw: true})
        .then(phaseData => {
            data.phaseId = phaseData.id;
            data.phaseName = phaseData.phaseTitle;
            return data;
        });
   });
   return data;
  }else if(type == 'subcategory'){
   await RenaisSubCategory.findOne({where: {id: id}, raw: true})
   .then(subCateData => {
        data.subcatId = subCateData.id;
        data.subcatName = subCateData.subCatName;
        return RenaisCategory.findOne({where: {id: subCateData.catId}, raw: true})
        .then(cateData => {
            data.catId = cateData.id;
            data.catName = cateData.catName;
            return RenaissancePhase.findOne({where: {id: cateData.phaseId}, raw: true})
            .then(phaseData => {
                data.phaseId = phaseData.id;
                data.phaseName = phaseData.phaseTitle;
                return data;
            });
        });
   });
   return data;
  }else if(type == 'question'){
    await RenaisQuestions.findOne({where: {id: id}, raw: true})
    .then(async queData => {
      
      data.questId = queData.id;
      data.question = queData.question;
      data.questionType = queData.questionType;
      data.questionOptions = queData.questionOptions;
      data.questionWeightage = queData.questionWeightage	;
      data.questionStatus = queData.questionStatus;
      if(queData.queryType == 'phase'){
        await RenaissancePhase.findOne({where: {id: queData.queryId}, raw: true})
        .then(phaseData => {
            data.phaseId = phaseData.id;
            data.phaseName = phaseData.phaseTitle;
            return data;
        });
        return data;
      }else if(queData.queryType == 'category'){
        await RenaisCategory.findOne({where: {id: queData.queryId}, raw: true})
        .then(cateData => {
            data.catId = cateData.id;
            data.catName = cateData.catName;
            return RenaissancePhase.findOne({where: {id: cateData.phaseId}, raw: true})
            .then(phaseData => {
                data.phaseId = phaseData.id;
                data.phaseName = phaseData.phaseTitle;
                return data;
            });
        });
        return data;
      }else if(queData.queryType == 'subcategory'){
        await RenaisSubCategory.findOne({where: {id: queData.queryId}, raw: true})
        .then(subCateData => {
              data.subcatId = subCateData.id;
              data.subcatName = subCateData.subCatName;
              return RenaisCategory.findOne({where: {id: subCateData.catId}, raw: true})
              .then(cateData => {
                  data.catId = cateData.id;
                  data.catName = cateData.catName;
                  return RenaissancePhase.findOne({where: {id: cateData.phaseId}, raw: true})
                  .then(phaseData => {
                      data.phaseId = phaseData.id;
                      data.phaseName = phaseData.phaseTitle;
                      return data;
                  });
              });
        });
        return data;
      } 
    });
    return data;
  }else if(type == 'generalquestion'){
    await RenaisGeneralQuestion.findOne({where: {id: id}, raw: true})
    .then(genQuest => {
      data.generalQuestId  = genQuest.id;
      data.generalQuestion = genQuest.generalQuestion;
      return RenaissancePhase.findOne({where: {id: genQuest.phaseId}, raw: true})
      .then(phaseData => {
        data.phaseId = phaseData.id;
        data.phaseName = phaseData.phaseTitle;
          return data;
      });
    });
    return data;
   }
}

exports.updateRenaisColumns = (req, res) => {
  const id = req.params.id;
  // Validate request
  if (!req.body.name) {
    res.status(400).send({status: false, message: "Column Name can not be empty!"});
    return;
  }

  const columns = {
    columnName : req.body.name,
    columnOptions : (req.body.options) ? req.body.options : '[]'
  };

  // Save Columns in the database
  RenaisColumns.update(columns, {
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({ status: true, message: "Column Name has been updated successfully."});
    } else {
      res.status(400).send({status: false,
        message: `Cannot update Column Name with id=${id}. Maybe Column Name was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    const errMsg = "Error updating Column Name with id=" + id;
    res.status(500).send({ status: false, message: err.message || errMsg });
  });
};

exports.updateRenaisCategory = (req, res) => {
    const id = req.params.id;
    // Validate request
    if (!req.body.name) {
      res.status(400).send({status: false, message: "Category Name can not be empty!"});
      return;
    }

    const category = {
      catName : req.body.name,
      iconName: req.body.icon
    };

    // Save Category in the database
    RenaisCategory.update(category, {
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
};

exports.updateRenaisSubCategory = (req, res) => {
  const id = req.params.id;
  // Validate request
  if (!req.body.name) {
    res.status(400).send({status: false, message: "Sub Category Name can not be empty!"});
    return;
  }

  const subCategory = {
    subCatName : req.body.name,
    subCatDescription : req.body.desc
  };
  
    RenaisSubCategory.update(subCategory, {
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
};

exports.updateRenaisQuestions = (req, res) => {
  const id = req.params.id;
  // Validate request
  if (!req.body.question) {
    res.status(400).send({status: false, message: "Question can not be empty!"});
    return;
  }

  const question = {
      question: req.body.question,
      questionType: req.body.questionType,
      questionOptions: req.body.questionOptions,
      questionWeightage: req.body.questionWeightage
  };
  
  RenaisQuestions.update(question, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "Question has been updated successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot update Question with id=${id}. Maybe Question was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      const errMsg = "Error updating Question with id=" + id;
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.updateRenaisGuidelines = (req, res) => {
  const id = req.params.id;

  // Validate request
  if (!req.body.guideline) {
    res.status(400).send({status: false, message: "Guideline can not be empty!"});
    return;
  }

  const guideline = {
    guideline: req.body.guideline,
    guidelineRemark: req.body.guidelineRemark
  };
  
  RenaisGuidelines.update(guideline, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "Guidelines has been updated successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot update Guidelines with id=${id}. Maybe Guidelines was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      const errMsg = "Error updating Question with id=" + id;
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};


exports.updateRenaisAnswer = (req, res) => {
  const id = req.params.id;

  // Validate request
  if (!id) {
    res.status(400).send({status: false, message: "Answer can not be empty!"});
    return;
  }

  const answer = {
    scoreType : (req.body.scoreType) ? req.body.scoreType : '[]',
    scoreValue: (req.body.scoreValue) ? req.body.scoreValue : '[]',
    notes: (req.body.notes) ? req.body.notes : null,
  };

// Save Answer in the database
    RenaisAnswers.update(answer, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "Answer has been updated successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot update Answer with id=${id}. Maybe Answer was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      const errMsg = "Error updating Answer with id=" + id;
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};


exports.updateRenaisInstruction = (req, res) => {
  const id = req.params.id;

  // Validate request
  if (!req.body.instruction) {
    res.status(400).send({status: false, message: "Instruction can not be empty!"});
    return;
  }

  const instruction = {
      instruction: req.body.instruction
  };
 
  RenaisInstruction.update(instruction, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "Instruction has been updated successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot update Instruction with id=${id}. Maybe Instruction was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      const errMsg = "Error updating Question with id=" + id;
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.updateRenaisGeneralQuestion = (req, res) => {
  const id = req.params.id;

  // Validate request
  if (!req.body.question) {
    res.status(400).send({status: false, message: "General Questuion can not be empty!"});
    return;
  }

  const generalQ = {
      generalQuestion: req.body.question
  };

  RenaisGeneralQuestion.update(generalQ, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "General Questuion has been updated successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot update General Questuion with id=${id}. Maybe General Questuion was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      const errMsg = "Error updating General Question with id=" + id;
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
};

exports.deleteAssessment = (req, res) => {

  const id = req.body.id;

  RenaisAssessment.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        RenaisAnswers.findAll({where: { assessmentId : id}, raw: true})
        .then(delData => {
            if(delData.length >0){
              RenaisAnswers.destroy( {where: { assessmentId: id}});
            }
        }).catch(err => {
            console.log(err)
        });
        res.send({ status: true, message: "Assessment has been deleted successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot delete Assessment with id=${id}.`
        });
      }
    })
    .catch(err => {
       const errMsg = "Error deleting Assessment with id=" + id;
       res.status(500).send({ status: false, message: err.message || errMsg });
    });
}

exports.deleteCategory = (req, res) => {

  const id = req.body.id;
  // Validate request
  if (!req.body.id) {
    res.status(400).send({status: false, message: "Category id can not be empty!"});
    return;
  }

  const category = {
    catStatus:"No"
  };

  // Save Category in the database
  RenaisCategory.update(category, {
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({ status: true, message: "Category has been deleted successfully."});
    } else {
      res.status(400).send({status: false,
        message: `Cannot delete Category with id=${id}. Maybe Category was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    const errMsg = "Error deleting Category with id=" + id;
    res.status(500).send({ status: false, message: err.message || errMsg });
  });
}

exports.deleteSubCategory = (req, res) => {
  const id = req.body.id;
  // Validate request
  if (!req.body.id) {
    res.status(400).send({status: false, message: "Id can not be empty!"});
    return;
  }

  const subCategory = {
    subCatStatus:"No"
  };
  
    RenaisSubCategory.update(subCategory, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "Subcategory has been deleted successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot delete Subcategory with id=${id}. Maybe Subcategory was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      const errMsg = "Error deleting Subcategory with id=" + id;
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
}
exports.deleteQuestions = (req, res) => {

  const id = req.body.id;
  // Validate request
  if (!req.body.id) {
    res.status(400).send({status: false, message: "Id can not be empty!"});
    return;
  }

  const question = {
      questionStatus: "No"
  };
  
  RenaisQuestions.update(question, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "Question has been deleted successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot delete Question with id=${id}. Maybe Question was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      const errMsg = "Error deleting Question with id=" + id;
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
}

exports.deleteGuidelines = (req, res) => {
  const id = req.body.id;
  RenaisGuidelines.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "Guideline has been deleted successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot delete Guideline with id=${id}.`
        });
      }
    })
    .catch(err => {
       const errMsg = "Error deleting Guideline with id=" + id;
       res.status(500).send({ status: false, message: err.message || errMsg });
    });
}

exports.deleteGeneralQuestion = (req, res) => {
  const id = req.body.id;

  // Validate request
  if (!req.body.id) {
    res.status(400).send({status: false, message: "Id can not be empty!"});
    return;
  }

  const generalQ = {
    generalQuestionStatus: "No"
  };

  RenaisGeneralQuestion.update(generalQ, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "General Question has been deleted successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot delete General Questuion with id=${id}. Maybe General Questuion was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      const errMsg = "Error deleting General Question with id=" + id;
      res.status(500).send({ status: false, message: err.message || errMsg });
    });
}

exports.deleteInstruction = (req, res) => {
  const id = req.body.id;
  RenaisInstruction.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "Instruction has been deleted successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot delete Instruction with id=${id}.`
        });
      }
    })
    .catch(err => {
       const errMsg = "Error deleting Instruction with id=" + id;
       res.status(500).send({ status: false, message: err.message || errMsg });
    });
}

exports.deleteColumns = (req, res) => {
  const id = req.body.id;
  RenaisColumns.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ status: true, message: "Column has been deleted successfully."});
      } else {
        res.status(400).send({status: false,
          message: `Cannot delete Column with id=${id}.`
        });
      }
    })
    .catch(err => {
       const errMsg = "Error deleting Column with id=" + id;
       res.status(500).send({ status: false, message: err.message || errMsg });
    });
}
