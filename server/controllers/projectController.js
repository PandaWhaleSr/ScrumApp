const path = require('path');
const db = require('../models/sqlModels');
const jwt = require('jsonwebtoken')

const projectController = {};

projectController.viewProjects = async(req, res, next) => {
  // console.log('hi')
  try {
    // console.log(res.locals.user)
    const SQL= ` SELECT * FROM projects WHERE userid = ${res.locals.user}`
    // console.log(res.locals.user)
    const results = await db.query(SQL);

    res.locals.projects = results.rows[0];
    // console.log(results.rows[0]);
    return next();
  } catch (error) {
    return next({log: err})
  }
}

projectController.createProject = async (req, res, next) => {
  const { description, deadline, } = req.body
  try {
    const SQL = `INSERT into projects (description, deadline, userId) 
    VALUES ($1, $2, $3)`;
    const params = [description, deadline, res.locals.user];    
    const results = await db.query(SQL, params);
    return next();
  } catch (error) {
    return next({log: err})    
  }

}

module.exports = projectController;