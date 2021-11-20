const path = require('path');
const db = require('../models/sqlModels')

const userController = {};

userController.createUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  // future: salt and bcrypt will reassign password here to new vars to be inserted into params
  /*
  const bcryptpw
  */

  try {
    const SQL = 
    `INSERT INTO users (firstName, lastName, password, email)
    VALUES ($1, $2, $3, $4)
    `;
    const params = [firstName, lastName, password, email]
    await db.query(SQL, params);
    return next();
  } catch(err) {
    console.log(err);
    next({
      log: err
    })
  }
}
module.exports = userController;