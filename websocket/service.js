const WebSocketServer = require('./server');
// const WebSocketInstance = require('./instance');

var websocketInstance = null;

module.exports = {
    startServer: (httpServer) => {
        if (!websocketInstance) {
            websocketInstance = new WebSocketServer(httpServer);
        }
    },

    stopServer: () => {
        if (websocketInstance) {
            websocketInstance.stopServer();
        }
    },


    onEvent: (key, callback) => {
        websocketInstance.onEvent(key, callback);
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
