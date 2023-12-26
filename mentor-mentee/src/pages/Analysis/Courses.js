import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

function Courses({ studentPrn }) {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the local JSON file
        const response = await fetch("/courses.json");
        const data = await response.json();
        const filteredData = data.filter(
          (course) => course.studentPrn === studentPrn
        );
        setCourseData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [studentPrn]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {courseData.map((course) => (
        <Card key={course.id} style={{ width: "18rem", margin: "10px" }}>
          <Card.Body>
            <Card.Title>{course.courseName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Issuer: {course.issuerName}
            </Card.Subtitle>
            <Card.Text>Issue Date: {course.issueDate}</Card.Text>
            <Card.Link href={course.certificateUrl} target="_blank">
              Certificate URL
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Courses;
