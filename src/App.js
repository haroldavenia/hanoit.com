import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AgencyLandingPage from "./demos/AgencyLandingPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgencyLandingPage />} />
      </Routes>
    </Router>
  );
}
