// src/components/ShopByRoomSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import LivingRoom from "./icons/LivingRoom"; // Import your SVG icon component
import BedRoom from "./icons/BedRoom"; // Import your SVG icon component
// Import other icons as needed

// An array of room categories along with their corresponding icon component and query slug.
const roomCategories = [
  { name: "Living Room", slug: "living-room", Icon: LivingRoom },
  { name: "Bed Room", slug: "bed-room", Icon: BedRoom },
];

const ShopByRoomSection = () => {
  const navigate = useNavigate();

  // When a room is clicked, navigate to the search page with the room parameter.
  const handleRoomClick = (slug) => {
    navigate(`/search?room=${encodeURIComponent(slug)}`);
  };

  return (
    <section className="shop-by-room-section">
      <h2
        className="d-flex justify-content-center "
        style={{ fontSize: "30px", color: "#444444", fontWeight: "400" }}
      >
        Shop By Room
      </h2>
      <div
        className="room-icons d-flex justify-content-center"
        style={{ display: "flex", gap: "1rem" }}
      >
        {roomCategories.map((room) => (
          <div
            key={room.slug}
            className="room-category-card"
            style={{ cursor: "pointer", textAlign: "center" }}
            onClick={() => handleRoomClick(room.slug)}
          >
            <room.Icon width={80} height={80} fill="silver" />
            <p>{room.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByRoomSection;
