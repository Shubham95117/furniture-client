// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import ComingSoon from "../pages/ComingSoon";
import Home from "../pages/Home";
import AuthPage from "../AuthPage";
import Profile from "../pages/Profile";
import ProtectedRoute from "./ProtectedRoute";
import AboutPage from "../pages/AboutPage";

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
      <Route path="/login" element={<AuthPage />} />
      <Route path="/about" element={<AboutPage />} />

      {/* Protected Profile Route */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Fallback route */}
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default AppRoutes;
