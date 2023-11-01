'use strict'
const express=require('express');
const pageErrorHandler=require('./error-handlers/404');
const serverErrorHandler=require('./error-handlers/500');
const userRouter = require('./auth/routes/users.route');
const todosRouter=require('./routes/todos.route')
const app=express();

app.use(express.json())


app.get('/',(req,res)=>{
    res.status(200).send('todo is running')
})
app.use(userRouter)
app.use('/todos',todosRouter)


app.use(serverErrorHandler)
app.use('*',pageErrorHandler)

function start(port) {
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);
    })
}


module.exports={
    start:start
}