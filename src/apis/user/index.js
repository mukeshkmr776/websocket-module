const router = require('express').Router();
const UserService = require('./service');

router.get('/user', (req, res) => {
    res.render('user');
});


module.exports = router;