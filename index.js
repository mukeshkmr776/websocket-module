const Server = require('./src/server');

Server
    .startServer()
    .then(res => {
        Server.startSocket();
    }).catch(error => {
        console.log('Error caught: ', error && error.message ? error.message : '');

        if (error && error.stack) {
            console.log('Error stack : ', error.stack);
        }
    });