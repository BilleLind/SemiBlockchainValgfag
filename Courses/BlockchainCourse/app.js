const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const Blockchain = require('./blockchain');
const PubSub = require('./pubsub');

const app = express();
const blockchain = new Blockchain();
const pubsub = new PubSub( {blockchain });

const DEFAULT_PORT = 3000;
const ROOT_NODE_ADDRESS = `https://localhost:${DEFAULT_PORT}`;

/* how to do body?
const syncChains = () => { // just gonna do it with normal app.get. with try catch or axios :https://www.npmjs.com/package/axios
    axios.request({ url :`${ROOT_NODE_ADDRESS}/api/blocks`})


   .then(function(response){
        const rootChain = JSON.parse
    })
    .catch(function(error) {
        console.log(error);
    })
}; */


const syncChains = () => {
    try {
        app.get({url: `${ROOT_NODE_ADDRESS}/api/blocks`}, (res, req) => {
        const rootChain = JSON.parse(req.body);

        console.log('replace chain on a sync with:', rootChain);

        blockchain.replaceChain(rootChain);
     });
    } catch (error){
        console.log(error);
    }
}


let PEER_PORT;
if(process.env.GENERATE_PEER_PORT === 'true') {
    PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random()+1000)
}
const port = PEER_PORT || DEFAULT_PORT;

app.set('port', port);
setTimeout(() => {
    pubsub.broadcastChain();
}, 1000);

//body-parser
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.get('/api/blocks', (req, res) =>{
    res.status(200).json( blockchain.chain);
});

app.post('/api/mine', (req, res) => {
    const { data } = req.body;

    blockchain.addBlock({ data });

    pubsub.broadcastChain();

    res.redirect('/api/blocks');
});
module.exports = app;