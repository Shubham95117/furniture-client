import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import "../styles/Header.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const placeholderTexts = [
    "Search for Sofas",
    "Search for Chairs",
    "Search for Beds",
  ];
  const typingSpeed = 100; // Speed of typing (ms per letter)
  const pauseBetweenWords = 2000; // Pause before typing next phrase

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;

    const typeNextLetter = () => {
      if (charIndex < placeholderTexts[textIndex].length) {
        setPlaceholder(placeholderTexts[textIndex].slice(0, charIndex + 1)); // Slice adds characters one by one
        charIndex++;
        setTimeout(typeNextLetter, typingSpeed);
      } else {
        // Pause before moving to next word
        setTimeout(() => {
          charIndex = 0;
          textIndex = (textIndex + 1) % placeholderTexts.length; // Cycle words
          setPlaceholder(""); // Clear before starting the next word
          setTimeout(typeNextLetter, typingSpeed);
        }, pauseBetweenWords);
      }
    };

    typeNextLetter(); // Start typing effect

    return () => clearTimeout(typeNextLetter);
  }, []);

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="search-icon" onClick={handleSearchClick}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
