const axios = require('axios');
const config = require('../config');


exports.getData = async (req, res) => {
    let data = {};
    await axios.get(`${config.PYTHON}`).then(response => {
        data = response.data;
        return data;
    })
    .catch(error => {
        res.status(500).send({  message: error });
    });
    res.send(data);
}

exports.checkboxItems = async (req, res) => {
    let data = {};
    // console.log(res)
    await axios.get(`${config.PYTHON}/checkboxItems`).then(response => {
        data = response.data;
        return data;
    })
    .catch(error => {
        res.status(500).send({  message: error });
    });
    res.send(data);
}

exports.filedata = async (req, res) => {
    let data = {};
    // console.log(req.body)
    await axios.post(`${config.PYTHON}/filedata`, req.body).then(response => {
        data = response.data;
        return data;
    })
    .catch(error => {
        res.status(500).send({  message: error });
    });
    res.send(data);
}

exports.findAndHighlight = async (req, res) => {
    let data = {};
    // console.log(req.body)
    await axios.post(`${config.PYTHON}/findAndHighlight`, req.body).then(response => {
        data = response.data;
        return data;
    })
    .catch(error => {
        res.status(500).send({  message: error });
    });
    res.send(data);
}

exports.findAndHighlight1 = async (req, res) => {
    let data = {};
    // console.log(req.body)
    await axios.post(`${config.PYTHON}/findAndHighlight1`, req.body).then(response => {
        data = response.data;
        return data;
    })
    .catch(error => {
        res.status(500).send({  message: error });
    });
    res.send(data);
}