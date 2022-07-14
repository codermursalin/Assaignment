const User=require('../models/user');
exports.registerUser=async(req,res,next)=>{
    try{
        const {name,email,password}=req.body;
        const alreadyExists=await User.exists({email});
        if(alreadyExists){
            res.status(401).json("User Already Registered");
        }
        const user=await User.create({name,email,password});
        res.status(201).json(user);
    }catch(error){
        console.log(error);
    }
}

exports.loginUser=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(401).json({message: 'Invalid email or password'});
        if (!user.comparePassword(password)) return res.status(401).json({message: 'Invalid email or password'});
        res.status(200).json({name: user.name,email:user.email,token: user.generateJWT()});
    }catch(error){
        console.log(error);
    }
}