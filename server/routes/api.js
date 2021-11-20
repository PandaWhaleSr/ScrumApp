const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const projectController = require('../controllers/projectController');
const taskController = require('../controllers/taskController');

//routes to users
router.post('/', userController.createUser, (req,res) => res.status(200).json());


//routes to projects



//routes to tasks

module.exports = router;