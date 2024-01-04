import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import './JobRecord.css';

function JobRecord() {
    const [searchOption, setSearchOption] = useState(''); 
    const [searchParams, setSearchParams] = useState({
      StudentPRN: '',
      studentName: '',
      CompanyName: '',
    });
  
    const handleSearchOptionChange = (e) => {
      setSearchOption(e.target.value);
      setSearchParams({
        StudentPRN: '',
        studentName: '',
        CompanyName: '',
      }); 
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSearchParams((prevParams) => ({ ...prevParams, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Search Parameters:', searchParams);
    };
  
    return (
      <div className="jobrecord-container">
      <header>
        
      </header>

      <Container className="mt-4">
        <h1 className="custom-heading">STUDENT JOB RECORDS</h1>
  
        <Form className="mt-4 search-form" onSubmit={handleSubmit}>
          <Form.Group controlId="searchOption">
            <Form.Label>Search By:</Form.Label>
            <Form.Control
              as="select"
              value={searchOption}
              onChange={handleSearchOptionChange}
              className="select-box"
            >
              <option value="" disabled>Choose...</option>
              <option value="StudentPRN">Student PRN</option>
              <option value="studentName">Student Name</option>
              <option value="CompanyName">Company Name</option>
            </Form.Control>
          </Form.Group>
  
          {searchOption && (
            <Form.Group controlId={searchOption}>
              <Form.Label className='search-Option'>{`Enter ${searchOption === 'StudentPRN' ? 'Student PRN' : (searchOption === 'studentName' ? 'Student Name' : 'Company Name')}:`}</Form.Label>
              <Form.Control
                type="text"
                name={searchOption}
                value={searchParams[searchOption]}
                placeholder={`Enter ${searchOption === 'StudentPRN' ? 'Student PRN' : (searchOption === 'studentName' ? 'Student Name' : 'Company Name')}`}
                onChange={handleInputChange}
              />
            </Form.Group>
          )}

        <Button variant="primary" type="search" className="search-button">
          Search
        </Button>
      </Form>

      <h2 className="mt-5">Search Results</h2>

      <Table striped bordered hover className="mt-4 results-table">
        <thead>
          <tr>
            <th>Student PRN</th>
            <th>Student Name</th>
            <th>Job Title</th>
            <th>Company Name</th>
            <th>Status</th>
            <th>Proof</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>

      <footer className="mt-4">
      </footer>
    </Container>
    </div>
  );
};

export default JobRecord;
