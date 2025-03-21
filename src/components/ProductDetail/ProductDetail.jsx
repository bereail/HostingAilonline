import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import products from "../../Data/Products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  if (!product) return <h2>Producto no encontrado</h2>;

  // Función para abrir la imagen en el modal
  const handleShow = (img) => {
    setSelectedImage(img);
    setShow(true);
  };

  return (
    <Container className="my-4">
      <h2 className="text-center fw-bold">{product.name}</h2>
      <Row className="mt-4">
        <Col md={6}>
          <h5 className="text-danger fw-bold">Producto</h5>
          <p className="fw-semibold">{product.name}</p>
        </Col>
        <Col md={6} className="text-center">
          <Image
            src={product.img}
            alt={product.name}
            fluid
            onClick={() => handleShow(product.img)} // Click en imagen principal
            style={{ cursor: "pointer" }}
          />
        </Col>
      </Row>

      <h4 className="text-danger text-center fw-bold mt-5">GALERÍA DE IMÁGENES</h4>
      <Row className="mt-3">
        {product.gallery.map((img, index) => (
          <Col key={index} xs={4} md={2} className="text-center">
            <Image
              src={img}
              alt={product.name}
              fluid
              thumbnail
              onClick={() => handleShow(img)} // Click en imagen de galería
              style={{ cursor: "pointer" }}
            />
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Link to="/" className="btn btn-secondary">Volver</Link>
      </div>

      {/* Modal para mostrar la imagen ampliada */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body className="text-center">
          <Image src={selectedImage} alt="Imagen ampliada" fluid />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProductDetail;
