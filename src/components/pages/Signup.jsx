import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={5}>
          <AuthForm mode="register" />
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
