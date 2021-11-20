const path = require('path');
const User = require('../models/sqlModels')

const userController = {};



userController.createUser = async (req, res, next) => {
  const { firstName, lastName, email } = req.body;
  const { password } = req.body;
  // future: salt and bcrypt will reassign password here to new vars to be inserted into params
  /*
  const bcryptpw
  */

  try {
    const SQL = 
    `INSERT INTO users (firstName, lastName, password, email)
    VALUES ($1, $2, $3, $4, 5)
    `;
    const params = [firstName, lastName, password, email]
    await User.query(SQL, params);
    return next;
  } catch(err) {
    next({
      log: 'userController.createUser: ERROR ${err}'
    })
  }
}
module.exports = userController;