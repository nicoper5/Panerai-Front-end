import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function CheckoutNavbar() {
  return (
    <Navbar bg="black" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as="span" className="fs-6 logo-panerai">
          <Link to="/" className="logo-panerai">
            PANERAI
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default CheckoutNavbar;
