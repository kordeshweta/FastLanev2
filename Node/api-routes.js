const express = require('express');
const sequelize = require('sequelize');

// Middleware imports
const { authJwt } = require('./middleware');
const { handleUpload } = require('./middleware');
const { validator } = require('./middleware');

// Controller imports
const Auth          = require('./controllers/auth.controller');
const Component     = require('./controllers/component.controller');
const BestPractice  = require('./controllers/bestPractice.controller');
const Solution      = require('./controllers/solution.controller');
const File          = require('./controllers/file.controller');
const UxPhase       = require('./controllers/uxPhase.controller');
const UxCategory    = require('./controllers/uxCategory.controller');
const UxSubCategory = require('./controllers/uxSubCategory.controller');
const UxArtefacts   = require('./controllers/uxArtefacts.controller');
const UxUpload      = require('./controllers/uxUpload.controller');
const UxReview      = require('./controllers/uxReview.controller');
const UxFavourite   = require('./controllers/uxFavourite.controller');
const UxBoard       = require('./controllers/uxBoard.controller');
const Odfd          = require('./controllers/odfd.controller');
const Renaissance   = require('./controllers/renaissance.controller');
const Assessment   = require('./controllers/assessment.controller');
// const Sso = require('./module/sso/sso.controller');
// const security = require('./module/security/controller');

const router = express.Router();

// Authentication routes
// router.post('/auth/login', validator.login, Auth.signin);
// router.post('/auth/register', validator.register, Auth.signup);
router.get('/isAdmin', authJwt.verifyToken, authJwt.isAdmin, authJwt.checkAdmin);

// Copmponent routes
router.get('/components/', authJwt.verifyToken, Component.findAll);
router.get('/components/:id', authJwt.verifyToken, Component.findOne);
router.post('/components/add', [authJwt.verifyToken, authJwt.isAdmin, validator.entityFields], Component.create);
router.put('/components/:id', [authJwt.verifyToken, authJwt.isAdmin, validator.entityFields], Component.update);
router.delete('/components/:id', authJwt.verifyToken, authJwt.isAdmin, Component.delete);

// Best Practice routes
router.get('/bestPractices/', authJwt.verifyToken, BestPractice.findAll);
router.get('/bestPractices/:id', authJwt.verifyToken, BestPractice.findOne);
router.post('/bestPractices/add', [authJwt.verifyToken, authJwt.isAdmin, validator.entityFields], BestPractice.create);
router.put('/bestPractices/:id', [authJwt.verifyToken, authJwt.isAdmin, validator.entityFields], BestPractice.update);
router.delete('/bestPractices/:id', authJwt.verifyToken, authJwt.isAdmin, BestPractice.delete);

// Solution routes
router.get('/solutions/', authJwt.verifyToken, Solution.findAll);
router.get('/solutions/:id', authJwt.verifyToken, Solution.findOne);
router.post('/solutions/add', [authJwt.verifyToken, authJwt.isAdmin, validator.entityFields], Solution.create);
router.put('/solutions/:id', [authJwt.verifyToken, authJwt.isAdmin, validator.entityFields], Solution.update);
router.delete('/solutions/:id', authJwt.verifyToken, authJwt.isAdmin, Solution.delete);

// Images routes
router.post('/uploads/image', [authJwt.verifyToken, authJwt.isAdmin, handleUpload.image, validator.image], File.uploadImage);
router.get('/download/image/:id', File.downloadImage);
router.put('/update/image/:id', [authJwt.verifyToken, authJwt.isAdmin, handleUpload.image], File.updateImage);
router.delete('/delete/image/:id', authJwt.verifyToken, authJwt.isAdmin, File.deleteImage);

// Files routes
router.post('/uploads/file', [authJwt.verifyToken, authJwt.isAdmin, handleUpload.file, validator.file], File.uploadFile);
//router.get('/download/file/:id', authJwt.verifyToken, File.downloadFile);
router.post('/download/file/:type/:id', authJwt.verifyToken, File.downloadFile);
router.get('/downloadDetail/:type/:id', authJwt.verifyToken, File.getDownloadDetails);
router.put('/update/file/:id', [authJwt.verifyToken, authJwt.isAdmin, handleUpload.file], File.updateFile);
router.delete('/delete/file/:id', authJwt.verifyToken, authJwt.isAdmin, File.deleteFile);
router.get('/getRepoDownloads', [authJwt.verifyToken, authJwt.isAdmin], File.getAllRepoDownloads);

