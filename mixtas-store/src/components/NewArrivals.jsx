import { Container, Row, Col, Nav } from "react-bootstrap";
import ProductCard from "./ProductCard";

const productsData = [
  {
    id: 1,
    title: "adidas X Pop Polo shirt, navy / blue",
    category: "JACKETS",
    price: "69.99",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "adidas x Pop TRX Vintage, navy / white",
    category: "JACKETS",
    price: "69.99",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "adidas X Pop Beckenbauer Track Jacket",
    category: "JACKETS",
    price: "120.00",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop",
    rating: "★★★★★",
  },
  {
    id: 4,
    title: "adidas X Pop Classic t-shirt, grey / navy",
    category: "JACKETS",
    price: "120.00",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&auto=format&fit=crop",
  },
];

export default function NewArrivals() {
  return (
    <Container className="my-5 text-center">
      <h2 className="fw-bold mb-3">New Arrivals</h2>

      <Nav defaultActiveKey="women" className="justify-content-center mb-4 gap-2">
        <Nav.Item>
          <Nav.Link eventKey="women" className="text-dark fw-bold border-bottom border-2 border-dark px-2">
            WOMEN
          </Nav.Link>
        </Nav.Item>
        <Nav.Item><Nav.Link eventKey="men" className="text-muted px-2">MEN</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="shoes" className="text-muted px-2">SHOES</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="bags" className="text-muted px-2">BAGS</Nav.Link></Nav.Item>
      </Nav>

      <Row className="g-4">
        {productsData.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={3}>
            <ProductCard
              image={product.image}
              category={product.category}
              title={product.title}
              price={product.price}
            >
              {product.rating && (
                <small className="text-warning">{product.rating}</small>
              )}
            </ProductCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}