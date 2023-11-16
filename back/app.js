
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors());
const  mongoose = require("mongoose");
mongoose.set('debug',true)
const debug =require('debug')('back')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use("./public", express.static(`${__dirname}/image`));

module.exports = app;