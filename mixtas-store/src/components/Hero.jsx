import { Container, Row, Col, Button } from "react-bootstrap";

export default function Hero() {
  return (
    <div className="bg-light py-5 mb-5">
      <Container>
        <Row className="align-items-center py-4">
          <Col md={6}>
            <span className="text-uppercase text-muted small fw-semibold">
              Urban Edge
            </span>
            <h1 className="display-4 fw-bold my-3 text-dark">
              Jackets for the <br /> Modern Man
            </h1>
            <Button variant="dark" className="px-4 py-2 mt-2 rounded-1">
              Discovery Now
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop"
              alt="Hero Fashion"
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}