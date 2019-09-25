const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
var cors = require('cors');

app.use(cors());


app.get('/api/willemsucksatthis', (req,res) => {
    ///mongoDB connectioned (or firebase)
    console.log("sending message now...")
    var outobj = {message: 'hello world'};
    //send data that you queired here....
    res.status(200).send(outobj);
});

app.post('/api/willemisokatthis',(req,res)=>{
    //
    console.log(req);
    res.status(200).send({message:'posted'})
})

app.listen(3000,console.log('servers up ! '))