'use strict'
require('dotenv').config();
const port=process.env.PORT || 8000;
const {start}=require('./src/server')
const {db}=require('./src/model/index')

db.sync({force:false}).then(()=>{
    start(port)
})
