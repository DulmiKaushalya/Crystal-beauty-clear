import express from 'express';
import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.json());//middleware

app.get('/',
    (req,res)=>{
        console.log(req.body)
        console.log('Get request received');
        res.json({message: 'Hello World'});
    }
);

app.post('/',
    (req,res)=>{
        console.log(req.body)
        console.log('Post request received');
        res.json({message: 'Hello dul'});
    }
);

app.put('/',
    (req,res)=>{
        console.log(req.body)
        console.log('Put request received');
        res.json({message: 'Hello Put'});
    }
);

app.delete('/',
    (req,res)=>{
        console.log(req.body)
        console.log('Delete request received');
        res.json({message: 'Hello Delete'});
    }
);

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});