const jwt = require('jsonwebtoken');
const config = require('../config');
const db = require('../models');
const moment =  require('moment');
const axios = require('axios');

const conf = {
    JWK_URI: `https://login.microsoftonline.com/${config.TANENT}/discovery/keys?appid=${config.APPID}`,
    ISS: `https://login.microsoftonline.com/${config.TANENT}/v2.0`,
    AUD: config.APPID
};

let key1,key2;
if(config.isUAT)
{

    key1 = "-----BEGIN CERTIFICATE-----\nMIIDBTCCAe2gAwIBAgIQNmD9my1yu4hPh6X2ySAQMjANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTIwMTExNTE4NTMyMFoXDTI1MTExNDE4NTMyMFowLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANsupWmc1zj8BqTDoYdEXGavgp4Ndh0b+BB0/2OsOVjrjVmccxhYxe+6n0yraf4sxSBpa9CMCZ2ybA6pk3wF3QzLH0V6VhOg2eg9LOPXKDYLvpxBU+1HZLsn1J3z31PJWSy88QeHz6dAqVGSGnGVm/QovN3ZKkushJKaX7X/G2TltQps+kkLgW2YA8q5u4SgSvDcZksSb56lDegg3TqcSXS0ryKJ/BFDHANFRITcdGnIM2Zo3nWSRBljus7PI60UTpF9P34aY1tQT+J6uTiOiaVzEYFei7qgnZoPbN0L8NpNu22mve6cQCaazCsAZx0i3G645JXURGYEPTcHmGy1/iUCAwEAAaMhMB8wHQYDVR0OBBYEFEhEsQJa9KyDIqzLnHtB0fPwqAv2MA0GCSqGSIb3DQEBCwUAA4IBAQAl4wkCQOD4UCaiuxVCFzs8PXGxhLJJseuN4TbMxvmmzgBaRPeazEmLqvqUW/VxCAWHiCzK6nVXThpAk9SPxN37HnlLt/wzEfQTapVxTzKj5PTzsEm582dDyw+0WDdNtb37a1BoAEpv6J4zVHTQLprfx4ccCQq4m3v6IDuKHrT/U0TlQz0negsUlDr4iwr3lPCdpnbLbgki8JnP5a/Kh/XMs5qXsJRF2IHqEF+yTupEN+fpNvTItfmGAfoGm+6AIBWhH+SEe6sshDpW7rngVJoLAxCrqDlzrXae1pq1pyvfbeMtHkjY7yl74wdFcDD/J0gOA2u30X/2Ld+5AglZIlBm\n-----END CERTIFICATE-----";
    key2 = "-----BEGIN CERTIFICATE-----\nMIIDBTCCAe2gAwIBAgIQN33ROaIJ6bJBWDCxtmJEbjANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTIwMTIyMTIwNTAxN1oXDTI1MTIyMDIwNTAxN1owLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKGiy0/YZHEo9rRn2bI27u189Sq7NKhInFz5hLCSjgUB2rmf5ETNR3RJIDiW1M51LKROsTrjkl45cxK6gcVwLuEgr3L1TgmBtr/Rt/riKyxeXbLQ9LGBwaNVaJrSscxfdFbJa5J+qzUIFBiFoL7kE8ZtbkZJWBTxHEyEcNC52JJ8ydOhgvZYykete8AAVa2TZAbg4ECo9+6nMsaGsSBncRHJlRWVycq8Q4HV4faMEZmZ+iyCZRo2fZufXpn7sJwZ7CEBuw4qycHvUl6y153sUUFqsswnZGGjqpKSq7I7sVI9vjB199RarHaSSbDgL2FxjmASiUY4RqxnTjVa2XVHUwUCAwEAAaMhMB8wHQYDVR0OBBYEFI5mN5ftHloEDVNoIa8sQs7kJAeTMA0GCSqGSIb3DQEBCwUAA4IBAQBnaGnojxNgnV4+TCPZ9br4ox1nRn9tzY8b5pwKTW2McJTe0yEvrHyaItK8KbmeKJOBvASf+QwHkp+F2BAXzRiTl4Z+gNFQULPzsQWpmKlz6fIWhc7ksgpTkMK6AaTbwWYTfmpKnQw/KJm/6rboLDWYyKFpQcStu67RZ+aRvQz68Ev2ga5JsXlcOJ3gP/lE5WC1S0rjfabzdMOGP8qZQhXk4wBOgtFBaisDnbjV5pcIrjRPlhoCxvKgC/290nZ9/DLBH3TbHk8xwHXeBAnAjyAqOZij92uksAv7ZLq4MODcnQshVINXwsYshG1pQqOLwMertNaY5WtrubMRku44Dw7R\n-----END CERTIFICATE-----";    
}
else{
    key1 = "-----BEGIN CERTIFICATE-----\nMIIDBTCCAe2gAwIBAgIQNmD9my1yu4hPh6X2ySAQMjANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTIwMTExNTE4NTMyMFoXDTI1MTExNDE4NTMyMFowLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANsupWmc1zj8BqTDoYdEXGavgp4Ndh0b+BB0/2OsOVjrjVmccxhYxe+6n0yraf4sxSBpa9CMCZ2ybA6pk3wF3QzLH0V6VhOg2eg9LOPXKDYLvpxBU+1HZLsn1J3z31PJWSy88QeHz6dAqVGSGnGVm/QovN3ZKkushJKaX7X/G2TltQps+kkLgW2YA8q5u4SgSvDcZksSb56lDegg3TqcSXS0ryKJ/BFDHANFRITcdGnIM2Zo3nWSRBljus7PI60UTpF9P34aY1tQT+J6uTiOiaVzEYFei7qgnZoPbN0L8NpNu22mve6cQCaazCsAZx0i3G645JXURGYEPTcHmGy1/iUCAwEAAaMhMB8wHQYDVR0OBBYEFEhEsQJa9KyDIqzLnHtB0fPwqAv2MA0GCSqGSIb3DQEBCwUAA4IBAQAl4wkCQOD4UCaiuxVCFzs8PXGxhLJJseuN4TbMxvmmzgBaRPeazEmLqvqUW/VxCAWHiCzK6nVXThpAk9SPxN37HnlLt/wzEfQTapVxTzKj5PTzsEm582dDyw+0WDdNtb37a1BoAEpv6J4zVHTQLprfx4ccCQq4m3v6IDuKHrT/U0TlQz0negsUlDr4iwr3lPCdpnbLbgki8JnP5a/Kh/XMs5qXsJRF2IHqEF+yTupEN+fpNvTItfmGAfoGm+6AIBWhH+SEe6sshDpW7rngVJoLAxCrqDlzrXae1pq1pyvfbeMtHkjY7yl74wdFcDD/J0gOA2u30X/2Ld+5AglZIlBm\n-----END CERTIFICATE-----";
    key2 = "-----BEGIN CERTIFICATE-----\nMIIDBTCCAe2gAwIBAgIQN33ROaIJ6bJBWDCxtmJEbjANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTIwMTIyMTIwNTAxN1oXDTI1MTIyMDIwNTAxN1owLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKGiy0/YZHEo9rRn2bI27u189Sq7NKhInFz5hLCSjgUB2rmf5ETNR3RJIDiW1M51LKROsTrjkl45cxK6gcVwLuEgr3L1TgmBtr/Rt/riKyxeXbLQ9LGBwaNVaJrSscxfdFbJa5J+qzUIFBiFoL7kE8ZtbkZJWBTxHEyEcNC52JJ8ydOhgvZYykete8AAVa2TZAbg4ECo9+6nMsaGsSBncRHJlRWVycq8Q4HV4faMEZmZ+iyCZRo2fZufXpn7sJwZ7CEBuw4qycHvUl6y153sUUFqsswnZGGjqpKSq7I7sVI9vjB199RarHaSSbDgL2FxjmASiUY4RqxnTjVa2XVHUwUCAwEAAaMhMB8wHQYDVR0OBBYEFI5mN5ftHloEDVNoIa8sQs7kJAeTMA0GCSqGSIb3DQEBCwUAA4IBAQBnaGnojxNgnV4+TCPZ9br4ox1nRn9tzY8b5pwKTW2McJTe0yEvrHyaItK8KbmeKJOBvASf+QwHkp+F2BAXzRiTl4Z+gNFQULPzsQWpmKlz6fIWhc7ksgpTkMK6AaTbwWYTfmpKnQw/KJm/6rboLDWYyKFpQcStu67RZ+aRvQz68Ev2ga5JsXlcOJ3gP/lE5WC1S0rjfabzdMOGP8qZQhXk4wBOgtFBaisDnbjV5pcIrjRPlhoCxvKgC/290nZ9/DLBH3TbHk8xwHXeBAnAjyAqOZij92uksAv7ZLq4MODcnQshVINXwsYshG1pQqOLwMertNaY5WtrubMRku44Dw7R\n-----END CERTIFICATE-----";
}

