import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const CategoryNav = ({ onCategorySelect }) => {
  return (
    <Navbar bg="light">
      <Container>
        <Nav className="mx-auto">
          <Nav.Link
            onMouseEnter={() => onCategorySelect("Living Room")}
            style={{
              fontSize: "15px",
              color: "#000000",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#0093dd")}
            onMouseOut={(e) => (e.target.style.color = "black")}
          >
            Living Room
          </Nav.Link>
          <Nav.Link
            onMouseEnter={() => onCategorySelect("Bedroom")}
            style={{
              fontSize: "15px",
              color: "#000000",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#0093dd")}
            onMouseOut={(e) => (e.target.style.color = "black")}
          >
            Bedroom
          </Nav.Link>
          <Nav.Link
            onMouseEnter={() => onCategorySelect("Office")}
            style={{
              fontSize: "15px",
              color: "#000000",
              // fontWeight: "bolder",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#0093dd")}
            onMouseOut={(e) => (e.target.style.color = "black")}
          >
            Office
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CategoryNav;
