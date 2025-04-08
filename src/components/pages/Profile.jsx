// src/pages/Profile.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { logout } from "../../store/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow p-4">
            <Card.Body>
              <Card.Title>My Account</Card.Title>
              <p>
                <strong>Name:</strong> {`${user.firstName} ${user.lastName}`}
              </p>
              <p>
                <strong>Email Id:</strong> {user.email}
              </p>
              <p>
                <strong>Mobile:</strong> {user.mobile}
              </p>
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card className="shadow p-4">
            <Card.Body>
              <Card.Title>My Orders</Card.Title>
              <p>
                <strong>You haven't placed any orders yet.</strong>{" "}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