const verifyToken = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(403).send({ status: false, message: 'No token provided' });
    }
    jwt.verify(token, key1, { algorithms: ['RS256'] }, (err, decoded) => {
       // jwt.verify(token, "https://login.microsoftonline.com/02aa9fc1-18bc-4798-a020-e01c854dd434/discovery/keys", { algorithms: ['RS256'] }, (err, decoded) => {
        if (err) {
            console.log(err);
            // return res.status(401).send({ status: false, message: 'Unauthorized!' });
            jwt.verify(token, key2, { algorithms: ['RS256'] }, (err, decoded) => {
                if (err) {
                    console.log(err);
                    return res.status(401).send({ status: false, message: 'Unauthorized!' });
                } else {
                    req.user = decoded.name;
                    req.email = decoded.unique_name;
                    next();
                }
            });
        } else {
            req.user = decoded.name;
            req.email = decoded.unique_name;
            next();
        }
    });
};
/*async function fetchAuthKey(){
    let data = [];
    await axios.get(conf.JWK_URI).then(response => {
        return response.data.keys.map( async (key) => {
            data.push('-----BEGIN CERTIFICATE-----\n'+key.x5c[0]+'\n-----END CERTIFICATE-----');
            return data;
        });
    })
    .catch(error => {
        console.log(error);
    });
    return data;
}

const verifyToken = async (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(403).send({ status: false, message: 'No token provided' });
    }

    let keyData = await fetchAuthKey();
    for (var x = 0; x < keyData.length; x++) {
        jwt.verify(token, keyData[x], { algorithms: ['RS256'] }, (err, decoded) => {
            if (err) {
                console.log(err);
               // return res.status(401).send({ status: false, message: 'Unauthorized!' });
            } else {
                req.user = decoded.name;
                req.email = decoded.unique_name;
                next();
                keyData = [];
            }
        });
    };
};*/

