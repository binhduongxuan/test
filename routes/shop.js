const express = require('express');
const path = require('path')
const routeDir = require('../util/path')
const router = express.Router();
const adminData = require('./admin')
router.get('/', (req, res, next) => {
    res.render('shop')
});


module.exports = router;