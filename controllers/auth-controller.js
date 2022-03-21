const { ValidationError } = require("express-validation");
const { log } = require("console");
const jwt = require('jsonwebtoken');

const User = require("../models/user-model");
const { token } = require('../utils/helper');

exports.signup = async (req, res) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    user.password = undefined;
    const jwt = await token(user._id);
    res.status(200).json({
      status: 'success',
      message: 'User created successfully.',
      date: {
        token:jwt,
        user
      }
    });
   
  } catch (err) {
    log(err);
    return res.status('440').json({
      message: 'Something went wrongs',
      err: err
    })
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email }).select('+password');
    const result = await User.comparePasssword(password, user.password);
    user.password = undefined;
    if (result) {
      return res.status(200).json({
        status: 'success',
        message:'User logged in successfully.',
        token: await token(user._id),
        user
      })
    } else {
      return res.status(200).json({
        status: 'fail',
        message: 'Password is not matched.'
      })
    }
  } catch (err) {
    log(err);
    return res.status('440').json({
      message: 'Something went wrongs',
      err: err
    }) 
  }
};
