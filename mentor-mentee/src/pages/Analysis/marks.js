import React, { useState } from "react";
import { Dropdown, DropdownButton, Form, Image } from "react-bootstrap";

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
        "All",
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
        "All",
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

  const renderBottomContent = () => {
    if (examType && selectedExamOption && selectedSubject) {
      // Values are selected, show image
      return (
        <Image
          src="/linechart.png"
          alt="Selected Image"
          style={{ height: "200px", width: "350px" }}
        />
      );
    } else {
      // Values are not selected, show text
      return <p>Please select exam type, exam option, and subject.</p>;
    }
  };

  return (
    <div className="p-5">
      <h3 className="mb-5 text-dark">Marks</h3>
      <Form className="d-flex flex-column flex-md-row">
        <Form.Group className="me-5 mb-3 mb-sm-4">
          <Form.Label>Select Exam Type</Form.Label>
          <DropdownButton
            title={examType || "Select Type"}
            onSelect={handleExamTypeChange}
          >
            <Dropdown.Item eventKey="Theory">Theory</Dropdown.Item>
            <Dropdown.Item eventKey="Practical">Practical</Dropdown.Item>
          </DropdownButton>
        </Form.Group>

        <Form.Group className="me-5 mb-3 mb-sm-4">
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

export default Marks;
