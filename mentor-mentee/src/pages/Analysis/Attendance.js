import React, { useState } from "react";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";

function Attendance() {
  const [attendanceType, setAttendanceType] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [subjectOptions, setSubjectOptions] = useState([]);
  const [isSubjectOptionsDisabled, setSubjectOptionsDisabled] = useState(true);

  const handleExamTypeChange = (selectedType) => {
    console.log(selectedType);
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
    console.log(selectedSubject);
    setSelectedSubject(selectedSubject);
  };

  return (
    <div className="mx-4">
      <Form className="d-flex">
        {/* <Form.Group htmlFor="attendanceTypeDropdown" className="me-5"> */}
        <Form.Group htmlFor="attendanceTypeDropdown" className="me-5">
          <Form.Label>Select Attendance Type</Form.Label>
          <DropdownButton
            title={attendanceType || "Select Type"}
            onSelect={handleExamTypeChange}
          >
            <Dropdown.Item eventKey="Theory">Theory</Dropdown.Item>
            <Dropdown.Item eventKey="Practical">Practical</Dropdown.Item>
          </DropdownButton>
        </Form.Group>
        {/* <Form.Group controlId="subjectDropdown" className="me-5"> */}
        <Form.Group className="me-5">
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
    </div>
  );
}

export default Attendance;
