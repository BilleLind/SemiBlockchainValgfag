require('dotenv').config();
//setting up http for server setup further down
const http = require('http');
const main = require('./main')

//setting the port
const port = process.env.PORT || 3000;

const server = http.createServer(main);

server.listen(port, console.log('the server is running!'));