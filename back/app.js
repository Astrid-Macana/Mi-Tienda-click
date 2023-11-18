
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');


const  mongoose = require("mongoose");
mongoose.set('debug',true)

const productosRouter = require('./routes/producto')

const debug =require('debug')('back')
debug('este es un mensaje de deporacion') 

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use("./public", express.static(`${__dirname}/image`));

app.use('./api',productosRouter)

module.exports = app;