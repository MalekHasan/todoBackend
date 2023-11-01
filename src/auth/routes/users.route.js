"use strict";
const express = require("express");
const { signup, signin } = require("../handlers/user.handler");
const {
  signupCheckerSchema,
  signinCheckerSchema,
} = require("../model/user.validation");
const validation = require("../middleware/validation");
const basic = require("../middleware/basic");

const userRouter = express.Router();

userRouter.post("/signup", validation(signupCheckerSchema), signup);
userRouter.post("/signin",basic, signin);

module.exports = userRouter;
