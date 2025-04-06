// src/components/NavigationBar.js
import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CardDropdown from "../MegaMenu/CardDropdown";

const NavigationBar = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                Living Room
              </Nav.Link>
              <Nav.Link
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                Bed Room
              </Nav.Link>
              <Nav.Link
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                Dining Room
              </Nav.Link>
              <Nav.Link
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                Home Office
              </Nav.Link>{" "}
              <Nav.Link
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                Kids Furniture
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mega menu dropdown */}
      {showMegaMenu && (
        <div
          onMouseEnter={() => setShowMegaMenu(true)}
          onMouseLeave={() => setShowMegaMenu(false)}
          style={{
            position: "absolute",
            width: "100%",
            top: "70px",
            zIndex: 1000,
            backgroundColor: "#fff",
            borderTop: "1px solid #ddd",
          }}
        >
          <Container>
            <CardDropdown />
          </Container>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
