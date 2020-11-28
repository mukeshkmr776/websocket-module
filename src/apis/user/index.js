const router = require('express').Router();
const UserService = require('./service');

const WebSocketService = require('./../../websocket/websocket-service');
WebSocketService.onEvent(WebSocketService.EVENTS.MYKEY, (messageevent) => {
    console.log('hahahaha - ', messageevent.getMessage());
})

router.get('/', (req, res) => {
    res.status(200).send('From user route');
});


module.exports = router;