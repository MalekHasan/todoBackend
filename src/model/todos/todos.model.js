'use strict'
const todosModel=(sequelize,DataTypes)=>{
    const model=sequelize.define('todos',{
        title:{
            type:DataTypes.STRING,
            required:true,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            required:true,
            allowNull:false
        },
        progress:{
            type:DataTypes.INTEGER,
            required:true,
            allowNull:false
        }
    })

    return model;
}
module.exports=todosModel