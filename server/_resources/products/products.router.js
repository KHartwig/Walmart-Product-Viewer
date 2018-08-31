const express = require('express');
const router = express.Router();
const productsController = require('./products.controller')

// Routes
router.get('/:id', productsController.getById);

module.exports = router;
