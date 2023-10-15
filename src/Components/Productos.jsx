import React, { useState,useEffect } from "react";
import Producto from "./Producto";
import { getAllProductos } from "../services/ProductoServi";


// import "./Productos.css"

function Productos() {
    const titulo="Listado de preductos"
    const [productos,setProductos]= useState([]);

    useEffect(()=>{
        const result = async()=>{
         try{
            const responseDate= await getAllProductos();
            console.log(responseDate.data)
            setProductos(responseDate.data.results)

         }catch (e){
            console.log(e)
         }
        }
        result()
    },
    []);

    const filtrar =()=> {
        setProductos([
        {
         id:20,
         title: "DANVOUY Camiseta corta de algodón informal para mujer",
         price:12.99,
         category:"Ropa para mujer",
         image:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
     } ])
}
    return(
     <div>
         <h1 className="titulo">{titulo}</h1>
        {productos.map(producto =><Producto
            id={producto.id}
            title={producto.title}
            price={producto.price}
            category={producto.category}
            image={producto.image} />
            // </div>
        )}
        <button onClick={filtrar}>filtrar</button>
    </div>
    )
    }

export default Productos;
    


