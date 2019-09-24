var express = require('express')
var bp = require('body-parser')
var cors = require('cors')
var mongodb = require('mongodb')
var userID;

var MongoClient = mongodb.MongoClient
//192.168.1.60
var url = "mongodb://localhost:27017"
var creditCardSystem
var customerRelDB

MongoClient.connect(url,(err , database) => {
    if( err) return console.log(err)
    creditCardSystem = database.db('CreditCardSystem')
    customerRelDB = database.db('CustomerRelationDB')
    console.log('Connected to database')
})

var app = express()
app.use(bp.json())
app.use(cors())

app.listen('4200', ()=>{
    console.log('Server is ready...')
})



// get one person's data based on user id
app.get('/getCMInfo', (req, res)=>{
    
    var id = new mongodb.ObjectID(req.body._id)
    creditCardSystem.collection('personalInfo').find(id).toArray(function(err, result){
        if (err) throw err;
        userID = req.body._id
        console.log(userID)
        res.status(200).send(result)
    })
})
app.post('/postCMInfo', (req, res)=>{
    creditCardSystem.collection('personalInfo').insertOne(req.body, (err, result)=>{
        if(err) {return console.log(err)}

        userID = result.ops[0]._id
        console.log("userid: ", userID)
        res.send(userID)
    })
})
app.put('/updateCMInfo', (req, res)=>{
    var id = {_id: new mongodb.ObjectID(req.body.user_id)}
    var temp = req.body
    temp.user_id = id._id
    var newValue = { $set: temp}
    creditCardSystem.collection('personalInfo').updateOne(id,newValue,function(err, result){
        if (err) throw err;
        console.log(result)
        res.send("successful update")
    })
})

// get housing info based on req's user id
app.get('/getHousingInfo', (req, res)=>{
    // user id
    var id = new mongodb.ObjectID(req.body.user_id)
    console.log(id)

    customerRelDB.collection('housingInfo').findOne({user_id:id},function(err, result){
        if (err) throw err;

        console.log(result)
        res.send(result)
    })
})
app.post('/postHousingInfo', (req, res)=>{
    customerRelDB.collection('housingInfo').insertOne(req.body, (err, result)=>{
        if(err) {return console.log(err)}

        console.log(result)
        res.send('housing info saved')
    })
})
app.put('/updateHousingInfo', (req, res)=>{
    var id = {user_id: new mongodb.ObjectID(req.body.user_id)}
    
    var newValue = { $set: req.body}
    customerRelDB.collection('housingInfo').updateOne(id,newValue,function(err, result){
        if (err) throw err;
        console.log(result)
        res.send("successful housing update")
    })
})

// find corresponding data from user id
app.get('/getEmploymentInfo', (req, res)=>{
    // user id
    var id = new mongodb.ObjectID(req.body.user_id)
    console.log(id)

    creditCardSystem.collection('employmentAndIncome').findOne({user_id:id},function(err, result){
        if (err) throw err;

        console.log(result)
        res.send(result)
    })
})

// req.body needs also to include user_id
app.post('/postEmploymentInfo', (req, res)=>{
    creditCardSystem.collection('employmentAndIncome').insertOne(req.body, (err, result)=>{
        if(err) {return console.log(err)}

        console.log(result)
        res.send('employment info saved')
    })
})
app.put('/updateEmploymentInfo', (req, res)=>{
    var id = {user_id: new mongodb.ObjectID(req.body.user_id)}
    
    var newValue = { $set: temp}
    creditCardSystem.collection('employmentAndIncome').updateOne(id,newValue,function(err, result){
        if (err) throw err;
        console.log(result)
        res.send("successful employment update")
    })
})

app.get('/getCrediScore', (req, res)=>{
    console.log('hi')
})

// change submission status to submitted
app.post('/submitApplication', (req, res)=>{
    var id = {_id: new mongodb.ObjectID(req.body.user_id)}
    var status = { $set: {submission: "true"}}
    creditCardSystem.collection('personalInfo').updateOne(id,status,function(err, result){
        if (err) throw err;
        console.log(result)
        res.send("successful submission")
    })
})

// get all info
app.get('/getAllCMInfo', (req, res)=>{
    creditCardSystem.collection('personalInfo').aggregate([
        {
            $lookup:
            {
                from: 'employmentAndIncome',
                localField: 'emp_id',
                foreignField: '_id',
                as: 'employment and income'
            }
        }
    ]).toArray(function(err, result){
        if (err) throw err;

        console.log(result)
        res.status(200).send(result)
    })
})


app.post('/actOnApplication', (req, res)=>{
    var id = {_id: new mongodb.ObjectID(req.body.user_id)}
    var status = { $set: {approval: req.body.approval}}
    creditCardSystem.collection('personalInfo').updateOne(id,status,function(err, result){
        if (err) throw err;
        console.log(result)
        res.send("Approved!")
    })
})