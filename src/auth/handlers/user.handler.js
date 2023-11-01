"use strict";

const bcrypt = require("bcrypt");
const { usersModel } = require("../../model");

const signup = async (req, res,next) => {
    try {
        let { username, password, email } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 12);
        const record = await usersModel.create({
            username: username,
            password: hashedPassword,
            email: email,
        });
        return res.status(200).json(record); 
    } catch (error) {
        next(error)
    }

};
const signin = async(req, res,next) => {
    try {
        return res.status(200).json(req.user); 
    } catch (error) {
        next(error)
    }
};

module.exports = {
  signin,
  signup,
};
