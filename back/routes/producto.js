const express = require('express');
const api= express.Router();
const{addProducto,getProducto,idProductos,updateProductos,deleteProducto}=require('../controller/productoController')

api.get('/productos',getProducto);
api.post('/productos',addProducto);
api.get('/productos/:id',idProductos);
api.put('/productos/:id',updateProductos);
api.delete("/productos/:id",deleteProducto);

module.exports = api