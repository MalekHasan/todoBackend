'use strict'

const { todosModel } = require("../../model/index");

async function getAllTasksHandler(req,res,next){
try {
    const {userId}=req.params;
    const records=await todosModel.findAll({where:{userId:userId}});
    res.status(200).json(records);
    }catch (error) {
    next(error)  
    }
}
async function getOneTaskHandler(req,res,next){
    try {
        const {id}=req.params;
        const record=await todosModel.findOne({where:{id:id}});
        res.status(200).json(record);
        }catch (error) {
        next(error)  
        }
}
async function createTaskHandler(req,res,next){
    try {
        const taskObj=req.body;
        const record=await todosModel.create(taskObj);
        res.status(201).json(record);
        }catch (error) {
        next(error)  
        }
}
async function updateTaskHandler(req,res,next){
    try {
        const {id}=req.params;
        const record=await todosModel.update({where:{id:id}});
        res.set('cookie')
        res.status(200).json(record);
        }catch (error) {
        next(error)  
        }
}
async function deleteTaskHandler(req,res,next){
    try {
        const {id}=req.params;
        const record=await todosModel.destroy({where:{id:id}});
        res.status(204).json(record);
        }catch (error) {
        next(error)  
        }
}
module.exports={
    getAllTasksHandler,
    getOneTaskHandler,
    createTaskHandler,
    updateTaskHandler,
    deleteTaskHandler,
}