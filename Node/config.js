require('dotenv').config();

let environment = process.env.NODE_ENV;
let config = {};
if (environment == 1) {
  config = {
    PORT: 3000,
    HTTPSPORT: 443,
    TANENT: '02aa9fc1-18bc-4798-a020-e01c854dd434',
    APPID: '6a09f0e8-559b-4189-ab90-b8c75059fa2b',
    DB_HOST: 'localhost',
    DB_USER: 'root',
    DB_PASS: 'f@s4L@n3',
    DB_NAME: 'fastlane',
    isUAT:false,
    PYTHON:'http://127.0.0.1:6000'
  }
} else if(environment == 2) {
  config = {
    PORT: 3000,
    HTTPSPORT: 8443,
    TANENT: '02aa9fc1-18bc-4798-a020-e01c854dd434',
    APPID: 'bebdab75-b028-4e68-b938-ac80dd3c63bf',
    DB_HOST: 'localhost',
    DB_USER: 'root',
    DB_PASS: 'root123',
    DB_NAME: 'fastlaneuat',
    isUAT : true,
    PYTHON:'http://127.0.0.1:6000'
  }
} else if(environment == 3) {
  config = {
    PORT: 5000,
    HTTPSPORT: 443,
    TANENT: '02aa9fc1-18bc-4798-a020-e01c854dd434',
    APPID: 'd93f2512-72df-461c-b49a-8a00619c9c30',
    DB_HOST: 'localhost',
    DB_USER: 'fastlane',
    DB_PASS: 'f@s4L@n3',
    DB_NAME: 'fastlane',
    isUAT:false,
    PYTHON:'http://127.0.0.1:6000'
  }
}
module.exports = config;