// UX Phase routes (To Do Add condition to fetch domain based on the domain)
router.get('/uxPhase/:id', authJwt.verifyToken, UxPhase.getAllPhase);
router.get('/uxPhase/relatedTopic/:id', authJwt.verifyToken, UxPhase.getRelatedTopics);
router.post('/uxPhase/addRelatedTopic', authJwt.verifyToken, UxPhase.addRelatedTopics);

// UX Category routes
router.get('/uxCategories/phase/:id', authJwt.verifyToken, UxCategory.getAllCategories);
router.get('/uxCategory/:id', authJwt.verifyToken, UxCategory.getCategorie);
router.post('/uxCategory/add', [authJwt.verifyToken, authJwt.isAdmin], UxCategory.addCategory);
router.put('/uxCategory/:id', [authJwt.verifyToken, authJwt.isAdmin], UxCategory.updateCategory);
router.post('/uxCategory/delete', [authJwt.verifyToken, authJwt.isAdmin], UxCategory.deleteCategory);

// UX Sub Category routes
router.get('/search/:keyword', authJwt.verifyToken, UxSubCategory.getSearchResult);
router.get('/uxSubCategories/category/:id', authJwt.verifyToken, UxSubCategory.getAllSubCategories);
router.get('/uxSubCategory/:id', authJwt.verifyToken, UxSubCategory.getSubCategorie);
router.post('/uxSubCategory/add', [authJwt.verifyToken, authJwt.isAdmin], UxSubCategory.addSubCategory);
router.post('/uxSubCategory/addUpdateImage', [authJwt.verifyToken, authJwt.isAdmin], UxSubCategory.addUpdateSubCategoryImage);
router.get('/uxSubCategory/downloadImage/:id', UxSubCategory.downloadSubCatImage);
router.put('/uxSubCategory/:id', [authJwt.verifyToken, authJwt.isAdmin], UxSubCategory.updateSubCategory);
router.post('/uxSubCategory/delete', [authJwt.verifyToken, authJwt.isAdmin], UxSubCategory.deleteSubCategory);

// UX Artefacts routes
router.post('/allUxArtefacts', authJwt.verifyToken, UxArtefacts.getAllArtefacts);
router.post('/uxArtefact/', authJwt.verifyToken, UxArtefacts.getArtefact);
router.post('/uxArtefacts/add', [authJwt.verifyToken, authJwt.isAdmin], UxArtefacts.addArtefact);
router.put('/uxArtefacts/:id', [authJwt.verifyToken, authJwt.isAdmin], UxArtefacts.updateArtefact);
router.post('/uxArtefacts/delete', [authJwt.verifyToken, authJwt.isAdmin], UxArtefacts.deleteArtefact);
router.post('/uxArtefact/download', authJwt.verifyToken, UxArtefacts.downloadArtefact);
router.post('/uxArtefact/downloadByFormat', authJwt.verifyToken, UxArtefacts.downloadArtefactByFormat);
router.post('/uxArtefacts/addFavourite', authJwt.verifyToken, UxArtefacts.addLikes);
router.post('/uxArtefacts/removeFavourite', authJwt.verifyToken, UxArtefacts.removeLikes);

// UX Upload and Download routes
router.post('/uxUpload/add', [authJwt.verifyToken, authJwt.isAdmin], UxUpload.addFiles);
router.post('/uxUpload/delete', [authJwt.verifyToken, authJwt.isAdmin], UxUpload.deleteFiles);
router.get('/uxUpload/download/image/:id', UxUpload.downloadImage);
router.get('/uxUpload/download/file/:id', authJwt.verifyToken, UxUpload.downloadFile);

// UX Review routes
router.get('/uxReview/artefact/:id', authJwt.verifyToken, UxReview.getAllReviews);
router.post('/uxReview/add', [authJwt.verifyToken, authJwt.isAdmin], UxReview.addReview);


// UX Favourites routes
router.post('/uxFavourites/',  authJwt.verifyToken, UxFavourite.getAllFavourites);

// UX Boards routes
router.post('/uxBoards',  authJwt.verifyToken, UxBoard.showBoards);
router.get('/uxBoards/artefacts/:id', authJwt.verifyToken, UxBoard.getBoardArtefacts);
router.post('/uxBoardList/',  authJwt.verifyToken, UxBoard.getBoardList); 
router.post('/uxBoard/add',  [authJwt.verifyToken, authJwt.isAdmin], UxBoard.addBoard);
router.post('/uxBoard/addtoBoard',  authJwt.verifyToken, UxBoard.addToBoard);
router.post('/uxBoard/downloadFiles',  authJwt.verifyToken, UxBoard.downloadArtefactFiles);

