const http = require('http');
const app = require('./app');

const DEFAULT_PORT = 3000;
let PEER_PORT;

if(process.env.GENERATE_PEER_PORT === 'true') {
    PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random()+1000)
}
const server = http.createServer(app);

const port = PEER_PORT || DEFAULT_PORT;
server.listen(port, () => console.log(`Port: ${port}`));