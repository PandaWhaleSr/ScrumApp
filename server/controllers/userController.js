const path = require('path');
const db = require('../models/sqlModels')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userController = {};

userController.createUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  // future: salt and bcrypt will reassign password here to new vars to be inserted into params
  /*
  const bcryptpw
  */
  console.log(email);
  try {
    const hashPassword = bcrypt.hashSync(password, 10);
    const SQL = 
    `INSERT INTO users (firstName, lastName, password, email)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `; //returning * is lagging sync of created users
    const params = [firstName, lastName, hashPassword, email]
    const results = await db.query(SQL, params);
    // console.log(results);
    const token = jwt.sign({user: results.rows[0].userid}, "shhh", {expiresIn: "1hr"});

    res.cookie("token", token, {
      httpOnly: true
    })
    return next();
  } catch(err) {
    console.log(err);
    next({
      log: err
    })
  }
}

userController.verifyUser = async(req, res, next) => {
  const { email, password } = req.body;
  try{
    // console.log(email)
    const SQL = `SELECT password FROM users WHERE email = '${email}'`;

    const result = await db.query(SQL);
    // console.log(result);
    const compare = bcrypt.compare(password, result.rows[0].password) 
    if (!compare) {
      return next({log: 'Incorrect Password'});
    }
    // else if password is verified, create token  
    
    const token = jwt.sign({user: result.rows[0].userid}, "shhh", {expiresIn: "1hr"});

    res.cookie("token", token, {
      httpOnly: true
    })
    return next();
  }catch (err) {
    console.log(err);
    next({
      log: err
    })
  }
}
module.exports = userController;