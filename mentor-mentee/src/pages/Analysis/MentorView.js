import React, { useEffect, useRef, useMemo } from "react";
import StudentDetails from "./StudentDetails";
import EngagementActivities from "./EngagementActivities";
import Attendance from "./Attendance";
import Marks from "./marks";
import Courses from "./Courses";
import Publications from "./Publications";

import { useActiveSection } from "../../ActiveSectionContext";
import useIntersectionObserver from "../../useIntersectionObserver";

const MentorView = ({ studentData, onSearch }) => {
  const { setActiveSection } = useActiveSection();

  const engagementRef = useRef(null);
  const attendanceRef = useRef(null);
  const marksRef = useRef(null);
  const coursesRef = useRef(null);
  const publicationsRef = useRef(null);

  const { observe, disconnect } = useIntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        setActiveSection(entry.target.id);
      }
    });
  });

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

  useEffect(() => {
    Object.values(sectionRefs).forEach((ref) => {
      observe(ref);
    });

    return () => {
      disconnect();
    };
  }, [observe, disconnect, studentData, sectionRefs, setActiveSection]);

  return (
    <div>
      <StudentDetails
        studentData={studentData}
        showSearchBar
        onSearch={onSearch}
      />
      {studentData && (
        <>
          <div ref={engagementRef} id="engagement-activities">
            <EngagementActivities studentPrn={studentData.prnNumber} />
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
          <Courses studentPrn={studentData.prnNumber} />
          <div ref={coursesRef} id="courses"></div>
          <hr />
          <div ref={publicationsRef} id="publications">
            <Publications studentPrn={studentData.prnNumber} />
          </div>
        </>
      )}
    </div>
  );
};

export default MentorView;
