const mongoose =require ('mongoose');
const {appConfig}= require ('../config');

const productoSchema = new mongoose.Schema(
    { 
     title:String,
     price:Number,
     categoria:String,
     descripcion:String
    },
    {
        timestamps:true
    }
);
const Producto = mongoose.model('curso',productoSchema);
module.exports = Producto