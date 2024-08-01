import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AgencyLandingPage from "./demos/AgencyLandingPage"
import Portfolio from "./pages/Portfolio"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgencyLandingPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}
