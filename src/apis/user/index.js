const router = require('express').Router();
const UserService = require('./service');

router.get('/user', (req, res) => {
    res.status(200).send('User Page!');
});


module.exports = router;