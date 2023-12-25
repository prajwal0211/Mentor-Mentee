import React, { useEffect, useRef, useMemo, useCallback } from "react";
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

function Analysis() {
  const { setActiveSection } = useActiveSection();

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

  return (
    <div className="bg-secondary">
      <Form>
        <div className="d-flex justify-content-center mb-5">
          <Row className="align-items-center mt-3">
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search Student"
                style={{ width: "300px" }}
                className="sm-3"
              />
            </Col>
            <Col className="xs-5">
              <Button variant="warning">Search</Button>
            </Col>
          </Row>
        </div>
        <div className="ms-4">
          <Form.Group className="d-flex mb-3">
            <Form.Label className="col-md-2 text-center p-1 me-4">
              Name :
            </Form.Label>
            <div className="col-md-5">
              <Form.Control
                type="text"
                placeholder="Display Name here"
                readOnly
              />
            </div>
          </Form.Group>
          <Form.Group className="d-flex mb-3">
            <Form.Label className="col-md-2 text-center p-1 me-4">
              PRN Number :
            </Form.Label>
            <div className="col-md-5">
              <Form.Control
                type="text"
                placeholder="Display Roll Number here"
                readOnly
              />
            </div>
          </Form.Group>
        </div>
      </Form>
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
    </div>
  );
}

export default Analysis;
