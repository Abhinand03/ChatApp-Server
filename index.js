const express= require('express')
require('dotenv').config()
const cors= require('cors')
require('./Databse/db')
const router=require('./Routes/router')
const {chatServer,server}=require('./Soket/Soket')


PORT=4000

chatServer.use(cors())

chatServer.use(express.json())

chatServer.use(router)

server.listen(PORT,()=>{
    console.log("Server is running at 4000");
})