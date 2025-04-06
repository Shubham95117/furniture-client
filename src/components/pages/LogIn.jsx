import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={5}>
          <AuthForm mode="login" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
