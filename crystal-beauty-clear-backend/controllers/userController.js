import User from "../models/user.js";
import bcrypt from "bcrypt";

export function saveUser(req,res){

      const hashedPassword =bcrypt.hashSync( req.body.password ,10)//10 time hashed
      console.log(hashedPassword);
       

}