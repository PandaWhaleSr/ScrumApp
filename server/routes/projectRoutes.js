const express = require('express');
const router = express.Router();


const {verifyToken}= require ('../middleware/auth');
// const userController = require('../controllers/userController');
const projectController = require('../controllers/projectController');

//middleware to verify user before accessing project routes needed 
//get projects for user
router.get('/projects', verifyToken, projectController.viewProjects, (req, res) => {
  // console.log(res.locals.user)
  return res.status(200).json(res.locals.projects)
})

// routes.get('/dashboard')
//create projects for user

router.post('/newProject', verifyToken, projectController.createProject, projectController.viewProjects, (req, res) => {
  res.status(200).json('project created')
})
//update projects for user

//delete projects for user

module.exports = router;