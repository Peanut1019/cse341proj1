const express = require('express');
const router = express.Router();
const usersController = require('../controlers/users');

router.get('/', usersController.getAll);
router.get('/', usersController.getSingle);

module.exports = router;