import User from "../models/user.js";
import bcrypt from "bcrypt";

export function saveUser(req,res){

      const hashedPassword =bcrypt.hashSync( req.body.password ,10)//10 time hashed
      console.log(hashedPassword);//print hashed password
       const user = new User({
            email : req.body.email,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            password : hashedPassword,
       })

       user.save().then(()=>{
            res.json({
                  message: "User saved"
            })
        }).catch(()=>{
            res.json({
                  message: "Error"
            })
            
})

}