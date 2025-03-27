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
        }).catch((err)=>{
            console.log(err)
            res.json({
                  message: "User not Saved"
            })
            
})

}

export function loginUser(req, res) {
      const email = req.body.email;
      const password = req.body.password;
  
      User.findOne({
             email: email 
            }).then((user) => {
          if (user == null) {
              res.status(404).json({
                  message: "Invalid email",
              });
          } else {
              const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  
              if (isPasswordCorrect) {
                  res.json({
                      message: "Login successful",
                  })
              } else {
                  res.status(403).json({
                      message: "Invalid password",
                  });
              }
          }
      })
      }