import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import { CartFill, BellFill, PersonFill, Search, EyeFill, PencilFill, TrashFill } from "react-bootstrap-icons";
import "../admin/manageorder.css";

const ManageOrders = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");

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

  // Sample order data
  const orders = [
    { id: 1, customer: "Maria Santos", total: 1250.75, status: "completed", date: "2023-05-15" },
    { id: 2, customer: "Juan Dela Cruz", total: 899.50, status: "processing", date: "2023-05-16" },
    { id: 3, customer: "Anna Reyes", total: 2450.00, status: "pending", date: "2023-05-16" },
    { id: 4, customer: "Carlos Gomez", total: 575.25, status: "cancelled", date: "2023-05-17" },
    { id: 5, customer: "Liza Soberano", total: 3200.00, status: "completed", date: "2023-05-18" },
  ];

  const filteredOrders = orders.filter(order => 
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toString().includes(searchTerm) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status) => {
    switch(status) {
      case 'pending':
        return <span className="status-badge status-pending">Pending</span>;
      case 'processing':
        return <span className="status-badge status-processing">Processing</span>;
      case 'completed':
        return <span className="status-badge status-completed">Completed</span>;
      case 'cancelled':
        return <span className="status-badge status-cancelled">Cancelled</span>;
      default:
        return <span className="status-badge">{status}</span>;
    }
  };

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
        
        {/* Orders Table */}
        <div className="table-container">
          <div className="table-header">
            <h5 style={{ color: "#4a9ba5" }}>Recent Orders</h5>
            <div className="position-relative">
              <Search className="position-absolute" style={{ top: "10px", left: "12px", color: "#6c757d" }} />
              <Form.Control 
                type="text" 
                placeholder="Search orders..." 
                className="search-input ps-4" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <Table className="orders-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Order Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>₱{order.total.toFixed(2)}</td>
                  <td>{getStatusBadge(order.status)}</td>
                  <td>
                    <button className="action-btn view" title="View">
                      <EyeFill />
                    </button>
                    <button className="action-btn edit" title="Edit">
                      <PencilFill />
                    </button>
                    <button className="action-btn delete" title="Delete">
                      <TrashFill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default ManageOrders;