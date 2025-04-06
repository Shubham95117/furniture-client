// src/pages/Account.jsx
import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Account = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const returnUrl = queryParams.get("return_url") || "/account";

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in...");
    navigate(returnUrl);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering new account...");
    navigate(returnUrl);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Row className="align-items-stretch">
            {/* Customer Login Section */}
            <Col md={6} className="mb-4">
              <Card className="shadow p-4 h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center mb-4">
                    Customer Login
                  </Card.Title>
                  <Form onSubmit={handleLogin} className="flex-grow-1">
                    <Form.Group controlId="loginEmail" className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="loginPassword" className="mb-3">
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        required
                      />
                    </Form.Group>
                    <div className="text-end mb-3 d-flex justify-content-center">
                      <a href="/forgot-password" style={{ color: "black" }}>
                        Forgot your password?
                      </a>
                    </div>
                    <Button
                      variant="primary"
                      type="submit"
                      style={{
                        maxWidth: "200px",
                        margin: "0 auto",
                        display: "block",
                        background: "#0093dd",
                      }}
                    >
                      Login
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Create Account Section */}
            <Col md={6} className="mb-4">
              <Card className="shadow p-4 h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center mb-4">
                    Create Account
                  </Card.Title>
                  <Form onSubmit={handleRegister} className="flex-grow-1">
                    <Form.Group controlId="registerFirstName" className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="First Name (*)"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="registerLastName" className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Last Name (*)"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="registerMobile" className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Mobile (*)"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="registerEmail" className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Email id (*)"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="registerPassword" className="mb-3">
                      <Form.Control
                        type="password"
                        placeholder="Password (*)"
                        required
                      />
                    </Form.Group>
                    <Button
                      variant="success"
                      type="submit"
                      style={{
                        maxWidth: "200px",
                        margin: "0 auto",
                        display: "block",
                        background: "#0093dd",
                      }}
                    >
                      Sign Up
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
