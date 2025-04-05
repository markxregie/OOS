import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navLogo from '../assets/nav.png';
import cartIcon from '../assets/cart.svg';
import './header.css';

export default function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex align-items-center justify-content-between">
        {/* Left - Logo */}
        <Navbar.Brand href="#home" className="me-lg-5 me-0">
          <img
            src={navLogo}
            alt="Bleu Bean Cafe"
            className="d-inline-block align-top logo-img"
          />
        </Navbar.Brand>

        {/* Toggle for smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex flex-column flex-lg-row justify-content-between w-100">
            {/* Center - Navigation links */}
            <Nav className="mx-auto gap-3 nav-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>

            {/* Right - Cart and Buttons */}
            <div className="d-flex align-items-center cart-and-buttons">
              <Nav.Link href="#cart" className="me-3">
                <img src={cartIcon} alt="Cart" className="cart-img" />
              </Nav.Link>
              <Nav.Link href="#signup">
                <button className="btn btn-outline-primary">Sign In</button>
              </Nav.Link>
              <Nav.Link href="#order-now">
                <button className="btn btn-primary ms-2">Order Now</button>
              </Nav.Link>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
