// src/components/MegaMenuCard.jsx
import React, { useState, useEffect } from "react";
import { Card, Row, Col, ListGroup, Image, Container } from "react-bootstrap";
import { megaMenuData, popularCategories } from "./megaMenuData";
import "../styles/megaMenu.css";
const MegaMenuCard = ({ activeCategory }) => {
  const activeData = megaMenuData[activeCategory];
  if (!activeData) return null;

  const [selectedMain, setSelectedMain] = useState(activeData.categories[0]);

  useEffect(() => {
    setSelectedMain(activeData.categories[0]);
  }, [activeCategory, activeData.categories]);

  return (
    <div className="mega-menu-dropdown">
      <Container className="mt-3" style={{ color: "red" }}>
        <Card className="p-3">
          <Row>
            {/* Column 1: Main Categories */}
            <Col md={3}>
              <ListGroup>
                {activeData.categories.map((cat) => (
                  <ListGroup.Item
                    key={cat}
                    active={selectedMain === cat}
                    onMouseEnter={() => setSelectedMain(cat)}
                    style={{ cursor: "pointer" }}
                    className="main-category"
                  >
                    {cat}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>

            {/* Column 2: Subcategories */}
            <Col md={3}>
              <ListGroup>
                {activeData.subcategories[selectedMain]?.map((subcat) => (
                  <ListGroup.Item key={subcat} style={{ cursor: "pointer" }}>
                    {subcat}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>

            {/* Column 3: Common Image */}
            <Col md={3} className="text-center">
              <Image src={activeData.image} alt={activeCategory} fluid />
            </Col>

            {/* Column 4: Popular Categories */}
            <Col md={3}>
              <h6 className="text-center">Popular Categories</h6>
              <ListGroup>
                {popularCategories.map((pop) => (
                  <ListGroup.Item key={pop} style={{ cursor: "pointer" }}>
                    {pop}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default MegaMenuCard;
