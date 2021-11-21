const path = require('path');
const db = require('../models/sqlModels');
const jwt = require('jsonwebtoken')

const auth = {};

auth.verifyToken = (req, res, next) => {

  if (!req.cookies.token) {
    return next('unauthorized')
  }
  const verify = jwt.verify(req.cookies.token, 'shhh');
  res.locals.user = verify.user;
  console.log(res.locals.user); //19
  return next();
  // return next({log: err});
} 

module.exports = auth;