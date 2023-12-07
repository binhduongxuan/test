const path = require('path')
const express = require('express');
const rootDir = require('../util/path');
const adminController = require('../controllers/admin')
const router = express.Router();

router.get('/add-product', adminController.getAddProduction)

router.get('/products', adminController.getProducts)

router.post('/product', adminController.postAddProduction)

module.exports = router;