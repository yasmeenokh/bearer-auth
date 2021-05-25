'use strict';

const users = require('../models/users.js');

module.exports = async (req, res, next) => {

  try {

    if (!req.headers.authorization) {next('Invalid Login from the Bearer');}

    const token = req.headers.authorization.split(' ').pop();
    console.log('this is the token',token);
    const validUser = await users.authenticateWithToken(token);

    req.user = validUser;
    req.token = validUser.token;
    next();
  } catch (e) {
    res.status(403).send('Invalid Login from the Bearer');
  }
};