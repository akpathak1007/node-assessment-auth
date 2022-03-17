const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');


exports.dotenv = () => {
  dotenv.config({
    path: '.env'
  })
}

exports.token = async (userId) => {
  return await jwt.sign({user_id: userId }, 'secret', {
    expiresIn: 3600,
  })
}