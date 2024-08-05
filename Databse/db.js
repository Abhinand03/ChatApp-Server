const mongoose= require('mongoose')

const db_url=process.env.DATA_BASE

mongoose.connect(db_url,{}).then(()=>{console.log("Connection Successfull")}).catch((err)=>{console.log(err); console.log("MongoDb Connection Failed");})