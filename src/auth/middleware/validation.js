'use strict'
const joi=require('joi')

const validation=(schema)=>{
    return (req,res,next)=>{
        const valid=schema.validate(req.body,{abortEarly:false})
        if(!valid.error){
            console.log(valid);
            return next()
        }
        next(valid.error)
    }
}

module.exports=validation