//Site Visit routes
router.get('/siteVisit', authJwt.verifyToken, Auth.visitCount);

router.get('/inauguration', authJwt.verifyToken, Auth.inauguration);
router.get('/revertInauguration', authJwt.verifyToken, Auth.revertInauguration);

//odfd routes
router.get('/odfdData', authJwt.verifyToken, Odfd.getData)
router.get('/odfdcheckboxItems', authJwt.verifyToken, Odfd.checkboxItems)
router.post('/odfdfiledata', authJwt.verifyToken, Odfd.filedata)
router.post('/odfdfindAndHighlight', authJwt.verifyToken, Odfd.findAndHighlight)
router.post('/odfdfindAndHighlight1', authJwt.verifyToken, Odfd.findAndHighlight1)

//Renaissance routes
router.get('/getRenaisPhase', authJwt.verifyToken, Renaissance.getAllRenaisPhases);
router.post('/renaisColumns/add', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.addRenaisColumns);
router.post('/renaisCategory/add', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.addRenaisCategory);
router.post('/renaisSubCategory/add', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.addRenaisSubCategory);
router.post('/renaisQuestions/add', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.addRenaisQuestions);
router.post('/renaisGuidelines/add', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.addRenaisGuidelines);
router.post('/renaisAssessment/add', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.addRenaisAssessment);
router.post('/renaisAnswer/add', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.addRenaisAnswer);
router.post('/renaisGeneralQuestion/add', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.addRenaisGeneralQuestion);
router.post('/renaisInstruction/add', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.addRenaisInstruction);

router.get('/renaisColumnsList/:id', authJwt.verifyToken, Renaissance.getRenaisColumns);
router.get('/renaisCategotyList/:id', authJwt.verifyToken, Renaissance.getRenaisCategoty);
router.get('/renaisSubCategotyList/:id', authJwt.verifyToken, Renaissance.getRenaisSubCategoty);
router.get('/renaisQuestionList/:type/:id', authJwt.verifyToken, Renaissance.getRenaisQuestion);
router.get('/renaisGeneralQuestionList/:id', authJwt.verifyToken, Renaissance.getRenaisGeneralQuestion);
router.get('/renaisInstructionList/:id', authJwt.verifyToken, Renaissance.getRenaisInstruction);
router.get('/renaisGuidelinesList/:phaseId/:id', authJwt.verifyToken, Renaissance.getRenaisGuidelines);
router.get('/renaisAllAssessmentList/:role/:id', authJwt.verifyToken, Renaissance.getRenaisAllAssessment);
router.get('/renaisHistoryList/:id', authJwt.verifyToken, Renaissance.getRenaisHistory);
router.get('/renaisAnswerList/:id', authJwt.verifyToken, Renaissance.getRenaisAnswers);

router.put('/renaisColumns/:id', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.updateRenaisColumns);
router.put('/renaisCategory/:id', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.updateRenaisCategory);
router.put('/renaisSubCategory/:id', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.updateRenaisSubCategory);
router.put('/renaisQuestions/:id', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.updateRenaisQuestions);
router.put('/renaisGuidelines/:id', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.updateRenaisGuidelines);
router.put('/renaisAnswer/:id', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.updateRenaisAnswer);
router.put('/renaisGeneralQuestion/:id', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.updateRenaisGeneralQuestion);
router.put('/renaisInstruction/:id', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.updateRenaisInstruction);

router.post('/renaisAssessment/delete', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.deleteAssessment);
router.post('/renaisColumns/delete', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.deleteColumns);
router.post('/renaisCategory/delete', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.deleteCategory);
router.post('/renaisSubCategory/delete', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.deleteSubCategory);
router.post('/renaisQuestions/delete', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.deleteQuestions);
router.post('/renaisGuidelines/delete', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.deleteGuidelines);
router.post('/renaisGeneralQuestion/delete', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.deleteGeneralQuestion);
router.post('/renaisInstruction/delete', [authJwt.verifyToken, authJwt.isAdmin], Renaissance.deleteInstruction);

router.get('/assessmentQuestionList/:id', authJwt.verifyToken, Assessment.getAssessmentQuestions);

module.exports = router;
