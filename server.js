const express = require('express')
const app = express()
const env = require('dotenv')

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('Server started')
})
server.listen(4000,()=>console.log('Server is started'))

const StudentRoute = require('./Route/route')
const moongoose = require('mongoose')
env.config({ path: './config.env' })


const DB = process.env.DATABASE_URL;


moongoose.connect(DB)
    .then((res) => {
        console.log('DB Connected')

    }).catch((err) => {
        console.log(err)
    })






