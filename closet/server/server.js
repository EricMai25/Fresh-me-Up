const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const data = require('./exampleData')
const router = require('../database/router/router')

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '../public')))
app.use('/outfit' , router)
// app.get('/outfit', (req,res)=>{
//     res.status(201).send(data)
//     })

app.listen(port, ()=>{
    console.log('listening on port 8080')
})