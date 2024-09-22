const express = require('express');
const router = express.Router();
const usersController = require('../controlers/users');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

module.exports = router;