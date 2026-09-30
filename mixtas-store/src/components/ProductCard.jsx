import { Card } from "react-bootstrap";

export default function ProductCard({ image, category, title, price, children }) {
  return (
    <Card className="h-100 border-0 text-start">
      <div className="bg-light p-3 rounded text-center">
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          style={{ height: "200px", objectFit: "contain" }}
        />
      </div>
      <Card.Body className="px-0 pt-3">
        <span className="text-uppercase text-muted small d-block mb-1">
          {category}
        </span>
        <Card.Title className="fs-6 fw-semibold text-dark text-truncate">
          {title}
        </Card.Title>
        <div className="d-flex align-items-center justify-content-between mt-2">
          <span className="fw-bold text-dark">${price}</span>
          {children}
        </div>
      </Card.Body>
    </Card>
  );
}