const mongoose= require('mongoose')

const converstionSchema= new mongoose.Schema({
    sender_id:{
        type:String
    },
    receiver_id:{
        type:String
    },
    message:{
       type:String
    },
    mess_time:{
        type:Date,
        default:Date.now

    }

})

const conversation=mongoose.model('messages',converstionSchema)

module.exports=conversation