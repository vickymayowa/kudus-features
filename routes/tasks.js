// routes/tasks.js
const express = require('express');
const { filterTasks } = require('../controllers/taskController');
const router = express.Router();

router.get('/', filterTasks);

module.exports = router;