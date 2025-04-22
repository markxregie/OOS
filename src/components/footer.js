import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from '../assets/png.png'; 
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-custom py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          {/* Logo Column - Image Only */}
          <Col md={3} className="mb-3 mb-md-0">
            <div className="logo-container">
              <img 
                src={logo} 
                alt="Bleu Bean Cafe Logo" 
                className="img-fluid"
                style={{ maxHeight: '200px', width: 'auto' }}
              />
            </div>
          </Col>

          {/* Horizontal Sections Container */}
          <Col md={9}>
            <Row>
              {/* Follow Us Column */}
              <Col md={4} className="mb-3 mb-md-0">
                <h5 className="mb-3 text-custom">Follow Us</h5>
                <div className="social-icons">
                  <a href="#" className="text-custom me-3">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="text-custom me-3">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="text-custom me-3">
                    <i className="bi bi-twitter"></i>
                  </a>
                </div>
              </Col>

              {/* Contact Column */}
              <Col md={4} className="mb-3 mb-md-0">
                <h5 className="mb-3 text-custom text-start">Contact</h5>
                <p className="mb-1 text-custom text-start">
                  <i className="bi bi-geo-alt-fill me-2"></i> 123 Cafe Street
                </p>
                <p className="mb-1 text-custom text-start">
                  <i className="bi bi-telephone-fill me-2"></i> (123) 456-7890
                </p>
                <p className="mb-0 text-custom text-start">
                  <i className="bi bi-envelope-fill me-2"></i> info@bleubeancafe.com
                </p>
              </Col>


              {/* Hours Column */}
              <Col md={4}>
                <h5 className="mb-3 text-custom text-start">Hours</h5>
                <p className="mb-1 text-custom text-start">Mon-Fri: 7am - 9pm</p>
                <p className="mb-1 text-custom text-start">Sat-Sun: 8am - 10pm</p>
              </Col>

            </Row>
          </Col>
        </Row>

        {/* Copyright Row */}
        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0 small text-custom">
              © {new Date().getFullYear()} Bleu Bean Cafe. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;