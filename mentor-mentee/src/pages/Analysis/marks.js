import React, { useState } from "react";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";

function Marks() {
  const [examType, setExamType] = useState("");
  const [selectedExamOption, setSelectedExamOption] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [examOptions, setExamOptions] = useState([]);
  const [subjectOptions, setSubjectOptions] = useState([]);
  const [isExamOptionsDisabled, setExamOptionsDisabled] = useState(true);
  const [isSubjectOptionsDisabled, setSubjectOptionsDisabled] = useState(true);

  const handleExamTypeChange = (selectedType) => {
    setExamType(selectedType);

    if (selectedType === "Theory") {
      setExamOptions([
        "Internal Assessment 1",
        "Internal Assessment 2",
        "Semester",
        "Average",
      ]);
      setSubjectOptions([
        "Internet Programming",
        "Advanced Data Structures and Algorithms",
        "Advanced Data Management Techniques",
        "Entrepreneur and E-Business",
        "Computer Network Security",
        "Software Engineering",
      ]);
      setExamOptionsDisabled(false);
      setSubjectOptionsDisabled(false);
    } else if (selectedType === "Practical") {
      setExamOptions([]);
      setSubjectOptions([
        "Internet Programming Lab",
        "Security Lab",
        "DevOps Lab",
        "Advanced DevOps Lab",
      ]);
      setExamOptionsDisabled(true);
      setSubjectOptionsDisabled(false);
    }

    setSelectedExamOption("");
    setSelectedSubject("");
  };

  const handleExamOptionChange = (selectedOption) => {
    setSelectedExamOption(selectedOption);
  };

  const handleSubjectChange = (selectedSubject) => {
    setSelectedSubject(selectedSubject);
  };

  return (
    <div className="mx-4">
      <Form className="d-flex">
        <Form.Group controlId="examTypeDropdown" className="me-5">
          <Form.Label>Select Exam Type</Form.Label>
          <DropdownButton
            title={examType || "Select Type"}
            onSelect={handleExamTypeChange}
          >
            <Dropdown.Item eventKey="Theory">Theory</Dropdown.Item>
            <Dropdown.Item eventKey="Practical">Practical</Dropdown.Item>
          </DropdownButton>
        </Form.Group>

        <Form.Group controlId="examOptionsDropdown" className="me-5">
          <Form.Label>Select Exam Options</Form.Label>
          <DropdownButton
            title={
              selectedExamOption !== null && selectedExamOption !== ""
                ? selectedExamOption
                : examOptions.length > 0
                ? "Select Option"
                : "Options disabled"
            }
            onSelect={handleExamOptionChange}
            disabled={isExamOptionsDisabled}
          >
            {examOptions.map((option, index) => (
              <Dropdown.Item key={index} eventKey={option}>
                {option}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Form.Group>

        <Form.Group controlId="subjectDropdown" className="me-5">
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

export default Marks;
