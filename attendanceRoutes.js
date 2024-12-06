const express = require('express');
const attendanceController = require('../controllers/attendenceControllers');

const router = express.Router();

router.post('/', attendanceController.create);

module.exports = router;