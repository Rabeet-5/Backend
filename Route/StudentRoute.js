const express = require('express')

const Routes = express.Router()

Routes.get('/',(req,res)=>{
    console.log('Student Data Gotted Successfully',res)
})
Routes.get('/:id',(req,res)=>{
    console.log(res,'Student Data gotted by id ')
})
Routes.post('/:id',(req,res)=>{
    console.log(res,'Data Posted Successfully')    
})
Routes.put('/',(req,res)=>{
    console.log(res,'Student data Posted Succesfully')
})
Routes.delete('/:id',(req,res)=>{
    console.log(res,'Student Data Deleted successfully')
})

module.exports = Routes;