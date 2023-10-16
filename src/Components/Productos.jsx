import React, { useState,useEffect } from "react";
import Producto from "./Producto";
import { getAllProductos } from "../services/ProductoServi";




// import "./Productos.css"

function Productos() {
    const titulo="Listado de preductos"
    const [product,setProductos]= useState([]);

    useEffect(()=>{
        const result = async()=>{
         try{
            const responseDate= await getAllProductos();
            console.log(responseDate.data)
            setProductos(responseDate.data)

         }catch (e){
            console.log(e)
         }
        }
        result()
    },
    []);

    const filtrar =()=> {
        setProductos([])
}
    return (
       

        <div>
           <h1 className="titulo">{titulo}</h1>
          {product.map(producto =>
          <Producto id={producto.id} title={producto.title} price={producto.price}category={producto.category}
           image={producto.image} />
            
           )}
           <button onClick={filtrar}>filtrar</button>
      </div>
  
     )
}

export default Productos;
    


