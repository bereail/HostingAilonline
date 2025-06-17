// src/components/ProductGrid.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../../Data/Products";

const ProductGrid = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold">ALGUNOS DE NUESTROS PRODUCTOS</h2>
      <Row className="mt-3 gx-1">
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-1">
            <Card
              className={`h-100 text-center shadow-sm ${
                hovered === product.id ? "shadow-lg" : ""
              }`}
              style={{
                transform: hovered === product.id ? "scale(0.80)" : "scale(0.70)",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Card.Img variant="top" src={product.img} alt={product.name} />
              <Card.Body>
                <Card.Title className="fw-semibold">{product.name}</Card.Title>
                <Link to={`/product/${product.id}`}>
                  <Button
                    variant={hovered === product.id ? "dark" : "danger"}
                    className="mt-1"
                  >
                    CONSULTAR
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;
