const router = require('express').Router();
const AdminService = require('./service');

router.get('/admin', (req, res) => {
    res.status(200).send('Admin Page!');
})


module.exports = router;