// routes/projects.js
const express = require('express');
const { updateTaskOrder } = require('../controllers/projectController');
const router = express.Router();

router.put('/:projectId/tasks', updateTaskOrder);

module.exports = router;