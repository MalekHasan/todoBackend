'use strict';
const express=require('express');
const todosRouter=express.Router();
const {
    createTaskHandler,
    deleteTaskHandler,
    getAllTasksHandler,
    getOneTaskHandler,
    updateTaskHandler
}=require('../handlers/todos/todos.handlers');


todosRouter.get('/:userId',getAllTasksHandler);
todosRouter.get('/:id',getOneTaskHandler);
todosRouter.post('/',createTaskHandler);
todosRouter.put('/:id',updateTaskHandler);
todosRouter.get('/:id',deleteTaskHandler);

module.exports=todosRouter;