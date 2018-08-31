const express = require('express');
const router = express.Router();
const categoriesController = require('./categories.controller')

router.get('/', categoriesController.getAll);
router.get('/:id', categoriesController.getPaginatedItems);

module.exports = router;
