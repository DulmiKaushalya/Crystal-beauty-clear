import express from 'express';
import { deleteStudent, getStudents, saveStudent, updateStudent } from '../controllers/studentController.js';

const studentRoute = express.Router();//empty router

studentRoute.get('/',getStudents)

studentRoute.post('/',saveStudent);

studentRoute.put('/',updateStudent);

studentRoute.delete('/',deleteStudent);

export default studentRoute;