// import React, { useEffect, useRef, useMemo, useState } from "react";
// import EngagementActivities from "./EngagementActivities";
// import Marks from "./marks";
// import Attendance from "./Attendance";
// import Courses from "./Courses";
// import Publications from "./Publications";
// import { useActiveSection } from "../../ActiveSectionContext";
// import useIntersectionObserver from "../../useIntersectionObserver";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// function Analysis() {
//   const { setActiveSection } = useActiveSection();

//   const [searchInput, setSearchInput] = useState("");
//   const [originalStudentData, setOriginalStudentData] = useState([]);
//   const [studentData, setStudentData] = useState(null);

//   const engagementRef = useRef(null);
//   const attendanceRef = useRef(null);
//   const marksRef = useRef(null);
//   const coursesRef = useRef(null);
//   const publicationsRef = useRef(null);

//   const sectionRefs = useMemo(
//     () => ({
//       "engagement-activities": engagementRef,
//       attendance: attendanceRef,
//       marks: marksRef,
//       courses: coursesRef,
//       publications: publicationsRef,
//     }),
//     [engagementRef, attendanceRef, marksRef, coursesRef, publicationsRef]
//   );

//   const { observe, disconnect } = useIntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting || entry.intersectionRatio > 0) {
//         setActiveSection(entry.target.id);
//       }
//     });
//   });

//   useEffect(() => {
//     Object.values(sectionRefs).forEach((ref) => {
//       observe(ref);
//     });

//     return () => {
//       disconnect();
//     };
//   }, [sectionRefs, observe, disconnect, setActiveSection, studentData]);

//   const fetchStudentData = async () => {
//     try {
//       const response = await fetch("/students.json");
//       const data = await response.json();
//       setOriginalStudentData(data);
//       setStudentData(null);
//     } catch (error) {
//       console.error("Error fetching student data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchStudentData();
//   }, []);

//   const handleSearch = () => {
//     const searchResult = originalStudentData.filter(
//       (student) =>
//         student.name.toLowerCase().includes(searchInput.toLowerCase()) ||
//         student.prnNumber.includes(searchInput)
//     );

//     setStudentData(searchResult[0] || null);
//     setSearchInput("");
//   };

//   return (
//     <div className="bg-secondary">
//       {!studentData && (
//         <h3 className="text-center text-dark pt-4">
//           Search Student Data for their Data Analysis
//         </h3>
//       )}
//       <Form>
//         <div className="d-flex justify-content-center mb-5">
//           <Row className="align-items-center mt-4 mb-2">
//             <Col xs="auto">
//               <Form.Control
//                 type="text"
//                 placeholder="Search Student"
//                 style={{ width: "300px" }}
//                 className="sm-3"
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//               />
//             </Col>
//             <Col className="xs-5">
//               <Button variant="warning" onClick={handleSearch}>
//                 Search
//               </Button>
//             </Col>
//           </Row>
//         </div>
//         {studentData && (
//           <div className="ms-4 me-3">
//             <Form.Group className="d-flex flex-column flex-md-row mb-3">
//               <Form.Label className="col-md-2 text-md-center p-1 me-md-4 mb-2 mb-md-0">
//                 Name :
//               </Form.Label>
//               <div className="col-md-5">
//                 <Form.Control type="text" value={studentData.name} readOnly />
//               </div>
//             </Form.Group>
//             <Form.Group className="d-flex flex-column flex-md-row mb-3">
//               <Form.Label className="col-md-2 text-md-center p-1 me-md-4 mb-2 mb-md-0">
//                 PRN Number :
//               </Form.Label>
//               <div className="col-md-5 ">
//                 <Form.Control
//                   type="text"
//                   value={studentData.prnNumber}
//                   readOnly
//                 />
//               </div>
//             </Form.Group>
//           </div>
//         )}
//       </Form>
//       {studentData && (
//         <>
//           <hr />
//           <div ref={engagementRef} id="engagement-activities">
//             <EngagementActivities />
//           </div>
//           <hr />
//           <div ref={attendanceRef} id="attendance">
//             <Attendance />
//           </div>
//           <hr />
//           <div ref={marksRef} id="marks">
//             <Marks />
//           </div>
//           <hr />
//           <div ref={coursesRef} id="courses">
//             <Courses studentPrn={studentData.prnNumber} />
//           </div>
//           <hr />
//           <div ref={publicationsRef} id="publications">
//             <Publications studentPrn={studentData.prnNumber} />
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Analysis;

import React, { useState, useEffect } from "react";
import MentorView from "./MentorView";
import MenteeView from "./MenteeView";
import { Container } from "react-bootstrap";

function Analysis() {
  const [searchInput, setSearchInput] = useState("");
  const [originalStudentData, setOriginalStudentData] = useState([]);
  const [studentData, setStudentData] = useState(null);
  const [userRole, setUserRole] = useState("");

  const onSearch = (input) => {
    setSearchInput(input);
  };

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch("/students.json");
        const data = await response.json();
        setOriginalStudentData(data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentData();
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    const isMentor = path.includes("/mentor");
    setUserRole(isMentor ? "mentor" : "mentee");
  }, []);

  useEffect(() => {
    if (userRole === "mentee") {
      setStudentData(originalStudentData[0]);
    } else {
      if (searchInput) {
        const searchResult = originalStudentData.filter(
          (student) =>
            student.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            student.prnNumber.includes(searchInput)
        );

        setStudentData(searchResult[0] || null);
      } else {
        setStudentData(null);
      }
    }
  }, [searchInput, originalStudentData, userRole]);

  return (
    <div>
      <Container fluid className="custom-background">
        {userRole === "mentor" && !studentData && (
          <h3 className="text-center text-dark pt-4">
            Search Student Data for their Data Analysis
          </h3>
        )}
        {userRole === "mentor" ? (
          <MentorView studentData={studentData} onSearch={onSearch} />
        ) : (
          <MenteeView studentData={studentData} />
        )}
      </Container>
    </div>
  );
}

export default Analysis;
