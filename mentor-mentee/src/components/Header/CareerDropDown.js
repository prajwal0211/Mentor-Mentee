import React, { useState, useEffect } from "react";
import { isActive } from "./Header";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useActiveSection } from "../../ActiveSectionContext";


function CareerDropDown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdownItem, setActiveDropdownItem] = useState("lor");
  const location = useLocation();
  const { activeSection } = useActiveSection();
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleLinkClick = (sectionId) => {
    setActiveDropdownItem(sectionId);
    navigate(`/mentee/${sectionId.toLowerCase()}`); // Assuming your routes are lowercase
  };

  useEffect(() => {
    setActiveDropdownItem(activeSection);
  }, [activeSection]);

  return (
    <div>
      <NavDropdown
        title={
          <NavLink
            to="career"
            className={`${
              isActive(location.pathname, "/mentee/career")
                ? "text-info text-decoration-none"
                : "text-secondary text-decoration-none"
            }`}
            onClick={() => handleLinkClick("lor")}
          >
            Career
          </NavLink>
        }
        id="career-dropdown"
        show={dropdownOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="custom-dropdown"
      >
        <NavDropdown.Item
          className={`${
            activeDropdownItem === "lor" ? "text-info" : "text-secondary"
          }`}
          onClick={() => handleLinkClick("lor")}
        >
          Letter of Recommendation (LOR)
        </NavDropdown.Item>
        <NavDropdown.Item
          className={`${
            activeDropdownItem === "universities" ? "text-info" : "text-secondary"
          }`}
          onClick={() => handleLinkClick("universities")}
        >
          Universities
        </NavDropdown.Item>
        <NavDropdown.Item
          className={`${
            activeDropdownItem === "jobrecord" ? "text-info" : "text-secondary"
          }`}
          onClick={() => handleLinkClick("jobrecord")}
        >
          Job Record
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default CareerDropDown;