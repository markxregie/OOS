// components/admin/dashboard.js
import React, { useState, useEffect } from "react";
import "../admin/dashboard.css";
import { Line, Bar } from 'react-chartjs-2';
import { Container, Row, Col, Card } from "react-bootstrap";
import { HouseDoorFill, PeopleFill, CupFill, ListCheck, BellFill, PersonFill, CurrencyDollar } from "react-bootstrap-icons";

import {
    Chart as ChartJS,
    LineElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    LineElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    Tooltip,
    Legend
);

const Dashboard = () => {
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

    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Orders',
                data: [65, 59, 80, 81, 56],
                borderColor: '#4a9ba5',
                backgroundColor: 'rgba(74, 155, 165, 0.2)',
                tension: 0.4
            }
        ]
    };

    const barData = {
        labels: ['Coffee', 'Rice meals', 'Milktea', 'Fruit tea'],
        datasets: [
            {
                label: 'Sales',
                data: [120, 90, 70, 110],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };
    const coffeeData = {
        labels: ['Espresso', 'Latte', 'Cappuccino', 'Americano'],
        datasets: [
            {
                label: 'Best Selling Coffee',
                data: [75, 100, 60, 90],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };
    

    return (
        <div className="d-flex" style={{ height: "100vh", backgroundColor: "#edf7f9" }}>
            <Container fluid className="p-4 main-content" style={{ marginLeft: "260px", width: "calc(100% - 260px)" }}>
                <Row className="mb-3 align-items-start">
                    <Col md={6} className="d-flex align-items-center gap-2">
                        <HouseDoorFill size={24} style={{ color: "#4a9ba5" }} />
                        <h4 className="mb-0" style={{ color: "#4a9ba5", fontSize: "2rem" }}>Dashboard</h4>
                    </Col>

                    <Col md={6} className="d-flex flex-column align-items-md-end align-items-center gap-3 custom-margin">
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

                <Row className="mb-4 gx-2">
                    <Col md={3} className="px-1">
                        <Card className="p-3 text-center h-100 border-0 shadow-sm" style={{ minHeight: '170px', backgroundColor: '#FFFFFF' }}>
                            <PeopleFill size={32} className="mb-2" style={{ color: '#4a9ba5' }} />
                            <h3 className="mb-1" style={{ fontSize: "2.2rem" }}>20</h3>
                            <div className="text-muted" style={{ fontSize: "0.9rem" }}>TOTAL USERS</div>
                        </Card>
                    </Col>
                    <Col md={3} className="px-1">
                        <Card className="p-3 text-center h-100 border-0 shadow-sm" style={{ minHeight: '170px', backgroundColor: '#FFFFFF' }}>
                            <CupFill size={32} className="mb-2" style={{ color: '#4a9ba5' }} />
                            <h3 className="mb-1" style={{ fontSize: "2.2rem" }}>51</h3>
                            <div className="text-muted" style={{ fontSize: "0.9rem" }}>TOTAL PRODUCTS</div>
                        </Card>
                    </Col>
                    <Col md={3} className="px-1">
                        <Card className="p-3 text-center h-100 border-0 shadow-sm" style={{ minHeight: '170px', backgroundColor: '#FFFFFF' }}>
                            <ListCheck size={32} className="mb-2" style={{ color: '#4a9ba5' }} />
                            <h3 className="mb-1" style={{ fontSize: "2.2rem" }}>300</h3>
                            <div className="text-muted" style={{ fontSize: "0.9rem" }}>TOTAL ORDERS</div>
                        </Card>
                    </Col>
                    <Col md={3} className="px-1">
                        <Card className="p-3 text-center h-100 border-0 shadow-sm" style={{ minHeight: '170px', backgroundColor: '#FFFFFF' }}>
                            <CurrencyDollar size={32} className="mb-2" style={{ color: '#4a9ba5' }} />
                            <h3 className="mb-1" style={{ fontSize: "2.2rem" }}>$12,345</h3>
                            <div className="text-muted" style={{ fontSize: "0.9rem" }}>TOTAL REVENUE</div>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4 justify-content-center">
                    <Col md={4} className="d-flex justify-content-center" >
                        <Card className="p-4 shadow-sm chart-card" style={{ backgroundColor: '#FFFFFF' }} >
                            <h5 className="mb-3 text-muted">Order Trends</h5>
                            <Line data={lineData} />
                        </Card>
                    </Col>
                    <Col md={4} className="d-flex justify-content-center">
                        <Card className="p-4 shadow-sm chart-card" style={{ backgroundColor: '#FFFFFF' }}>
                            <h5 className="mb-3 text-muted">Top Categories</h5>
                            <Bar data={barData} />
                        </Card>
                    </Col>
                    <Col md={4} className="d-flex justify-content-center">
                        <Card className="p-4 shadow-sm chart-card" style={{ backgroundColor: '#FFFFFF' }}>
                            <h5 className="mb-3 text-muted">Best Selling Coffee</h5>
                            <Bar data={coffeeData} />
                        </Card>
                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default Dashboard;