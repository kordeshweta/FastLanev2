const db           = require('../models');
const _            = require('underscore');
const Promise      = require('bluebird');
const Sequelize    = require('sequelize');
const UxBoard      = db.uxBoard;
const UxBoArtefact = db.uxBoardArtefacts;
const Op           = Sequelize.Op;


const getIsInBoard = async (id, user) => {
    return await UxBoard.findAll({ attributes: [],
    where: Sequelize.and( {boardStatus: 'Yes' }, Sequelize.or({ addedBy: user }, { collaborators: {[Op.like]: '%'+user+'%'} })),
    include: [{
        model: UxBoArtefact, attributes: ['boardId', 'artefactId'], where:{artefactId:id}
    }],
    group: ['UxBoard.id'],
    raw: true })
    .then(item => {
        return (item[0] && item[0]['uxBoardArtefacts.boardId'] != null) ? 'hide' : 'show'; 
    });
}


exports.getAllFavourites = async (req, res) => {
    const user      = req.email;
    const queryId   = (req.body.queryId && req.body.queryId!='' && req.body.queryId!=null ) ? req.body.queryId : '';
    const queryType = (req.body.queryType && req.body.queryType!='' && req.body.queryType!=null)  ? req.body.queryType : '';
    const domain    = (req.body.domain && req.body.domain!='' && req.body.domain!=null)  ? req.body.domain : '';
    const format    = (req.body.format && req.body.format!='' && req.body.format!=null)  ? req.body.format : '';
    const platform  = (req.body.platform && req.body.platform!='' && req.body.platform!=null)  ? req.body.platform : '';
    let queryCondition = '',
        domainCondition = '',
        formatCondition = '', 
        platformCondition = '';

    if(queryId !='' && queryType!== ''){
        queryCondition = ` AND ua.queryId = ${queryId} AND ua.queryType= '${queryType}'`;
    }
    if(domain!=''){
        domainCondition = ` AND ua.artefactDomains REGEXP '${domain}'`
    }
    if(format!=''){
        formatCondition = ` AND ua.artefactFormats REGEXP '${format}'`
    }
    if(platform!=''){
        platformCondition = ` AND ua.artefactPlatforms REGEXP '${platform}'`
    }

    var queryString = `SELECT uf.artefactId, ua.artefactName, ua.artefactDomains, ua.artefactFormats, ua.artefactPlatforms, ua.artefactDesc, 
                        ua.artefactDownloads, ua.artefactLikes, ua.createdAt, ua.artefactStatus
                        FROM uxfavourite uf, uxartefacts ua
                        WHERE uf.artefactId = ua.id AND ua.artefactStatus = 'Yes' AND uf.user = '${user}' ${queryCondition} ${domainCondition} ${formatCondition} ${platformCondition}  ORDER BY uf.createdAt DESC`;
    Promise.map(db.sequelize.query(queryString, { type: Sequelize.QueryTypes.SELECT }),  async function(item) {
        let isInBoard =  await getIsInBoard(item.artefactId, user);
        return Promise.all([
            db.sequelize.query('SELECT * FROM uxuploads WHERE artefactId = '+item.artefactId,
            { type: Sequelize.QueryTypes.SELECT }).then(function(uploads) {
               
                let fileList = _.groupBy(uploads, 'fileType');
                item.files  = fileList.file;
                item.images = fileList.image;
            })
        ]).then(function() {
            let favourList = [];
            //favourList.push({
            favourList = ({
                'artefactId': item.artefactId,
                'name'      : item.artefactName,
                'desc'      : item.artefactDesc,
                'domain'    : item.artefactDomains, 
                'format'    : item.artefactFormats,
                'platform'  : item.artefactPlatforms,
                'downloads' : item.artefactDownloads,
                'likes'     : item.artefactLikes,
                'files'     : item.files,
                'images'    : item.images,
                'showFav'   : isInBoard,
                'createdAt' : item.createdAt,
                'status'    : item.artefactStatus
            });
            return favourList;
            
        });
    }).then(function(favourites) {
         return res.send({ status: true, data: favourites });
    }).catch(function(err) {
        const errMsg = 'Some error occurred while retrieving Artefacts.';
        return res.status(500).send({ status: false, message: err.message || errMsg });
    });
};
