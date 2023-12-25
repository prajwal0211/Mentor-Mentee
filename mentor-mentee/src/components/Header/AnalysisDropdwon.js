import React, { useState, useEffect } from "react";
import { isActive } from "./Header";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useLocation } from "react-router-dom";
import { useActiveSection } from "../../ActiveSectionContext";

function AnalysisDropdwon() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdownItem, setActiveDropdownItem] = useState(
    "engagement-activities"
  );
  const location = useLocation();
  const { activeSection } = useActiveSection();

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleLinkClick = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setActiveDropdownItem(sectionId);
    }
  };
  useEffect(() => {
    setActiveDropdownItem(activeSection);
  }, [activeSection]);

  return (
    <NavDropdown
      title={
        <NavLink
          to="analysis"
          className={`${
            isActive(location.pathname, "/analysis")
              ? "text-info text-decoration-none"
              : "text-secondary text-decoration-none"
          }`}
          onClick={() => handleLinkClick("engagement-activities")}
        >
          Analysis
        </NavLink>
      }
      id="basic-nav-dropdown"
      show={dropdownOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="custom-dropdown"
    >
      <NavDropdown.Item
        className={`${
          activeDropdownItem === "engagement-activities"
            ? "text-info"
            : "text-secondary"
        }`}
        onClick={() => handleLinkClick("engagement-activities")}
      >
        Engagement Activities
      </NavDropdown.Item>
      <NavDropdown.Item
        className={`${
          activeDropdownItem === "attendance" ? "text-info" : "text-secondary"
        }`}
        onClick={() => handleLinkClick("attendance")}
      >
        Attendance
      </NavDropdown.Item>
      <NavDropdown.Item
        className={`${
          activeDropdownItem === "marks" ? "text-info" : "text-secondary"
        }`}
        onClick={() => handleLinkClick("marks")}
      >
        Marks
      </NavDropdown.Item>
      <NavDropdown.Item
        className={`${
          activeDropdownItem === "courses" ? "text-info" : "text-secondary"
        }`}
        onClick={() => handleLinkClick("courses")}
      >
        Courses
      </NavDropdown.Item>
      <NavDropdown.Item
        className={`${
          activeDropdownItem === "publications" ? "text-info" : "text-secondary"
        }`}
        onClick={() => handleLinkClick("publications")}
      >
        Publications
      </NavDropdown.Item>
    </NavDropdown>
  );
}

export default AnalysisDropdwon;
