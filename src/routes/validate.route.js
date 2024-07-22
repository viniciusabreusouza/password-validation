const express = require('express');
const router = express.Router();
const validatePasswordController = require('../controllers/validate.controller');

/* POST Validate Password*/
router.post('/', validatePasswordController.validatePassword);


module.exports = router;