 import React,{useEffect} from "react";
 import {Link} from "react-router-dom";
 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 function Producto({
    id,
    title,
    price,
    category,
    description,
    image
 })
 {
    useEffect(
        ()=>{
            console.log(title)
        },
        [title]
    )

    return(
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Title>{category}</Card.Title>
      <Card.Img variant="top" src={image} style={{ width: '100', height:'180px' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary"><Link to={`/producto/${id}`}> ver Producto</Link></Button> 
      </Card.Body>
    </Card>
  
        </div>
    )
 }
 
 export default Producto
