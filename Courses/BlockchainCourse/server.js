const http = require('http');
const app = require('./app');

const DEFAULT_PORT = 3000;

const ROOT_NODE_ADDRESS = `https://localhost:${DEFAULT_PORT}`;
/*
const syncChains = () =>{
    http.get({url :  `${ROOT_NODE_ADDRESS}/api/blocks`}, (error, response, body)=>{
        if(!error && response.statusCode === 200) {
            const rootChain = JSON.parse(body);

            console.log('replace chain on sync with, ' + rootChain);
            app.blockchain.replaceCHain(rootChain);
        }
    });
} */



let PEER_PORT;
if(process.env.GENERATE_PEER_PORT === 'true') {
    PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random()+1000)
}
const server = http.createServer(app);

const port = PEER_PORT || DEFAULT_PORT;
server.listen(port, () => {
    console.log(`Port: ${port}`);
    
    });