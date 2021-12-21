const express = require('express');

var bodyParser = require('body-parser');

const route = require('./route/route.js');

var multer =require('multer')

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any()) 


const mongoose = require('mongoose');
const { response } = require('express');

mongoose.connect("mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/group_2ssak_project_4?authSource=admin&replicaSet=atlas-e7145j-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true")
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))



app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});