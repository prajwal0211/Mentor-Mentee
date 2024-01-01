import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

function Courses({ studentPrn, userType }) {
  const [courseData, setCourseData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newCourse, setNewCourse] = useState({
    courseName: "",
    issuerName: "",
    issueDate: "",
    certificateUrl: "",
    skills: [],
  });

  const handleShowModal = () => {
    setShowModal(true);
    setNewCourse({
      courseName: "",
      issuerName: "",
      issueDate: "",
      certificateUrl: "",
      skills: [],
    });
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (selectedCourse) {
      setSelectedCourse((prevCourseData) => ({
        ...prevCourseData,
        [name]:
          name === "skills"
            ? value.split(",").map((skill) => skill.trim())
            : value,
      }));
    } else {
      setNewCourse((prevCourseData) => ({
        ...prevCourseData,
        [name]:
          name === "skills"
            ? value.split(",").map((skill) => skill.trim())
            : value,
      }));
    }
  };

  const handleAddCourse = () => {
    const newCourseWithSkills = {
      ...newCourse,
      id: courseData.length,
    };

    setCourseData((prevData) => [...prevData, newCourseWithSkills]);
    handleCloseModal();
  };

  const handleEditCourse = () => {
    const updatedData = courseData.map((course, index) =>
      index === selectedCourse.id ? { ...selectedCourse } : course
    );
    setCourseData(updatedData);
    handleCloseModal();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/courses.json");
        const data = await response.json();
        const filteredData = data.filter(
          (course) => course.studentPrn === studentPrn
        );
        setCourseData(
          filteredData.map((course, index) => ({ ...course, id: index }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [studentPrn]);

  const handleEditClick = (course) => {
    setSelectedCourse(course);
    handleShowModal();
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="d-flex pt-5 ps-5">
        <h3 className="mb-3 text-dark">Courses</h3>
        {userType === "mentee" && (
          <Button
            variant="outline-dark"
            size="sm"
            style={{
              position: "absolute",
              right: "20px",
              zIndex: 1,
            }}
            onClick={handleShowModal}
          >
            <AddOutlinedIcon />
          </Button>
        )}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }} className="p-5">
        {courseData.map((course) => (
          <Card
            key={course.id}
            style={{ width: "22rem" }}
            className="p-3 me-lg-3 mb-3"
          >
            <Card.Body>
              <Card.Title>{course.courseName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Issuer: {course.issuerName}
              </Card.Subtitle>
              <Card.Text>Issue Date: {course.issueDate}</Card.Text>
              <Card.Text>Skills: {course.skills.join(", ")}</Card.Text>
              <Card.Link href={course.certificateUrl} target="_blank">
                Certificate URL
              </Card.Link>
            </Card.Body>
            {userType === "mentee" && (
              <Button
                variant="outline-warning"
                size="sm"
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  zIndex: 1,
                }}
                onClick={() => handleEditClick(course)}
              >
                <EditOutlinedIcon fontSize="small" />
              </Button>
            )}
          </Card>
        ))}

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {selectedCourse ? "Edit Course" : "Add Course"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formCourseName">
                <Form.Label>Course Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter course name"
                  name="courseName"
                  value={
                    selectedCourse
                      ? selectedCourse.courseName
                      : newCourse.courseName
                  }
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formIssuerName">
                <Form.Label>Issuer Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter issuer name"
                  name="issuerName"
                  value={
                    selectedCourse
                      ? selectedCourse.issuerName
                      : newCourse.issuerName
                  }
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formIssueDate">
                <Form.Label>Issue Date</Form.Label>
                <Form.Control
                  type="date"
                  name="issueDate"
                  value={
                    selectedCourse
                      ? selectedCourse.issueDate
                      : newCourse.issueDate
                  }
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formCertificateUrl">
                <Form.Label>Certificate URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter certificate URL"
                  name="certificateUrl"
                  value={
                    selectedCourse
                      ? selectedCourse.certificateUrl
                      : newCourse.certificateUrl
                  }
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formSkills">
                <Form.Label>Skills</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter skills"
                  name="skills"
                  value={
                    selectedCourse
                      ? selectedCourse.skills.join(", ")
                      : newCourse.skills.join(", ")
                  }
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={selectedCourse ? handleEditCourse : handleAddCourse}
            >
              {selectedCourse ? "Edit Course" : "Add Course"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Courses;
