const {Server}= require('socket.io')
const express= require('express')
const http= require('http')

const chatServer=express()
const server= http.createServer(chatServer)

const io = new Server(server,{
    cors:{
        origin:["http://localhost:5173"],
        methods:["POST","GET"]
    }
})
io.on("connection",(soket)=>{
    console.log("user connect",soket.id)
    
    soket.on("disconnect",()=>{
        console.log("user disconnect",soket.id)

    })

})


module.exports={chatServer,server,io}



