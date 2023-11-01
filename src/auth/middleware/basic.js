'use strict'
const base64=require('base-64');
const { signinCheckerSchema } = require('../model/user.validation');
const { usersModel } = require('../../model');
function basic(req,res,next) {
    try {
        if(req.headers.authorization)
        {
            const parsedData=req.headers.authorization.split(" ").pop();
            const decodedData=base64.decode(parsedData).split(":");
            const [email,password]=decodedData;
            const valid=signinCheckerSchema.validate({email:email,password:password},{abortEarly:false})
            if(!valid.error){
                usersModel.basicAuth(email,password).then((data)=>{
                    req.user=data;
                    next()
                }).catch((err) => {
                    next(err);
                  });
            }
            else{
                return next(valid.error)
            }

        }
    } catch (error) {
        next(error)
    }
}

module.exports=basic