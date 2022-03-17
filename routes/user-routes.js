const express = require("express");
const { validate } = require("express-validation");

const authController = require("../controllers/auth-controller");
const {
  signinValidation,
  signupValidation,
} = require("../validation/user-route-validation");


const router = express.Router();

router.post(
  "/signup",
  validate(signupValidation, {}, {}),
  authController.signup
);
router.post(
  "/signin",
  validate(signinValidation, {}, {}),
  authController.signin
);

module.exports = router;
