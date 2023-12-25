import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink, Link, useLocation } from "react-router-dom";
import AnalysisDropdwon from "./AnalysisDropdwon";

export const isActive = (currentPath, path) => {
  const isMentor = currentPath.startsWith("/mentor");
  const isMentee = currentPath.startsWith("/mentee");

  const cleanedCurrentPath = isMentor
    ? currentPath.replace("/mentor", "")
    : isMentee
    ? currentPath.replace("/mentee", "")
    : currentPath;

  const isPathActive =
    cleanedCurrentPath === path || cleanedCurrentPath.startsWith(`${path}/`);

  return isPathActive;
};

function Header() {
  const location = useLocation();

  return (
    <div className="bg-primary sticky-top">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="" className="text-light">
            Mentor Mentee
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-self-end">
              <Nav.Link
                as={NavLink}
                to="dashboard"
                className={`${
                  isActive(location.pathname, "/dashboard")
                    ? "text-info"
                    : "text-secondary "
                }`}
              >
                Dashboard
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="details"
                className={`${
                  isActive(location.pathname, "/details")
                    ? "text-info"
                    : "text-secondary "
                }`}
              >
                Personal Details
              </Nav.Link>
              <AnalysisDropdwon />
              <Nav.Link
                as={NavLink}
                to="career"
                className={`${
                  isActive(location.pathname, "/career")
                    ? "text-info"
                    : "text-secondary "
                }`}
              >
                Career
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to={
                  location.pathname.startsWith("/mentor")
                    ? "connect-mentor"
                    : "connect-mentee"
                }
                className={`${
                  isActive(
                    location.pathname,
                    location.pathname.startsWith("/mentor")
                      ? "/connect-mentee"
                      : "/connect-mentor"
                  )
                    ? "text-info"
                    : "text-secondary "
                }`}
              >
                {location.pathname.startsWith("/mentor")
                  ? "Connect Mentee"
                  : "Connect Mentor"}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="contact-us"
                className={`${
                  isActive(location.pathname, "/contact-us")
                    ? "text-info"
                    : "text-secondary "
                }`}
              >
                Contact us
              </Nav.Link>
            </Nav>
            <Button variant="warning">Logout</Button>{" "}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
