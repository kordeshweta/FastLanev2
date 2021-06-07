const Sequelize = require('sequelize');

const config = require('../config');

const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASS,
  {
    host: config.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: '0',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/users.model')(sequelize, Sequelize);
db.component = require('../models/components.model')(sequelize, Sequelize);
db.solution = require('../models/solutions.model')(sequelize, Sequelize);
db.bestPractice = require('../models/bestPractices.model')(sequelize, Sequelize);
db.upload = require('./uploads.model')(sequelize, Sequelize);
db.uxPhase       = require('./uxPhase.model')(sequelize, Sequelize);
db.uxCategory    = require('./uxCategory.model')(sequelize, Sequelize);
db.uxSubCategory = require('./uxSubCategory.model')(sequelize, Sequelize);
db.uxSubCatImage = require('./uxSubCatImage.model')(sequelize, Sequelize);
db.uxArtefacts   = require('./uxArtefacts.model')(sequelize, Sequelize);
db.uxUploads     = require('./uxUploads.model')(sequelize, Sequelize);
db.uxReview      = require('./uxReview.model')(sequelize, Sequelize);
db.uxFavourite   = require('./uxFavourite.model')(sequelize, Sequelize);
db.uxBoard       = require('./uxBoard.model')(sequelize, Sequelize);
db.siteVisits    = require('./siteVisits.model')(sequelize, Sequelize);
db.repoDownload  = require('./repoDownload.model')(sequelize, Sequelize);
db.uxBoardArtefacts   = require('./uxBoardArtefacts.model')(sequelize, Sequelize);
db.uxPhaseRelatedTopics = require('./uxPhaseRelatedTopics.model')(sequelize, Sequelize);

db.renaissancePhase  = require('./renaissancePhase.model')(sequelize, Sequelize);
db.renaisInstruction = require('./renaisInstruction.model')(sequelize, Sequelize);
db.renaisAssessment  = require('./renaisAssessment.model')(sequelize, Sequelize);
db.renaisCategory    = require('./renaisCategory.model')(sequelize, Sequelize);
db.renaisSubCategory = require('./renaisSubCategory.model')(sequelize, Sequelize);
db.renaisGuidelines  = require('./renaisGuidelines.model')(sequelize, Sequelize);
db.renaisQuestions   = require('./renaisQuestions.model')(sequelize, Sequelize);
db.renaisAnswers     = require('./renaisAnswers.model')(sequelize, Sequelize);
db.renaisColumns     = require('./renaisColumns.model')(sequelize, Sequelize);
db.renaisGeneralQuestion  = require('./renaisGeneralQuestion.model')(sequelize, Sequelize);


db.uxCategory.belongsTo(db.uxPhase, {foreignKey: 'phaseId' });
db.uxPhase.hasMany(db.uxCategory, {foreignKey: 'phaseId' });
db.uxPhase.hasMany(db.uxPhaseRelatedTopics, {foreignKey: 'phaseId' });

db.uxSubCategory.belongsTo(db.uxCategory, {foreignKey: 'catId' });
db.uxCategory.hasMany(db.uxSubCategory, {foreignKey: 'catId' });

db.uxSubCatImage.belongsTo(db.uxSubCategory, {foreignKey: 'subCatId' });
db.uxSubCategory.hasOne(db.uxSubCatImage, {foreignKey: 'subCatId' });

db.uxUploads.belongsTo(db.uxArtefacts, {foreignKey: 'artefactId' });
db.uxArtefacts.hasMany(db.uxUploads, {foreignKey: 'artefactId' });

db.uxReview.belongsTo(db.uxArtefacts, {foreignKey: 'artefactId' });
db.uxArtefacts.hasMany(db.uxReview, {foreignKey: 'artefactId' });

db.uxFavourite.belongsTo(db.uxArtefacts, {foreignKey: 'artefactId' });
db.uxArtefacts.hasMany(db.uxFavourite, {foreignKey: 'artefactId' });

db.uxBoardArtefacts.belongsTo(db.uxBoard, {foreignKey: 'boardId' });
db.uxBoard.hasMany(db.uxBoardArtefacts, {foreignKey: 'boardId' });

db.uxArtefacts.hasMany(db.uxBoardArtefacts, {foreignKey: 'artefactId' });

//Renaissance Tables Connections
db.renaisAssessment.belongsTo(db.renaissancePhase, {foreignKey: 'phaseId' });
db.renaissancePhase.hasMany(db.renaisAssessment, {foreignKey: 'phaseId' });
db.renaisColumns.belongsTo(db.renaissancePhase, {foreignKey: 'phaseId' });

db.renaisInstruction.belongsTo(db.renaissancePhase, {foreignKey: 'phaseId' });
db.renaissancePhase.hasMany(db.renaisInstruction, {foreignKey: 'phaseId' });

db.renaisAssessment.hasMany(db.renaisAnswers, {foreignKey: 'assessmentId' });
db.renaisAnswers.belongsTo(db.renaisAssessment, {foreignKey: 'assessmentId' });

db.renaisCategory.belongsTo(db.renaissancePhase, {foreignKey: 'phaseId' });
db.renaissancePhase.hasMany(db.renaisCategory, {foreignKey: 'phaseId' });

db.renaisGeneralQuestion.belongsTo(db.renaissancePhase, {foreignKey: 'phaseId' });
db.renaissancePhase.hasMany(db.renaisGeneralQuestion, {foreignKey: 'phaseId' });

db.renaisCategory.hasMany(db.renaisSubCategory, {foreignKey: 'catId' });
db.renaisSubCategory.belongsTo(db.renaisCategory, {foreignKey: 'catId' });

db.renaisCategory.hasMany(db.renaisGuidelines, {foreignKey: 'catId' });
db.renaisGuidelines.belongsTo(db.renaisCategory, {foreignKey: 'catId' });

/*db.renaisGeneralQuestion.hasMany(db.renaisAnswers, {foreignKey: 'generalId' });
db.renaisAnswers.belongsTo(db.renaisGeneralQuestion, {foreignKey: 'generalId' });*/


module.exports = db;

// Initial Seed Phase Data to Phase Table
setTimeout(function () {
    db.uxPhase.findAll({attributes: ['id']})
    .then(phaseC => {
          if(phaseC.length === 0){
            sequelize.sync().then(() => {
              db.uxPhase.bulkCreate(
                [
                    {domainId: 1, domain: 'User Experience Design',  phaseName: 'Empathize' },
                    {domainId: 1, domain: 'User Experience Design',  phaseName: 'Define' },
                    {domainId: 1, domain: 'User Experience Design',  phaseName: 'Ideate' },
                    {domainId: 1, domain: 'User Experience Design',  phaseName: 'Prototype' },
                    {domainId: 1, domain: 'User Experience Design',  phaseName: 'Test' },
                    
                    {domainId: 2, domain: 'Project Delivery',  phaseName: 'Case Studies' },
                    {domainId: 2, domain: 'Project Delivery',  phaseName: 'Project Template' },
                    {domainId: 2, domain: 'Project Delivery',  phaseName: 'Proof of Concept' },
                    {domainId: 2, domain: 'Project Delivery',  phaseName: 'Request for Proposal' },
                    {domainId: 2, domain: 'Project Delivery',  phaseName: 'Revenu Template' },
                    {domainId: 2, domain: 'Project Delivery',  phaseName: 'Estimations Template' },

                    {domainId: 3, domain: 'Sales & Marketing',  phaseName: 'Case Studies' },
                    {domainId: 3, domain: 'Sales & Marketing',  phaseName: 'Presentation Templates' },
                    {domainId: 3, domain: 'Sales & Marketing',  phaseName: 'LTI Branding Guidelines' },
                    {domainId: 3, domain: 'Sales & Marketing',  phaseName: 'Infographics' },
                    {domainId: 3, domain: 'Sales & Marketing',  phaseName: 'Illustrations' }
                ],{ignoreDuplicates : true}
                );
            });
          }
    });
    db.uxPhaseRelatedTopics.findAll({attributes: ['id']})
    .then(relatedT => {
          if(relatedT.length === 0){
            sequelize.sync().then(() => {
              db.uxPhaseRelatedTopics.bulkCreate(
                [
                    {phaseId: 1, topicName: 'The Future of UX Research: Uncovering the True Emotions of Our Users',  
                               topicLink: 'https://uxpamagazine.org/the-future-of-ux-research/' },
                    {phaseId: 1, topicName: 'The Rainbow Spreadsheet: A Collaborative Lean UX Research Tool',  
                               topicLink: 'https://www.smashingmagazine.com/2013/04/rainbow-spreadsheet-collaborative-ux-research-tool/' },
                    {phaseId: 1, topicName: 'Three misunderstandings about design research',  
                               topicLink: 'https://medium.design/three-misunderstandings-about-design-research-a3d6f74b1ee3' },
                    {phaseId: 1, topicName: 'Fast UX Research: An Easier Way To Engage Stakeholders And Speed Up The Research Process',
                               topicLink: 'https://www.smashingmagazine.com/2018/05/fast-ux-research/' },
                    {phaseId: 1, topicName: '10 Most Viral Topics in the World of UX Design',  
                               topicLink: 'https://medium.com/@apat.bharat/10-most-viral-topics-in-the-world-of-ux-design-c9a1ba9f6050' },
                    {phaseId: 1, topicName: 'The Ultimate Guide To A/B Testing',  
                               topicLink: 'https://www.smashingmagazine.com/2010/06/the-ultimate-guide-to-a-b-testing/' }
                ],{ignoreDuplicates : true}
                );
            });
          }
    });
    db.renaissancePhase.findAll({attributes: ['id']})
    .then(renaisPhase => {
          if(renaisPhase.length === 0){
            sequelize.sync().then(() => {
              db.renaissancePhase.bulkCreate(
                [
                    { phaseTitle: 'Mobility' },
                    { phaseTitle: 'FED' },
                    { phaseTitle: 'Digital E-Commerce Platform' }
                ],{ignoreDuplicates : true}
                );
            });
          }
    });
}, 4000)