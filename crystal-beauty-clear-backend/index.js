import express from 'express';

let app = express();

app.get('/', (req, res) => {
  console.log(req);  
    res.json({message: 'Hello World!'});
}
)

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});