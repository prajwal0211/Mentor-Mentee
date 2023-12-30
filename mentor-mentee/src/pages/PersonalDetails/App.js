import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useRef } from "react";
import MyCenteredForm from "./CenteredForm";
import AcademicsPage from "./AcademicsPage";
import Sheet from "./Sheet";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyCenteredForm />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/sheet" element={<Sheet />} />
      </Routes>
    </Router>
  );
};

export default App;
