import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function EngagementActivities({ studentPrn }) {
  const [engagementData, setEngagementData] = useState([]);
  const [openSection, setOpenSection] = useState(0); // Set the default active section

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/engagementActivities.json");
        const data = await response.json();
        const filteredData = data.find(
          (activity) => activity.studentPrn === studentPrn
        );

        if (filteredData) {
          const {
            eventsOrganized,
            eventsParticipated,
            projects,
            specialAchievements,
            extraCurricularActivities,
          } = filteredData;

          const organizedSection = {
            title: "Events Organized",
            activities: eventsOrganized,
          };

          const participatedSection = {
            title: "Events Participated",
            activities: eventsParticipated,
          };

          const projectsSection = {
            title: "Projects",
            activities: projects,
          };

          const achievementsSection = {
            title: "Special Achievements",
            activities: specialAchievements,
          };

          const extraCurricularSection = {
            title: "Extra-Curricular Activities",
            activities: extraCurricularActivities,
          };

          const engagementSections = [
            organizedSection,
            participatedSection,
            projectsSection,
            achievementsSection,
            extraCurricularSection,
          ];

          setEngagementData(engagementSections);
        } else {
          setEngagementData([]); // Set to an empty array if the user is not found
        }
      } catch (error) {
        console.error("Error fetching engagement activities data:", error);
      }
    };

    fetchData();
  }, [studentPrn]);

  const toggleSection = (index) => {
    setOpenSection((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="p-5">
      <h3 className="mb-5 text-dark">Engagement Activities</h3>
      {engagementData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-3">
          <h6 onClick={() => toggleSection(sectionIndex)}>
            {section.title}{" "}
            {openSection === sectionIndex ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
          </h6>
          <Collapse in={openSection === sectionIndex}>
            <div>
              <Row xs={1} md={4} className="g-5">
                {section.activities.map((activity, index) => (
                  <Col key={index}>
                    <Card style={{ width: "17rem", height: "12rem" }}>
                      <Card.Body>
                        <Card.Title>{activity.activityName}</Card.Title>
                        <Card.Text>{activity.description}</Card.Text>
                        <Card.Text>Date: {activity.date}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
}

export default EngagementActivities;
