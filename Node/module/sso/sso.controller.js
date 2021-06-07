const AuthenticationContext = require('adal-node').AuthenticationContext;
const crypto = require('crypto');
const events = require('events');
const eventEmit = new events.EventEmitter();

const config = require('../../config');

const clientId = '6a09f0e8-559b-4189-ab90-b8c75059fa2b';
const clientSecret = 'T16iVu3P-Tfwk1-uqTr_IV~777NW1uO0r.'
const authorityHostUrl = 'https://login.windows.net';
const tenant = '02aa9fc1-18bc-4798-a020-e01c854dd434';
const authorityUrl = authorityHostUrl + '/' + tenant;
const redirectUri = 'http://localhost:' + config.PORT + '/api/sso/getToken';
const resource = '00000002-0000-0000-c000-000000000000';
const templateAuthzUrl = authorityUrl + '/oauth2/authorize?response_type=code&client_id=' + clientId + '&redirect_uri=' + redirectUri + '&state=<state>&resource=' + resource;

function createAuthorizationUrl(state) {
  return templateAuthzUrl.replace('<state>', state);
}

let sso = {
  getAuthUrl: function (req, res) {
    crypto.randomBytes(48, function (ex, buf) {
      const token = buf.toString('base64').replace(/\//g, '_').replace(/\+/g, '-');

      res.cookie('authstate', token, { httpOnly: true });
      const authorizationUrl = createAuthorizationUrl(token);
      // res.redirect(authorizationUrl);
      res.json({
        status: 200,
        url: authorizationUrl
      })
    });
  },

  authStatus: function (req, res) {
    eventEmit.on('tokenData', (data) => {
      // console.log(data);
      res.send(data);
    })
  },

  getToken: function (req, res) {
    // if (req.cookies.authstate !== req.query.state) {
    //   res.send('error: state does not match');
    // }
    console.log("SSO Called");
    const authenticationContext = new AuthenticationContext(authorityUrl);
    authenticationContext.acquireTokenWithAuthorizationCode(
      req.query.code,
      redirectUri,
      resource,
      clientId,
      clientSecret,
      function (err, response) {
        if (err) {
          let errorMessage = 'error: ' + err.message + '\n';
          res.send(errorMessage);
        }else{
          // res.send(response);
          eventEmit.emit('tokenData', response);

        }
        // errorMessage += 'response: ' + JSON.stringify(response);
      }
    );
  }
}

module.exports = sso;