import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import studentRoute from './routes/userRouter.js';
import itemRoute from './routes/itemRouter.js';
import userRouter from './routes/userRouter.js';
//import Student from './models/student.js';//import ctrl + space,model name use (export default Student)



const app = express();

mongoose.connect('mongodb+srv://admin:123@cluster0.r07te.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(
    ()=>{
        console.log('Connected to database')
    },
    (error)=>{
        console.log('Error connecting to database')
    }
);

app.use(bodyParser.json());//middleware

app.use('/api/students', studentRoute);
app.use('/api/items', itemRoute);
app.use("/api/user",userRouter)

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
