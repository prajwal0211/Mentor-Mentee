import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import wallImage from './a.png'; 
import { Link } from 'react-router-dom';

const SearchStudent = () => {
  const darkOrangeStyle = {
    backgroundColor: '#E48C44',
    borderColor: '#E48C44', 
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  };
  const formStyle = {
    backgroundImage:`url(${wallImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    borderRadius: '5px',
    width: '900px',
    border: '1px solid #E48C44',
  };
  const labelStyle = {
    color: 'white',
    fontWeight: 'bold',
  };

  
  return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Form style={{ ...formStyle, border: '1px solid #E48C44', padding: '20px', borderRadius: '5px', width: '600px' }}>
        <Row className="mb-3">
          <Col>
          <Form.Label style={labelStyle}>Graduation Year</Form.Label>
            <Form.Control as="select" style={{ border: '1px solid #E48C44' }}>
              <option>Select Graduation Year</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </Form.Control>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label style={labelStyle}>Academic Year</Form.Label>
            <Form.Control as="select" style={{ border: '1px solid #E48C44' }}>
              <option>Select Academic Year</option>
              <option>2020-2021</option>
              <option>2021-2022</option>
              <option>2022-2023</option>
              <option>2023-2024</option>
              <option>2024-2025</option>
              <option>2025-2026</option>
            </Form.Control>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label style={labelStyle}>Branch</Form.Label>
            <Form.Control as="select" style={{ border: '1px solid #E48C44' }}>
              <option>Select Branch</option>
              <option>Computer Engineering</option>
              <option>Mechanical Engineering</option>
              <option>Electronics and Telecommunication Engineering</option>
              <option>Electronics and Computer Science Engineering</option>
              <option>Information Technology Engineering</option>
              <option>Internet Of Things Engineering</option>
              <option>Artificial Intelligence and Data Science</option>
              <option>Artificial Intelligence and Machine Learning</option>
            </Form.Control>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label style={labelStyle}>PRN</Form.Label>
            <Form.Control type="text" placeholder="Enter PRN" style={{ border: '1px solid #E48C44' }} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            <Link 
                to="/centeredform"
                className="btn mt-3"
                style={{
                backgroundColor: '#084CA4',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '2px',
                padding:'1px',
                margin:'5px',
                marginBottom:'20px'
                }}
            >
                Search 
            </Link>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SearchStudent;