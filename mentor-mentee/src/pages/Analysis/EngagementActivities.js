import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function EngagementActivities() {
  return (
    <div style={{ margin: "0 20px" }}>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card style={{ height: "300px" }}>
            <Card.Body>
              <Card.Title>Events Participated and Organized</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "300px" }}>
            <Card.Body>
              <Card.Title>Extra-Curricular Activities</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "300px" }}>
            <Card.Body>
              <Card.Title>Special Achievements</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "300px" }}>
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              ksklfjdslfsf
              {/* <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default EngagementActivities;
