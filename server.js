var express = require('express')
var bp = require('body-parser')
var cors = require('cors')
var mongodb = require('mongodb')

var MongoClient = mongodb.MongoClient
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
    console.log('hi')
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

app.get('/getHousingInfo', (req, res)=>{
    console.log('hi')
})

app.get('/getEmploymentInfo', (req, res)=>{
    console.log('hi')
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