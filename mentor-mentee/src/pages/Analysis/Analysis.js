import React, {
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useState,
} from "react";
import EngagementActivities from "./EngagementActivities";
import Marks from "./marks";
import Attendance from "./Attendance";
import Courses from "./Courses";
import Publications from "./Publications";
import { useActiveSection } from "../../ActiveSectionContext";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const dummyStudentData = [
  {
    id: 1,
    name: "Prajwal Waghmode",
    prnNumber: "12345",
  },
  {
    id: 2,
    name: "Arya Angane",
    prnNumber: "67890",
  },
  {
    id: 3,
    name: "Astha Thakur",
    prnNumber: "54321",
  },
  {
    id: 4,
    name: "Akshija Shetty",
    prnNumber: "98765",
  },
];

function Analysis() {
  const { setActiveSection } = useActiveSection();

  const [searchInput, setSearchInput] = useState("");
  const [studentData, setStudentData] = useState(null);

  const engagementRef = useRef(null);
  const attendanceRef = useRef(null);
  const marksRef = useRef(null);
  const coursesRef = useRef(null);
  const publicationsRef = useRef(null);

  const sectionRefs = useMemo(
    () => ({
      "engagement-activities": engagementRef,
      attendance: attendanceRef,
      marks: marksRef,
      courses: coursesRef,
      publications: publicationsRef,
    }),
    [engagementRef, attendanceRef, marksRef, coursesRef, publicationsRef]
  );

  const handleIntersection = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    [setActiveSection]
  );

  const observer = useMemo(
    () =>
      new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 0.7,
      }),
    [handleIntersection]
  );

  useEffect(() => {
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs, observer, setActiveSection]);

  const handleSearch = () => {
    const matchingStudent = dummyStudentData.find(
      (student) =>
        student.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        student.prnNumber.includes(searchInput)
    );

    setStudentData(matchingStudent || null);
    setSearchInput("");
  };

  return (
    <div className="bg-secondary">
      {!studentData && (
        <h3 className="text-center text-dark pt-4">
          Search Student Data for their Data Analysis
        </h3>
      )}
      <Form>
        <div className="d-flex justify-content-center mb-5">
          <Row className="align-items-center mt-4 mb-2">
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search Student"
                style={{ width: "300px" }}
                className="sm-3"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </Col>
            <Col className="xs-5">
              <Button variant="warning" onClick={handleSearch}>
                Search
              </Button>
            </Col>
          </Row>
        </div>
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
      </Form>
      {studentData && (
        <>
          <hr />
          <div ref={engagementRef} id="engagement-activities">
            <EngagementActivities />
          </div>
          <hr />
          <div ref={attendanceRef} id="attendance">
            <Attendance />
          </div>
          <hr />
          <div ref={marksRef} id="marks">
            <Marks />
          </div>
          <hr />
          <div ref={coursesRef} id="courses">
            <Courses />
          </div>
          <hr />
          <div ref={publicationsRef} id="publications">
            <Publications />
          </div>
        </>
      )}
    </div>
  );
}

export default Analysis;
