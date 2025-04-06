// src/components/CategoryNav.jsx
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const CategoryNav = ({ onCategorySelect }) => {
  return (
    <Navbar bg="light">
      <Container>
        <Nav className="mx-auto">
          <Nav.Link
            onMouseEnter={() => onCategorySelect("Living Room")}
            style={{ cursor: "pointer" }}
          >
            Living Room
          </Nav.Link>
          <Nav.Link
            onMouseEnter={() => onCategorySelect("Bedroom")}
            style={{ cursor: "pointer" }}
          >
            Bedroom
          </Nav.Link>
          <Nav.Link
            onMouseEnter={() => onCategorySelect("Office")}
            style={{ cursor: "pointer" }}
          >
            office
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CategoryNav;
