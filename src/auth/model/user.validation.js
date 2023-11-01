"user strict";
const joi = require("joi");

const signupCheckerSchema = joi.object({
  username: joi.string().min(3),
  email: joi.string().email(),
  password: joi
    .string()
    .min(6)
    .max(30)
    .pattern(/^[A-Z][A-Za-z0-9\+\-\*\/\@\#]{5,30}$/),
});
const signinCheckerSchema = joi.object({
  email: joi.string().email(),
  password: joi
    .string()
    .min(6)
    .max(30)
    .pattern(/^[A-Z][A-Za-z0-9\+\-\*\/\@\#]{5,30}$/),
});
module.exports = {
  signupCheckerSchema,
  signinCheckerSchema,
};
