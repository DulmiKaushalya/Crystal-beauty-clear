import express from 'express';

let app = express();

console.log('Hello, world!');
console.log('This is the backend of the Crystal Beauty Clear project.');

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});