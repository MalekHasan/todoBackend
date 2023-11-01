'use strict'
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const usersModel=(sequelize,DataTypes)=>{
    const model=sequelize.define('users',{
        username:{
            type:DataTypes.STRING,
            required:true,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            required:true,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            required:true,
            allowNull:false
        },
        token:{
            type:DataTypes.VIRTUAL,
            get(){
              return  jwt.sign({email:this.email,username:this.username},process.env.SECRET)
            },
            set(tokenObj){
              return  jwt.sign(tokenObj,process.env.SECRET)
            },
        }
    })

    model.basicAuth=async(email,password)=>{
        const user=await model.findOne({where:{
            email:email
        }})
        if(user && bcrypt.compareSync(password,user.password)){
                return user;
        }
        else{
            throw new Error('Email or Password is incorrect')
        }
    }

    return model;
}
module.exports=usersModel