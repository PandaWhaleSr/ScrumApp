const path = require('path');
const db = require('../models/sqlModels');
const jwt = require('jsonwebtoken')


const taskController = {};

taskController.createTask = async (req, res, next) => {
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
  return next();
}

taskController.viewTasks = async (req, res, next) => {
  console.log('Entering inside view Task controller');
  try {
    const SQL = `SELECT * from tasks where projectId =1`;   
    const results = await db.query(SQL);
    console.log("results contents", results);
    res.locals.tasks = results.rows;
    return next();
  } catch (error) {
    return next({log: err})    
  }
  return next();

}

module.exports = taskController;