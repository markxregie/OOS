import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navLogo from '../assets/nav.png';
import cartIcon from '../assets/cart.svg';
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function AppHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle navigation to sections from other pages
  const handleSectionNavigation = (e, section) => {
    if (!isHomePage) {
      e.preventDefault();
      // Scroll to top first, then navigate and scroll to section
      window.scrollTo(0, 0);
      navigate('/', { state: { scrollTo: section } });
    } else {
      e.preventDefault();
      scrollToSection(section);
    }
  };

  // Handle scroll after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100); // Small delay to ensure the page has rendered
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  // Scroll to top when pathname changes (except for section navigation)
  useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex align-items-center justify-content-between">
        {/* Left - Logo */}
        <Navbar.Brand as={Link} to="/" className="me-lg-5 me-0">
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
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    scrollToSection('home');
                  }
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/menu"
                onClick={() => window.scrollTo(0, 0)}
              >
                Menu
              </Nav.Link>
              <Nav.Link 
                href="#about"
                onClick={(e) => handleSectionNavigation(e, 'about')}
              >
                About Us
              </Nav.Link>
              <Nav.Link 
                href="#services"
                onClick={(e) => handleSectionNavigation(e, 'services')}
              >
                Services
              </Nav.Link>
              <Nav.Link 
                href="#contact"
                onClick={(e) => handleSectionNavigation(e, 'contact')}
              >
                Contact Us
              </Nav.Link>
            </Nav>

            {/* Right - Cart and Buttons */}
            <div className="d-flex align-items-center cart-and-buttons">
              <Nav.Link as={Link} to="/cart" className="me-3">
                <img src={cartIcon} alt="Cart" className="cart-img" />
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <button className="btn btn-outline-primary">Sign In</button>
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/menu"
                onClick={() => window.scrollTo(0, 0)}
              >
                <button className="btn btn-primary ms-2">Order Now</button>
              </Nav.Link>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}