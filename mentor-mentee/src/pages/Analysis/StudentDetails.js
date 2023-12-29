import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const StudentDetails = ({ studentData, showSearchBar, onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      {showSearchBar && (
        <Form>
          <div className="d-flex justify-content-center mb-5">
            <Row className="align-items-center mt-4 mb-2">
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search Student"
                  style={{ width: "300px" }}
                  className="sm-3"
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </Col>
              <Col className="xs-5">
                <Button variant="warning" onClick={() => onSearch(searchInput)}>
                  Search
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      )}
      {studentData && (
        <div className="ms-4 me-3">
          <Form.Group className="d-flex flex-column flex-md-row mb-3">
            <Form.Label className="col-md-2 text-md-center p-1 me-md-4 mb-2 mb-md-0">
              Name :
            </Form.Label>
            <div className="col-md-5">
              <Form.Control type="text" value={studentData.name} readOnly />
            </div>
          </Form.Group>
          <Form.Group className="d-flex flex-column flex-md-row mb-3">
            <Form.Label className="col-md-2 text-md-center p-1 me-md-4 mb-2 mb-md-0">
              PRN Number :
            </Form.Label>
            <div className="col-md-5 ">
              <Form.Control
                type="text"
                value={studentData.prnNumber}
                readOnly
              />
            </div>
          </Form.Group>
        </div>
      )}
    </div>
  );
};

export default StudentDetails;
