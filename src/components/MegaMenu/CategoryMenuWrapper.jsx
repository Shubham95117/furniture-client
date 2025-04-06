// src/components/CategoryMenuWrapper.jsx
import React, { useState } from "react";
import CategoryNav from "../Header/CategoryNav";
import MegaMenuCard from "./MegaMenuCard";
import { Container } from "react-bootstrap";

const CategoryMenuWrapper = () => {
  const [activeCategory, setActiveCategory] = useState("");

  // Clear the active category when the mouse leaves the common container
  const handleMouseLeave = () => setActiveCategory("");

  return (
    <Container fluid onMouseLeave={handleMouseLeave}>
      <CategoryNav onCategorySelect={setActiveCategory} />
      {/* Keep the mega menu visible if the user hovers on it */}
      {activeCategory && (
        <div onMouseEnter={() => setActiveCategory(activeCategory)}>
          <MegaMenuCard activeCategory={activeCategory} />
        </div>
      )}
    </Container>
  );
};

export default CategoryMenuWrapper;
