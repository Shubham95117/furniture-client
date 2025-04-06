import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const AuthForm = ({ mode }) => (
  <Card className="shadow p-4">
    {mode === "login" && <h3 className="text-center mb-4">Customer Login</h3>}
    {mode === "register" && (
      <h3 className="text-center mb-4">Create Account</h3>
    )}
    <Form>
      {mode === "register" && (
        <>
          <Form.Group controlId="registerFirstName" className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" required />
          </Form.Group>
          <Form.Group controlId="registerLastName" className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" required />
          </Form.Group>
          <Form.Group controlId="registerMobile" className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter mobile number"
              required
            />
          </Form.Group>
        </>
      )}
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" required />
      </Form.Group>
      {mode === "login" && (
        <div className="text-right mb-3">
          <a href="/forgot-password">Forgot your password?</a>
        </div>
      )}
      <Button
        variant={mode === "login" ? "primary" : "success"}
        type="submit"
        className="w-100"
      >
        {mode === "login" ? "Login" : "Sign Up"}
      </Button>
    </Form>
  </Card>
);

export default AuthForm;
