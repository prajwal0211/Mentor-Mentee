import React, { useState } from "react";
import { Dropdown, DropdownButton, Form, Image } from "react-bootstrap";

function Attendance() {
  const [attendanceType, setAttendanceType] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [subjectOptions, setSubjectOptions] = useState([]);
  const [isSubjectOptionsDisabled, setSubjectOptionsDisabled] = useState(true);

  const handleExamTypeChange = (selectedType) => {
    setAttendanceType(selectedType);

    if (selectedType === "Theory") {
      setSubjectOptions([
        "Internet Programming",
        "Advanced Data Structures and Algorithms",
        "Advanced Data Management Techniques",
        "Entrepreneur and E-Business",
        "Computer Network Security",
        "Software Engineering",
      ]);
      setSubjectOptionsDisabled(false);
    } else if (selectedType === "Practical") {
      setSubjectOptions([
        "Internet Programming Lab",
        "Security Lab",
        "DevOps Lab",
        "Advanced DevOps Lab",
      ]);
      setSubjectOptionsDisabled(false);
    }
    setSelectedSubject("");
  };

  const handleSubjectChange = (selectedSubject) => {
    setSelectedSubject(selectedSubject);
  };

  const renderBottomContent = () => {
    if (attendanceType && selectedSubject) {
      return (
        <Image
          src="/piechart.png"
          alt="Selected Image"
          style={{ width: "200px", height: "200px" }}
        />
      );
    } else {
      return <p>Please select attendance type and subject.</p>;
    }
  };

  return (
    <div className="p-5">
      <h3 className="mb-5 text-dark">Attendance</h3>
      <Form className="d-flex flex-column flex-md-row">
        <Form.Group className="me-5 mb-3 mb-sm-4">
          <Form.Label>Select Attendance Type</Form.Label>
          <DropdownButton
            title={attendanceType || "Select Type"}
            onSelect={handleExamTypeChange}
          >
            <Dropdown.Item eventKey="Theory">Theory</Dropdown.Item>
            <Dropdown.Item eventKey="Practical">Practical</Dropdown.Item>
          </DropdownButton>
        </Form.Group>
        <Form.Group className="me-5 mb-3 mb-sm-4">
          <Form.Label>Select Subject</Form.Label>
          <DropdownButton
            title={
              selectedSubject !== null && selectedSubject !== ""
                ? selectedSubject
                : subjectOptions.length > 0
                ? "Select Subject"
                : "Subjects disabled"
            }
            onSelect={handleSubjectChange}
            disabled={isSubjectOptionsDisabled}
          >
            {subjectOptions.map((subject, index) => (
              <Dropdown.Item key={index} eventKey={subject}>
                {subject}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Form.Group>
      </Form>
      <div className="mt-3">{renderBottomContent()}</div>
    </div>
  );
}

export default Attendance;
