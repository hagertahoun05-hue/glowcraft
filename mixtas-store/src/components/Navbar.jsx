import { Navbar, Nav, Container } from "react-bootstrap";
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-white py-3 border-bottom sticky-top">
      <Container>
        <Nav className="me-auto gap-3">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#shop">Shop</Nav.Link>
          <Nav.Link href="#pages">Pages</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>

        <Navbar.Brand href="#home" className="fw-bold fs-3 mx-auto">
          Mixtas
        </Navbar.Brand>

        <div className="d-flex align-items-center gap-3 ms-auto fs-5">
          <FiUser style={{ cursor: "pointer" }} />
          <FiSearch style={{ cursor: "pointer" }} />
          <FiHeart style={{ cursor: "pointer" }} />
          <FiShoppingBag style={{ cursor: "pointer" }} />
        </div>
      </Container>
    </Navbar>
  );
}