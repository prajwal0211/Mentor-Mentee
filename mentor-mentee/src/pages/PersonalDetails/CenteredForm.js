import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";

const MyCenteredForm = () => {
  //   const myRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAdditionalDetails, setShowAdditionalDetails] = useState(false);
  const [additionalDetail, setAdditionalDetail] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [goalDescription, setGoalDescription] = useState("");
  const [achievements, setAchievements] = useState("");
  const [proofFile, setProofFile] = useState(null);
  const [selectedFinancialStatus, setSelectedFinancialStatus] = useState("");
  const [financialDescription, setFinancialDescription] = useState("");
  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setShowAdditionalDetails(selectedValue !== "");
    setAdditionalDetail(selectedValue);
  };
  const handleGoalChange = (event) => {
    const selectedGoalValue = event.target.value;
    setSelectedGoal(selectedGoalValue);
    setGoalDescription("");
  };
  const handleGoalDescriptionChange = (event) => {
    const description = event.target.value;
    setGoalDescription(description);
  };
  const handleAchievementsChange = (event) => {
    const achievementValue = event.target.value;
    setAchievements(achievementValue);
  };

  const handleProofFileChange = (event) => {
    const file = event.target.files[0];
    setProofFile(file);
  };

  const handleFinancialStatusChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFinancialStatus(selectedValue);
    setFinancialDescription("");
  };

  const handleFinancialDescriptionChange = (event) => {
    const description = event.target.value;
    setFinancialDescription(description);
  };

  const labelStyle = {
    color: "black",
    padding: "5px",
    margin: "5px",
    marginBottom: "10px",
    borderRadius: "15px",
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="position-relative"
        style={{ width: "80%", minWidth: "300px", maxWidth: "1000px" }}
      >
        <Container
          fluid
          className="position-absolute top-0 start-50 translate-middle"
          style={{
            width: "1500px",
            height: "755px",
            background: `linear-gradient(180deg, rgba(0, 0, 255, 0.67) 0%, rgba(2, 8, 16, 0) calc(100% - 300px))`,
            borderRadius: "5px",
          }}
        >
          <Row>
            <Col md={6} className="position-relative">
              <Row className="justify-content-center align-items-center h-100">
                <Col md={6}>
                  <div
                    style={{
                      border: "1px solid #000000",
                      borderRadius: "5px",
                      marginBottom: "20px",
                      padding: "20px",
                    }}
                  >
                    <div className="position-absolute top-0 start-0 m-3">
                      <img
                        src="abc.jpg"
                        alt="Profile"
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <br></br>
                    <div style={{ marginBottom: "20px" }}>
                      <span style={{ ...labelStyle, marginRight: "2%" }}>
                        Name
                      </span>
                      <Form.Control type="text" placeholder="Enter your name" />
                      <span
                        style={{
                          ...labelStyle,
                          marginRight: "2%",
                          marginLeft: "10%",
                        }}
                      >
                        Date Of Birth
                      </span>
                      <Form.Control
                        type="date"
                        placeholder="Select your D.O.B"
                      />
                      <span
                        style={{
                          ...labelStyle,
                          marginRight: "2%",
                          marginLeft: "10%",
                          height: "20px",
                        }}
                      >
                        Year Of Admission
                      </span>
                      <Form.Control as="select" defaultValue="Select year">
                        <option>Select year</option>
                        <option>2008</option>
                        <option>2009</option>
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                      </Form.Control>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <span style={labelStyle}>Address</span>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        style={{ margin: "5px" }}
                        placeholder="Enter your address"
                      />
                      <span
                        style={{
                          ...labelStyle,
                          marginRight: "0.5%",
                          marginLeft: "9.8%",
                        }}
                      >
                        Fathers Details
                      </span>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        style={{ margin: "5px" }}
                      />
                      <span
                        style={{
                          ...labelStyle,
                          marginRight: "2.8%",
                          marginLeft: "5.5%",
                        }}
                      >
                        Mothers Details
                      </span>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        style={{ margin: "5px" }}
                      />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <span style={labelStyle}>Branch</span>
                      <Form.Select
                        style={{
                          width: "200px",
                          marginRight: "7%",
                          marginLeft: "1.1%",
                        }}
                        className="mb-2"
                        aria-label="Branch"
                      >
                        <option>Select branch</option>
                        <option>Computer Engineering</option>
                        <option>Mechanical Engineering</option>
                        <option>Information Technology Engineering</option>
                        <option>Internet Of Things Engineering</option>
                        <option>
                          Artificial Intelligence and Data Science Engineering
                        </option>
                        <option>
                          Artificial Intelligence and Machine Learning
                          Engineering
                        </option>
                        <option>
                          Electronics and Computer Science Engineering
                        </option>
                        <option>
                          Electronics and Telecommunication Engineering
                        </option>
                      </Form.Select>
                      <span style={{ ...labelStyle, marginRight: "4.7%" }}>
                        Email ID
                      </span>
                      <Form.Control
                        type="email"
                        placeholder="Enter Your Email"
                      />
                      <span
                        style={{
                          ...labelStyle,
                          marginLeft: "5.8%",
                          marginRight: "6%",
                        }}
                      >
                        Mobile No.
                      </span>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Mobile No."
                      />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <span style={labelStyle}>
                        {" "}
                        If not residing currently with your Parents, provide the
                        following details:
                      </span>
                      <Form.Select
                        style={{ width: "200px", height: "20px" }}
                        className="mb-2"
                        aria-label="Residing details"
                        onChange={handleDropdownChange}
                      >
                        <option value="">Select an option</option>
                        <option value="Relatives">Relatives</option>
                        <option value="Guardian">Guardian</option>
                        <option value="Friends">Friends</option>
                        <option value="Hostel">Hostel</option>
                      </Form.Select>
                      {showAdditionalDetails && (
                        <div
                          style={{
                            ...labelStyle,
                            marginBottom: "20px",
                            margin: "5px",
                          }}
                        >
                          <Form.Label style={{ marginRight: "0.3%" }}>
                            <b style={{ fontWeight: "600" }}>Name</b>{" "}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={`Enter ${additionalDetail}'s name `}
                          />
                          <Form.Label
                            style={{
                              ...labelStyle,
                              marginLeft: "5%",
                              marginRight: "0.1%",
                            }}
                          >
                            <b style={{ fontWeight: "600" }}>Contact No. </b>{" "}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={`Enter contact number `}
                          />
                        </div>
                      )}
                      <div
                        style={{
                          ...labelStyle,
                          marginBottom: "20px",
                          marginTop: "20px",
                          marginLeft: "0.1%",
                        }}
                      >
                        <Link
                          to="academics"
                          className="btn mt-3"
                          style={{
                            backgroundColor: "#084CA4",
                            color: "white",
                            textDecoration: "none",
                            borderRadius: "2px",
                            padding: "1px",
                            margin: "5px",
                            marginBottom: "20px",
                          }}
                        >
                          Academics
                        </Link>
                      </div>
                      <div style={{ marginBottom: "20px" }}>
                        <span style={{ ...labelStyle, marginRight: "0.3%" }}>
                          Blood Group
                        </span>
                        <Form.Control
                          type="text"
                          placeholder="Enter blood group"
                        />
                        <span style={{ ...labelStyle, marginLeft: "7.8%" }}>
                          Hobbies/Interests
                        </span>
                        <Form.Control
                          type="text"
                          placeholder="Enter hobbies/interests"
                        />
                      </div>
                      <div style={{ marginBottom: "20px" }}>
                        <span style={{ ...labelStyle, marginRight: "2.3%" }}>
                          Strengths
                        </span>
                        <Form.Control
                          type="text"
                          placeholder="List your strengths"
                        />
                        <span
                          style={{
                            ...labelStyle,
                            marginLeft: "7.7%",
                            marginRight: "5.2%",
                          }}
                        >
                          Weakness
                        </span>
                        <Form.Control
                          type="text"
                          placeholder="List your weaknesses"
                        />
                        <span
                          style={{
                            ...labelStyle,
                            marginLeft: "4.7%",
                            marginRight: "2%",
                          }}
                        >
                          Goals
                        </span>
                        <Form.Select
                          style={{ width: "200px" }}
                          onChange={handleGoalChange}
                          value={selectedGoal}
                        >
                          <option value="">Select goals</option>
                          <option value="Short Term">Short Term</option>
                          <option value="Long Term">Long Term</option>
                        </Form.Select>
                        {selectedGoal && (
                          <Row className="align-items-center mt-3">
                            <Col xs={{ span: 6, offset: 3 }}>
                              <Form.Label
                                style={{
                                  ...labelStyle,
                                  textAlign: "left",
                                  display: "block",
                                }}
                              >
                                <b style={{ fontWeight: "600" }}>
                                  Goal Description:
                                </b>
                              </Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={2}
                                style={{
                                  marginLeft: "10px",
                                  width: "15%",
                                  textAlign: "center",
                                }}
                                value={goalDescription}
                                onChange={handleGoalDescriptionChange}
                                placeholder={`Write your ${selectedGoal} goals here`}
                              />
                            </Col>
                          </Row>
                        )}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "20px",
                        }}
                      >
                        <span style={labelStyle}>
                          Any Extra-Curricular/Sports/Cultural Activities or
                          Achievements prior to joining SIESGST
                        </span>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          style={{ margin: "5px" }}
                          placeholder="Mention your achievements"
                          value={achievements}
                          onChange={handleAchievementsChange}
                        />
                        {achievements && (
                          <>
                            <Row className="mb-4">
                              <Col>
                                <Form.Label
                                  className="mb-3"
                                  style={{ ...labelStyle, color: "#000000" }}
                                >
                                  <b style={{ fontWeight: "600" }}>
                                    Upload Proof:
                                  </b>
                                </Form.Label>
                              </Col>
                            </Row>
                            <Row className="mb-4">
                              <Col>
                                <Form.Group controlId="formFile">
                                  <Form.Control
                                    type="file"
                                    accept=".pdf, .doc, .docx"
                                    onChange={handleProofFileChange}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </>
                        )}
                      </div>
                      <div style={{ marginBottom: "20px" }}>
                        <span style={labelStyle}>Financial Status</span>
                        <Form.Select
                          style={{ width: "200px", height: "20px" }}
                          onChange={handleFinancialStatusChange}
                          value={selectedFinancialStatus}
                        >
                          <option value="">Select financial status</option>
                          <option value="0 - ₹1,50,000">0 - ₹1,50,000</option>
                          <option value="₹1,50,00 - ₹3,00,000">
                            ₹1,00,00 - ₹3,00,000
                          </option>
                          <option value="₹3,00,000 - ₹5,50,000">
                            ₹3,00,000 - ₹5,50,000
                          </option>
                          <option value="₹5,50,000 - 8,00,000">
                            ₹5,50,000 - 8,00,000
                          </option>
                          <option value="₹8,00,000 & above">
                            ₹8,00,000 & above
                          </option>
                        </Form.Select>
                        {selectedFinancialStatus &&
                          selectedFinancialStatus !== "₹8,00,000 & above" && (
                            <Row className="mb-4">
                              <Col>
                                <Form.Group controlId="formFinancialDescription">
                                  <Form.Label
                                    className="mb-2"
                                    style={{ ...labelStyle, color: "#000000" }}
                                  >
                                    <b style={{ fontWeight: "600" }}>
                                      Source :{" "}
                                    </b>
                                  </Form.Label>
                                  <div className="mb-3">
                                    <Form.Control
                                      as="textarea"
                                      rows={3}
                                      value={financialDescription}
                                      onChange={
                                        handleFinancialDescriptionChange
                                      }
                                      style={{ marginLeft: "0.9%" }}
                                      placeholder="Mention if supported through any NGOs,Alumni,Scholarships"
                                    />
                                  </div>
                                </Form.Group>
                              </Col>
                            </Row>
                          )}
                      </div>
                      <div style={{ marginBottom: "20px" }}>
                        <Button
                          variant="primary"
                          className="justify-content-center"
                          style={{
                            ...labelStyle,
                            marginLeft: "50%",
                            borderRadius: "3px",
                            backgroundColor: "#E48C44",
                            borderColor: "#E48C44",
                          }}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MyCenteredForm;
