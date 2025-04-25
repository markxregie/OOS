// src/components/admin/manageorders.js
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CartFill, BellFill, PersonFill } from "react-bootstrap-icons";
import "../admin/manageorder.css";

const ManageOrders = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="d-flex" style={{ height: "100vh", backgroundColor: "#edf7f9" }}>
      <Container fluid className="p-4 main-content" style={{ marginLeft: "260px", width: "calc(100% - 260px)" }}>
        <Row className="mb-3 align-items-start">
          <Col md={6} className="d-flex align-items-center gap-2">
            <CartFill size={24} style={{ color: "#4a9ba5" }} />
            <h4 className="mb-0" style={{ color: "#4a9ba5", fontSize: "2rem"}}> Manage Orders</h4>
          </Col>

          <Col md={6} className="d-flex flex-column align-items-md-end align-items-center gap-3 order-margin">
            <div className="d-flex align-items-center gap-4">
              <div
                style={{
                  position: "relative",
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <BellFill size={28} style={{ color: "#555" }} />
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "18px",
                    backgroundColor: "#ff3d3d",
                    borderRadius: "50%",
                    width: "10px",
                    height: "10px"
                  }}
                ></span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  padding: "8px 16px",
                  borderRadius: "40px",
                  gap: "10px"
                }}
              >
                <div 
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#4a9ba5",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <PersonFill size={16} style={{ color: "#fff" }} />
                </div>
                <div>
                  <h6 className="mb-0" style={{ color: "#4a9ba5" }}>Juan Dela Cruz</h6>
                  <small className="text-muted">Admin</small>
                </div>
              </div>
            </div>

            <div className="text-md-end text-center">
              <small className="text-muted" style={{ fontSize: "1rem" }}>
                {formattedDate}
              </small>
            </div>
          </Col>
        </Row>
        
        {/* Add your orders management content here */}
      </Container>
    </div>
  );
};

export default ManageOrders;