manageVisitRecord = function(name, email){
    let currentDate = moment().format('YYYY-MM-DD');

    db.siteVisits.findAll({
        where : {
            email: email,
            createDate: currentDate
        }
    })
    .then(data => {
        if (data.length == 0) {
            db.siteVisits.create({ name: name, email: email, createDate: currentDate })
            .then(function(user) {
                console.log(user.toJSON());
            })
            .catch(function(err) {
                console.log(err);
            });
        }
    }).catch(err => {
        console.log(err);
    })
}

const isAdmin = (req, res, next) => {
    let email = req.email;
    manageVisitRecord(req.user, req.email);
    db.user.findAll({
        attributes: ['role'],
        where: {
            email: email
        }
    }).then(data => {
        if (data.length > 0) {
            let role = Number(data[0].role);
            if (role == 0) {
                req.isAdmin = true;
                next();
            } else {
                req.isAdmin = false;
                next();
                // res.send('Not Admmin');
            }
        } else {
            req.isAdmin = false;
            next();
            // res.send('Not Admin');
            // return res.status(401).send({ status: 401, message: 'User is Not Valid!' });
        }
    }).catch(err => {
        console.log(err);
    })
};

const checkAdmin = (req, res) => {
    if (req.isAdmin == true) {
        res.json({
            status: true,
            name: req.user,
            email: req.email
        });
        // res.send(true);
    } else {
        res.json({
            status: false,
            name: req.user,
            email: req.email
        });
    }
}

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    checkAdmin: checkAdmin
};
module.exports = authJwt;
