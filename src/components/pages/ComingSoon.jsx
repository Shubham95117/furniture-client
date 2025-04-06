// src/pages/ComingSoon.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ComingSoon = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center p-5 shadow">
            <Card.Body>
              <Card.Title as="h1">Coming Soon...</Card.Title>
              <Card.Text>
                This page is under construction. Please check back soon!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ComingSoon;
