import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function EngagementActivities({ studentPrn, userType }) {
  const [engagementData, setEngagementData] = useState([]);
  const [openSection, setOpenSection] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [newActivity, setNewActivity] = useState({
    activityName: "",
    description: "",
    date: "",
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/engagementActivities.json");
  //       const data = await response.json();
  //       const filteredData = data.find(
  //         (activity) => activity.studentPrn === studentPrn
  //       );

  //       if (filteredData) {
  //         const {
  //           eventsOrganized,
  //           eventsParticipated,
  //           projects,
  //           specialAchievements,
  //           extraCurricularActivities,
  //         } = filteredData;

  //         const organizedSection = {
  //           title: "Events Organized",
  //           activities: eventsOrganized,
  //         };

  //         const participatedSection = {
  //           title: "Events Participated",
  //           activities: eventsParticipated,
  //         };

  //         const projectsSection = {
  //           title: "Projects",
  //           activities: projects,
  //         };

  //         const achievementsSection = {
  //           title: "Special Achievements",
  //           activities: specialAchievements,
  //         };

  //         const extraCurricularSection = {
  //           title: "Extra-Curricular Activities",
  //           activities: extraCurricularActivities,
  //         };

  //         const engagementSections = [
  //           organizedSection,
  //           participatedSection,
  //           projectsSection,
  //           achievementsSection,
  //           extraCurricularSection,
  //         ];

  //         setEngagementData(engagementSections);
  //       } else {
  //         setEngagementData([]);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching engagement activities data:", error);
  //     }
  //   };

  //   fetchData();
  //   console.log(engagementData);
  // }, [studentPrn]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/engagementActivities.json");
        const data = await response.json();
        const filteredData = data.find(
          (activity) => activity.studentPrn === studentPrn
        );

        if (filteredData) {
          const updatedData = Object.keys(filteredData).reduce((acc, key) => {
            if (Array.isArray(filteredData[key])) {
              acc[key] = filteredData[key].map((item, index) => ({
                ...item,
                id: index,
              }));
            }

            return acc;
          }, {});

          const engagementSections = Object.keys(updatedData).map((key) => ({
            title: key.charAt(0).toUpperCase() + key.slice(1),
            activities: updatedData[key],
          }));

          // const engagementSections = Object.keys(updatedData).map((key) => ({
          //   title: key.charAt(0).toUpperCase() + key.slice(1),
          //   activities: Array.isArray(updatedData[key]) ? updatedData[key] : [],
          // }));

          setEngagementData(engagementSections);
        } else {
          setEngagementData([]);
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

  const handleShowModal = () => {
    setShowModal(true);
    setNewActivity({
      activityName: "",
      description: "",
      date: "",
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedActivity(null);
    setSelectedSection(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (selectedActivity) {
      setSelectedActivity((prevActivity) => ({
        ...prevActivity,
        [name]: value,
      }));
    } else {
      setNewActivity((prevActivity) => ({
        ...prevActivity,
        [name]: value,
      }));
    }
  };

  const handleAddActivity = () => {
    const newActivityWithDetails = {
      ...newActivity,
      id: engagementData[selectedSection].activities.length,
    };

    const updatedEngagementData = [...engagementData];
    updatedEngagementData[selectedSection].activities.push(
      newActivityWithDetails
    );

    setEngagementData(updatedEngagementData);
    handleCloseModal();
  };

  const handleEditActivity = () => {
    const indexToEdit = engagementData[selectedSection].activities.findIndex(
      (activity) => activity.id === selectedActivity.id
    );

    if (indexToEdit !== -1) {
      console.log("Index of selected activity:", indexToEdit);
      console.log("ID of selected activity:", selectedActivity.id);
    } else {
      console.error("Selected activity not found.");
    }
    const updatedActivities = engagementData[selectedSection].activities.map(
      (activity, index) =>
        index === selectedActivity.id ? { ...selectedActivity } : activity
    );

    const updatedEngagementData = [...engagementData];
    updatedEngagementData[selectedSection].activities = updatedActivities;

    setEngagementData(updatedEngagementData);
    handleCloseModal();
  };

  const handleAddEditClick = (sectionIndex, activity) => {
    setSelectedActivity(activity);
    setSelectedSection(sectionIndex);
    handleShowModal();
  };

  return (
    <div className="p-5">
      <h3 className="mb-5 text-dark">Engagement Activities</h3>
      {engagementData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-3">
          <div className="d-flex mb-3">
            <h6 onClick={() => toggleSection(sectionIndex)}>
              {section.title}{" "}
              {openSection === sectionIndex ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </h6>
            {userType === "mentee" && sectionIndex >= 2 && (
              <Button
                variant="outline-dark"
                size="sm"
                style={{
                  position: "absolute",
                  right: "20px",
                  zIndex: 1,
                }}
                onClick={() => handleAddEditClick(sectionIndex, null)}
              >
                <AddOutlinedIcon />
              </Button>
            )}
          </div>
          <Collapse in={openSection === sectionIndex}>
            <div>
              <Row style={{ display: "flex", flexWrap: "wrap" }}>
                {section.activities.map((activity, index) => (
                  <Col key={index} style={{ flex: "0" }}>
                    <Card
                      style={{ width: "16rem", height: "14rem" }}
                      className="p-3 mb-3"
                    >
                      <Card.Body>
                        <Card.Title>{activity.activityName}</Card.Title>
                        <Card.Text>{activity.description}</Card.Text>
                        <Card.Text>Date: {activity.date}</Card.Text>
                        {userType === "mentee" && sectionIndex >= 2 && (
                          <Button
                            variant="outline-warning"
                            size="sm"
                            style={{
                              position: "absolute",
                              top: "5px",
                              right: "5px",
                              zIndex: 1,
                            }}
                            onClick={() =>
                              handleAddEditClick(sectionIndex, activity)
                            }
                          >
                            <EditOutlinedIcon fontSize="small" />
                          </Button>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Collapse>
        </div>
      ))}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedActivity ? "Edit Activity" : "Add Activity"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formActivityName">
              <Form.Label>Activity Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter activity name"
                name="activityName"
                value={
                  selectedActivity
                    ? selectedActivity.activityName
                    : newActivity.activityName
                }
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter description"
                name="description"
                value={
                  selectedActivity
                    ? selectedActivity.description
                    : newActivity.description
                }
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={
                  selectedActivity ? selectedActivity.date : newActivity.date
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
            onClick={selectedActivity ? handleEditActivity : handleAddActivity}
          >
            {selectedActivity ? "Edit Activity" : "Add Activity"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EngagementActivities;
