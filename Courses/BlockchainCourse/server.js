const http = require('http');
const app = require('./app');



const server = http.createServer(app);
port = app.get('port');
server.listen(port, () => {
    console.log(`Port: ${port}`);
    });