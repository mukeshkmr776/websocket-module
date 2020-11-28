const router = require('express').Router();
const AdminService = require('./service');

router.get('/admin', (req, res) => {
    res.render('admin');
})


module.exports = router;