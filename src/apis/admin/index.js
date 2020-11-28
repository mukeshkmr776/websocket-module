const router = require('express').Router();
const AdminService = require('./service');

router.get('/', (req, res) => {
    res.status(200).send('From admin route');
});


module.exports = router;