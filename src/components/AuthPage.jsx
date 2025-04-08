// src/pages/Account.jsx (or AuthPage.jsx)
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// Import your async thunks from your auth slice
import { loginUser, signupUser } from "../store/authSlice";

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const returnUrl = queryParams.get("return_url") || "/account";

  // Local state for login inputs
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Local state for signup inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // Extract loading and error state from auth slice
  const { loading, error } = useSelector((state) => state.auth);

  // Handle form submission for login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Dispatch login async action with email and password
      await dispatch(
        loginUser({ email: loginEmail, password: loginPassword })
      ).unwrap();
      navigate(returnUrl);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  // Handle form submission for registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Dispatch signup async action with necessary profile fields
      await dispatch(
        signupUser({
          email: registerEmail,
          password: registerPassword,
          firstName,
          lastName,
          mobile,
        })
      ).unwrap();
      navigate(returnUrl);
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <Container className="my-5">
      {/* Error handling */}
      {error && <Alert variant="danger">{error}</Alert>}

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
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="loginPassword" className="mb-3">
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
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
                      disabled={loading}
                      style={{
                        maxWidth: "200px",
                        margin: "0 auto",
                        display: "block",
                        background: "#0093dd",
                      }}
                    >
                      {loading ? (
                        <Spinner animation="border" size="sm" />
                      ) : (
                        "Login"
                      )}
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
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="registerLastName" className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Last Name (*)"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="registerMobile" className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Mobile (*)"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="registerEmail" className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Email id (*)"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="registerPassword" className="mb-3">
                      <Form.Control
                        type="password"
                        placeholder="Password (*)"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Button
                      variant="success"
                      type="submit"
                      disabled={loading}
                      style={{
                        maxWidth: "200px",
                        margin: "0 auto",
                        display: "block",
                        background: "#0093dd",
                      }}
                    >
                      {loading ? (
                        <Spinner animation="border" size="sm" />
                      ) : (
                        "Sign Up"
                      )}
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

export default AuthPage;
