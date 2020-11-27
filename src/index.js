// Internal Imports
const http = require('http');
const path = require('path');


// External Imports
const cors = require('cors');
const compression = require('compression');
const express = require('express');
const app = express();


// PORT Set
const PORT = process.env.PORT || '3000';


// Creating Http Server
const httpServer = http.createServer(app);
const INDEX_HTML = path.join(__dirname, '..', 'public', 'index.html');
// ------------------------------------------------------------


// Middlewares and PORT Set
app.set('port', PORT);
app.use(cors()); // Always put CORS as first line in middleware. This is very important.
app.use(compression());
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

    // WebSocket Initialize - socket should be started onyl after HTTP Server is started.
    const WebSocketService = require('./websocket/websocket-service');
    WebSocketService.start(httpServer);
});
// ------------------------------------------------------------
