const fs = require('fs');
const http = require('http');
const https = require('https');
// const helmet = require("helmet");
const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
// const authJwt = require('./middleware/authJwt');

const db = require('./models');
const apiRoutes = require('./api-routes');
const { handleUpload } = require('./middleware');
const config = require('./config');

const app = express();
const uploadLimit = 500; // In mb

let privateKey, certificate;
if(config.isUAT)
{
   privateKey = fs.readFileSync(__dirname + '/Security/fastlaneuat.key', 'utf8');
   certificate = fs.readFileSync(__dirname + '/Security/fastlaneuat.pem', 'utf8');
}
else{
  privateKey = fs.readFileSync(__dirname + '/Security/server.key', 'utf8');
  certificate = fs.readFileSync(__dirname + '/Security/fastlane.pem', 'utf8');
}
const credentials = { key: privateKey, cert: certificate };

// DB initialization
db.sequelize.sync();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors());
// app.use(helmet());

app.options('*', cors(corsOptions));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.options('*', cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use(function applyXFrame(req,res,next)
{
  res.set('X-Frame-Options','DENY');
  next();
});
 
app.use(function applyCSP(req,res,next)
{
  res.set('Content-Security-Policy','frame-ancestors:none');
  next();
});

// File upload middleware
app.use(fileUpload(
  handleUpload.options(uploadLimit)
));

// Backend Web Services Routes
app.use('/api', apiRoutes);

// Serve static content from the frontend dist
app.use(express.static(path.join(__dirname, 'public', 'dist')));

// Serve the Frontend routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Angular/dist/Fastlane/index.html'));
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(config.PORT, (res) => {
  console.log('Http Server is running ' + config.PORT)
});
httpsServer.listen(config.HTTPSPORT, (res) => {
  console.log('Https Server is running ' + config.HTTPSPORT)
});
