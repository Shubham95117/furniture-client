// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import ComingSoon from "../pages/ComingSoon";
import Home from "../pages/Home";
import Accounts from "../Accounts";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Other specific routes */}
      <Route path="/franchise-enquiry" element={<ComingSoon />} />
      <Route path="/warranty-registration" element={<ComingSoon />} />
      <Route path="/track-order" element={<ComingSoon />} />
      <Route path="/our-store" element={<ComingSoon />} />
      <Route path="/best-deal" element={<ComingSoon />} />
      <Route path="/login" element={<Accounts />} />

      {/* Fallback route */}
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default AppRoutes;
