const path = require('path');
const db = require('../models/sqlModels');
const jwt = require('jsonwebtoken')

const auth = {};

auth.verifyToken = (req, res, next) => {

  const token = req.cookies.token
  if (!token) {
    return next('unauthorized')
  }
  const verify = jwt.verify(token, 'shhh');
  // console.log(verify)
  res.locals.user = verify.user;
  // req.user = verify.user
  // console.log(res.locals.user)
  return next();
  // return next({log: err});
} 

module.exports = auth;