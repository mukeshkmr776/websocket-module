const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

const PORT = '8000';
const httpServer = http.createServer(app);
const TEST_HTML = require('path').join(__dirname, 'test.html');

const MySocket = require('./websocket/socket');
const socketServer = new MySocket(httpServer);

app.set('port', PORT);
app.use(cors());

app.get('/test', (req, res) => {
    res.sendFile(TEST_HTML);
});

httpServer.listen(PORT, () => {
    console.log('HTTP Server listening on http://localhost:' + PORT + '/test');
});
