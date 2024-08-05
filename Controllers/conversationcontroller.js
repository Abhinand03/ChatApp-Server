const mess= require('../Model/conversationmodel')

exports.sendmessage=async(req,res)=>{

    try{

        const {sender_id,receiver_id,sendmessage}=req.body
        console.log(req.body);
        console.log(sendmessage);
        
        
    
            const newmess= new mess({
                sender_id,receiver_id,message:sendmessage  
                
            })
            await newmess.save()
            res.status(200).json(newmess)
    
        
        
    }catch(err){
        console.log(err);
        
    }
}

exports.getmessage=async(req,res)=>{
    const {sender_id,receiver_id}=req.body
    console.log(req.body);


    try{
        const result= await mess.find({sender_id,receiver_id})
        // console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        console.log(err);
    }
}
exports.re_message=async(req,res)=>{
    const {sender_id,receiver_id}=req.body
    try{
        const result = await mess.find({sender_id,receiver_id})
        res.status(200).json(result)
    }
    catch(err){
        console.log(err);
    }

}