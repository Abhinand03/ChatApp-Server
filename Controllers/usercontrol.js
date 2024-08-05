const user = require('../Model/usermodel')
const jwt = require('jsonwebtoken')

exports.googlereg = async (req, res) => {
    const { username, email, profile } = req.body

    console.log("body===",req.body);
    try {
        console.log("email====",email);
        const existingUser = await user.findOne({email})
        console.log("existini==",existingUser);
        if (existingUser) {
            // const token = jwt.sign({ userId: existingUser._id })
            const token = jwt.sign({ userId:existingUser._id,username:existingUser.username },process.env.secret_key)

            res.status(200).json({ existingUser,token})



        }
        else {
            const newuser = new user({
                username, email, profile, password: ""
            })
            await newuser.save()

            const createduser = await user.findOne({ email })
            const token = jwt.sign({ userId: createduser._id },process.env.secret_key)
            res.status(200).json({ token })

        }

    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)
    }



}

exports.register=async(req,res)=>{
    const {username,profile,email,password}=req.body
    try{

        const existingUser = await user.findOne({email})
        if(existingUser){
    
            res.status(401).json("User Already Exit")
    
        }
        else{
    
            const newuser= new user({
                username,profile,email,password
            })
              await newuser.save()
             res.status(200).json(newuser)
        }
    }
    catch(err)
    {
        console.log(err);
    }


}

exports.login=async(req,res)=>{ 
    

    const {email,password}=req.body
    console.log("wewse",email);
    console.log(req.body);
    try{

        const existinguser = await user.findOne({email,password})
        if(existinguser){
            console.log("login");
            const token= jwt.sign({userId:existinguser._id,username:existinguser.username},process.env.secret_key)
            console.log(existinguser);
            res.status(200).json({token,existinguser})
            
        }
        else{
        
            res.status(401).json("Invaild Username / Password")
            console.log("invalid");
        }
    }
    catch(err){
        console.log(err);
    }

}


exports.getuser=async(req,res)=>{
    const {email}=req.body  
    console.log("email",req.body);

    try{
        const result= await user.find({email:{$ne:email}})
       res.status(200).json(result)
    }
    catch(err){
        console.log(err);
        res.status(401).json(err)
    }
    
}