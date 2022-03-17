const { validate, Validation, Joi } = require("express-validation");

exports.signupValidation = {
  body: Joi.object({
    email: Joi.string().email(),
    name: Joi.string(),
    password: Joi.string(),
    confirm_password: Joi.string()

  })
};

exports.signinValidation = {
  body: Joi.object({
    email: Joi.string().email(),
    password: Joi.string(),

  })
};
