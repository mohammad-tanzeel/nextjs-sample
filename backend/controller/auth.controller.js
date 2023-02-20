const { userModel } = require("../model")
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

module.exports = {
    login: async(req, res) => {
            try{
                const {email, password} = req.body;
                if(!email || !password){
                    return res.status(400).send({message:"please provide email and password"})
                }
                const user = await userModel.findOne({email:email})
                if(!user) throw {message: "user not found" }

                const validatepassword   = bcrypt.compare(password, user.password)
                if(!validatepassword) throw {message: "Invalid password"};
                const tokenData = {email:user.email, _id:user._id} 
                const toSend = {
                 accessToken : Jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn:'1d'}),
                 refreshToken: Jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn:'14d'})
                }
                res.send(toSend)
            } catch(err){
                return res.status(400).json({ status: 'E', err });
            }
    },

    register: async (req, res) => {
        try{
            const user = await userModel.findOne({email:req.body.email})
            if(user){
               return res.status(400).send({message:'user already exit'})
            }
            const userData = req.body;
            let passwordHash = await bcrypt.hash(userData.password, 15)
            userData.password = passwordHash
        //     userData.password = 
           const result =  await userModel.create(userData);
            res.status(200).send(result)
        }catch(err){
            console.log(err);
            return res.status(400).json({ status: 'E', err });
        }
    }
}