import Student from '../models/student.js';

export function getStudents(req, res) {

   Student.find().then(
       (students)=>{
           res.json(students);
       }
   ).catch(
       (error)=>{
           res.status(500).json({
               error: error
           });
       }
   );
}

export function saveStudent(req, res) {
    const student = new Student(req.body);
    student.save().then(
        ()=>{
            res.json({
                message: "Student saved"
            });
        }
    ).catch(
        (error)=>{
            res.status(500).json({
                error: error
            });
        }
    );

}

export function updateStudent(req, res) {
    res.json({
        messafe: "Student updated"
    });
}

export function deleteStudent(req, res) {
    res.json({
        messafe: "Student deleted"
    });
}