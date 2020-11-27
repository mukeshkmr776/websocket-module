// Internal Imports
const http = require('http');
const path = require('path');


// External Imports
const cors = require('cors');
const express = require('express');
const app = express();


// PORT Set
const PORT = process.env.PORT || '8000';


// Creating Http Server
const httpServer = http.createServer(app);
const INDEX_HTML = path.join(__dirname, 'index.html');
// ------------------------------------------------------------


// WebSocket Initialize
const WebSocketService = require('./websocket/service');
WebSocketService.startServer(httpServer);

WebSocketService.onEvent(WebSocketService.EVENTS.MYKEY, (messageEvent) => {
    console.log('inside onevent MYKEY - ', messageEvent.getMessage());
    messageEvent.broadcastToAll(WebSocketService.EVENTS.MYKEY);
})
// ------------------------------------------------------------


// Middlewares and PORT Set
app.set('port', PORT);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, 'public')));
// ------------------------------------------------------------


// Routes
app.get('/', (req, res) => {
    res.sendFile(INDEX_HTML);
});
// ------------------------------------------------------------


// Starting server
httpServer.listen(PORT, () => {
    console.log('HTTP Server listening on http://localhost:' + PORT + '/');
});
// ------------------------------------------------------------
