'use strict'
const {Sequelize,DataTypes}=require('sequelize');
const usersModel = require('../auth/model/users.model');
const todosModel = require('./todos/todos.model');

const POSTGRES_URI=process.env.DB_URL;

const sequelize=new Sequelize(POSTGRES_URI,{})
const users=usersModel(sequelize,DataTypes)
const todos=todosModel(sequelize,DataTypes)

users.hasMany(todos);
todos.belongsTo(users);


module.exports={
    db:sequelize,
    DataTypes,
    usersModel:users,
    todosModel:todos
}
