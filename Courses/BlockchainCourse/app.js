const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const app = express();
const blockchain = new Blockchain();

//body-parser
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.get('/api/blocks', (req, res) =>{
    res.status(200).json( blockchain.chain);
});

app.post('/api/mine', (req, res) => {
    const { data } = req.body;

    blockchain.addBlock({ data });

    res.redirect('/api/blocks');
});
module.exports = app;
