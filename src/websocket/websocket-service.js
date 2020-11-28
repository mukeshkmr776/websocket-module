const WebSocketServer = require('./websocket-server');
// const WebSocketInstance = require('./instance');

var websocketInstance = null;

module.exports = {
    start: (httpServer) => {
        if (!websocketInstance) {
            websocketInstance = new WebSocketServer(httpServer);
        }
    },

    stop: () => {
        if (websocketInstance) {
            websocketInstance.stopServer();
        }
    },

    onEvent: (key, callback) => {
        // -------------------------------------------------
        // WebSocketServer.onEvent(key, callback);
        // -------------------- or -------------------------
        if (websocketInstance) {
            websocketInstance.onEvent(key, callback);
        } else {
            throw new Error('Cannot register Websocket events before it is started');
        }
        // -------------------------------------------------
    },

    broadcastToAll: (key, data = {}) => {
        if (websocketInstance) {
            websocketInstance.broadcastToAll(key, data);
        }
    },

    EVENTS: {
        'MYKEY': 'MYKEY',
        'MYKEY2': 'MYKEY2'
    }
}
