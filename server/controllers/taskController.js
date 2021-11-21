const path = require('path');
const db = require('../models/sqlModels');
const jwt = require('jsonwebtoken')


const taskController = {};

taskController.createTask = async (req, res, next) => {
  console.log('1');
  const { description, status, priority, points, projectId } = req.body
  try {
    const SQL = `INSERT into tasks (description, status, priority, points, projectId) 
    VALUES ($1, $2, $3 $4, $5)`;
    const params = [description, status, priority, points, projectId];    
    const results = await db.query(SQL, params);
    return next();
  } catch (error) {
    return next({log: err})    
  }

}

module.exports = taskController;