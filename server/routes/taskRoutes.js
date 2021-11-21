const express = require('express');
const router = express.Router();


const taskController = require('../controllers/taskController');


router.post('/newTask', taskController.createTask,  (req, res) => {
  res.status(200).json('Task created under project xyz')
})

module.exports = router;