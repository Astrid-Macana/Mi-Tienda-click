 import React,{useEffect} from "react";
 import {Link} from "react-router-dom";
 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";   
 import "./Producto.css"                  

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

    return (
      // <Container>
      //   <Row>
      //     <Col xs={6} md={4}>
      //       <Card style={{ width: "18rem" }}>
      //         <Card.Title>{category}</Card.Title>
      //         <Card.Img
      //           variant="top"
      //           src={image}
      //           style={{ width: "100", height: "180px" }}
      //         />
      //         <Card.Body className="fila">
      //           <Card.Title>{title}</Card.Title>
      //           <Card.Text>{description}</Card.Text>
      //           <Card.Text>{price}</Card.Text>
      //           <Button variant="primary">
      //             <Link to={`/producto/${id}`}> ver Producto</Link>
      //           </Button>
      //         </Card.Body>
      //       </Card>
      //     </Col>
      //     <Col xs={6} md={4}>
      //       <Card style={{ width: "18rem" }}>
      //         <Card.Title>{category}</Card.Title>
      //         <Card.Img
      //           variant="top"
      //           src={image}
      //           style={{ width: "100", height: "180px" }}
      //         />
      <Row s={1} md={4} className="g-2">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src={image}
                style={{ width: "18rem"}}
              />
              <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}</Card.Text>
                <Button variant="primary">
                  <Link to={`/producto/${id}`}> ver Producto</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
 }
 
 export default Producto
