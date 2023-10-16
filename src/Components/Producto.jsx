 import React,{useEffect} from "react";
 import {Link} from "react-router-dom";
 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from "react-bootstrap/Container";
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
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Title>{category}</Card.Title>
              <Card.Img
                variant="top"
                src={image}
                style={{ width: "100", height: "180px" }}
              />
              <Card.Body className="fila">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}</Card.Text>
                <Button variant="primary">
                  <Link to={`/producto/${id}`}> ver Producto</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Title>{category}</Card.Title>
              <Card.Img
                variant="top"
                src={image}
                style={{ width: "100", height: "180px" }}
              />
              <Card.Body className="fila">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}</Card.Text>
                <Button variant="primary">
                  <Link to={`/producto/${id}`}> ver Producto</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Title>{category}</Card.Title>
              <Card.Img
                variant="top"
                src={image}
                style={{ width: "100", height: "180px" }}
              />
              <Card.Body className="fila">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}</Card.Text>
                <Button variant="primary">
                  <Link to={`/producto/${id}`}> ver Producto</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
 }
 
 export default Producto
