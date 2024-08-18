const express = require('express')

const app = express();
const cors = require ('cors');
const mongoose = require('mongoose');
const { Schema } = mongoose;

//  middleware ...
app.use(express.json());
app.use(express.urlencoded());
app.use (cors({origin:true}));
// mongodb connection

mongoose.connect('mongodb+srv://tusharimranvip895:XWTvbAY4NDsw3wNy@cluster0.zjgki.mongodb.net/blog').then(()=>{
     console.log(`databse connection sucessfully`);
}).catch((err)=>{
     console.log(`database connection failed ${err}`);
})


// database connecton
//  make a     chema
const blogSchema = new Schema({
     username:{
          type: String,
          min: 5,
          max :20,
          required: true,
          trim: true,
     },
     email:{
          type:String,
          required: true,
          trim: true,
     },
     blog:{
          type: String,
          required: true,
          trim: true,



     }
   });
   const blogModel = mongoose.model('users', blogSchema);

// route
app.post('/creatblog',async(req, res)=>{
     console.log(req.body);
     const {username,email,blog} = req.body;
     if( !username){
           return res.status(400).json({
               message:"userName is missing!!",
          })


          
     }
     if(!email){
          return res.status(400).json({
               message:"email is missing!!",
          })
     }

     if(!blog){
          return res.status(400).json({
               message:"blog is missing!!",
          })
     }
          //  now save the database this info...
          const users = await blogModel.create({
               username : username,
               email : email,
               blog : blog,
          });
          users.save();
          res.status(200).json({
          sucess : true,
          data: users,
          message: "blog post sucessfull",
          });


   }); 
app.get("/getallblog", async(req,res)=>{
     const allusers = await blogModel.find({})
     console.log(allusers);
     
     if( !allusers){
          return res.status(400).json({
           error: " no blog is available!!!!"
         })
     }
     res.status(200).json({
          sucess:true,
          data:allusers,
          message: "get all users sucessfull",
     })
})
//      get all users

//    server  start here
app.listen(3000,()=>{
     console.log(` server running on port ${3000}`);
})


         
