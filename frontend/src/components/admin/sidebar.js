import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";  // Import useLocation to track the active route
import logo from "../../assets/logo.jpg";
import { 
  HouseDoorFill, 
  CartFill, 
  ChatDotsFill, 
  BoxArrowRight 
} from "react-bootstrap-icons";

const Sidebar = () => {
  const [activeKey, setActiveKey] = useState("/admin/dashboard"); // Default active link
  const location = useLocation(); // Get current route location

  // Update active key based on the current route
  React.useEffect(() => {
    setActiveKey(location.pathname);
  }, [location]);

  return (
    <div
      style={{ 
        width: "260px", 
        backgroundColor: "#ffffff",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0
      }}
      className="d-flex flex-column justify-content-between p-3 border-end"
    >
      <div>
        <div className="text-center mb-4">
          <div className="d-flex justify-content-center mb-3">
            <img 
              src={logo}
              alt="Admin Logo" 
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",  
                objectFit: "cover"
              }} 
            />
          </div>
          <h6 className="mt-2 text-muted">Bleu Bean Cafe</h6>
          <small className="text-muted">Admin</small>
        </div>
        
        <Nav activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)} className="flex-column">
          <Nav.Link 
            as={Link} 
            to="/admin/dashboard" 
            className="d-flex align-items-center py-3"
            style={{ color: "#5caab3", borderRadius: "8px" }}
          >
            <HouseDoorFill className="me-3" size={18} /> 
            <span>Dashboard</span>
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/admin/manageorders" 
            className="d-flex align-items-center py-3 text-dark"
            style={{ borderRadius: "8px" }}
          >
            <CartFill className="me-3" size={18} /> 
            <span>Manage Orders</span>
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/admin/inbox" 
            className="d-flex align-items-center py-3 text-dark"
            style={{ borderRadius: "8px" }}
          >
            <ChatDotsFill className="me-3" size={18} /> 
            <span>Inbox</span>
          </Nav.Link>
        </Nav>
      </div>
      
      <Nav.Link 
        href="#" 
        className="d-flex align-items-center py-3 text-danger mb-3"
        style={{ borderRadius: "8px" }}
      >
        <BoxArrowRight className="me-3" size={18} /> 
        <span>Logout</span>
      </Nav.Link>
    </div>
  );
};

export default Sidebar;
