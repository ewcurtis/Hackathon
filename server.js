var express = require('express')
var bp = require('body-parser')
var cors = require('cors')
var mongodb = require('mongodb')

var MongoClient = mongodb.MongoClient
//192.168.1.27
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




app.get('/getCMInfo', (req, res)=>{
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
// app.post('/postCMInfo', (req, res)=>{
//     console.log('hi')
// })

// get housing info based on req's user id
app.get('/getHousingInfo', (req, res)=>{
    var id = new mongodb.ObjectID(req.body._id)

    customerRelDB.collection('housingInfo').find(id).toArray(function(err, result){
        if (err) throw err;

        console.log(result)
        res.send(result)
    })
})

app.get('/getEmploymentInfo', (req, res)=>{
    var id = new mongodb.ObjectID(req.body._id)

    creditCardSystem.collection('employmentAndIncome').find(id).toArray(function(err, result){
        if (err) throw err;

        console.log(result)
        res.send(result)
    })
})

app.get('/getCrediScore', (req, res)=>{
    console.log('hi')
})

app.get('/submitApplication', (req, res)=>{
    console.log('hi')
})

app.get('/actOnApplication', (req, res)=>{
    console.log('hi')
})