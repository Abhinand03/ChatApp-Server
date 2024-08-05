const mongoose= require('mongoose')

const usershema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        
    },
    email:{
        type:String,
        require:true

    },
    profile:{
        type:String,
        
    }
})

const user=mongoose.model('users',usershema)

module.exports=user