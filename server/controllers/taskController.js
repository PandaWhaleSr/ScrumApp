const path = require('path');
const db = require('../models/sqlModels');
const jwt = require('jsonwebtoken')


const taskController = {};

taskController.createTask = async (req, res, next) => {
  console.log('hello')
  const { description, status, priority, points, projectId } = req.body
  try {
    const SQL = `INSERT into tasks (description, status, priorities, points, projectId) 
    VALUES ($1, $2, $3, $4, $5)`;
    const params = [description, status, priority, points, projectId];    
    const results = await db.query(SQL, params);
    return next();
  } catch (error) {
    return next({log: err})    
  }
}

taskController.viewTasks = async (req, res, next) => {
  const { projectId } = req.body;
  try {
    const SQL = `SELECT * from tasks where projectId = ${projectId}`;   
    const results = await db.query(SQL);
    console.log("results contents", results);
    res.locals.tasks = results.rows;
    return next();
  } catch (error) {
    return next({log: err})    
  }
}

taskController.deleteTask = async(req, res, next) => {
  const {taskid} = req.params
  try {
    const SQL = `DELETE FROM tasks WHERE taskid = ${taskid}`;
    await db.query(SQL);
    return next();
  } catch (error) {
    return next({log: err})  
  }
}

module.exports = taskController;