import React, { useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDropzone } from 'react-dropzone';


function LOR() {
   
  const footerStyle = {
    height: '90px', 
  };

  const boxStyle = {
    width: 569,
    height: 1140,
    border: '3px solid #ddd',
    borderRadius: '5px',
    position: 'absolute',
    marginTop: '100px',
    left: 469,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
    maxHeight: 800, 
    overflowY: 'auto',
  };

  const projectDetailsStyle = {
    padding: '20px 0',
    maxHeight: 'calc(100% - 190px)', // Adjust this value based on your layout
    overflowY: 'auto',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: 'white',
  };

  const subheadingStyle = {
    fontSize: '20px',
    fontWeight: 'normal',
  };

  const subRectangleStyle = {
    backgroundColor: '#B36C36', 
    width: '108%', 
    height: '80px', 
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '-21px 0 0 0', 
    marginLeft: '-21px'
  };

  const formLabelStyle = {
    color: 'orange',
    marginBottom: '5px', 
    marginLeft: '10px', 
    flex: '0 0 190px',
  };

  const formControlStyle = {
    backgroundColor: 'lightgray',
    color: 'black',
    width: '100%',
    borderRadius: '5px',
    marginBottom: '10px',
    alignItems: 'center',
  };

  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10px',
    marginTop: '10px',
  };

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setIsValidEmail(validateEmail(enteredEmail));
  };

  const formControlFeedback = {
    marginLeft: '10px'
  }

  const yearOptions = ["2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027","2028"];
  const [admissionYear, setAdmissionYear] = useState("");
  const [passingYear, setPassingYear] = useState("");

  const [contactNumber, setContactNumber] = useState("");
  const [isValidContactNumber, setIsValidContactNumber] = useState(true);

  const validateNumericInput = (value) => {
    const numericRegex = /^[0-9]*$/;
    return numericRegex.test(value) ;
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const allowedExtensions = ['pdf', 'jpg', 'jpeg', 'png'];
  
    // Filter files based on their extension
    const filteredFiles = acceptedFiles.filter((file) => {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      return allowedExtensions.includes(fileExtension);
    });
  
    // Update the state with the filtered files
    setUploadedFiles((prevFiles) => [...prevFiles, ...filteredFiles]);
  }, []);
  

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleRemoveFile = (index) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
  };


  const [projects, setProjects] = useState([
    { name: '', description: '' } 
  ]);

  const handleAddProject = () => {
    setProjects([...projects, { name: '', description: '' }]);
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between', 
    marginTop: '10px',
  };
  
  const addProjectButtonStyle = {
    padding: '6px 12px',
    fontSize: '14px',
    marginLeft:'250px'
  };
  
  const removeProjectButtonStyle = {
    padding: '6px 12px',
    fontSize: '14px',
  };

  const handleRemoveProject = (indexToRemove) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project, index) => index !== indexToRemove)
    );
  };

  const submitButtonStyle = {
    display: 'flex',
    marginTop: '25px',
    marginLeft: '220px',
  };

  return (
    <Container style={boxStyle}>
      <div style={subRectangleStyle}>
        <h1 style={headingStyle}>Application for Letter of Recommendation</h1>
        <h1 style={headingStyle}>for Higher Education</h1>
      </div>
      <div>
      <Form>
          <Form.Group controlId="formName" style={formGroupStyle}>
            <Form.Label style={formLabelStyle}>Name:</Form.Label>
            <Form.Control style={formControlStyle} type="text" required />
          </Form.Group>

          <Form.Group controlId="formPRN" style={formGroupStyle}>
            <Form.Label style={formLabelStyle}>PRN:</Form.Label>
            <Form.Control style={formControlStyle} type="text" required />
          </Form.Group>

          <Form.Group controlId="formEmail" style={formGroupStyle}>
            <Form.Label style={formLabelStyle}>Email ID:</Form.Label>
            <Form.Control
              style={formControlStyle}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setIsValidEmail(validateEmail(email))}
              isInvalid={!isValidEmail}
              required
            />
            <Form.Control.Feedback type="invalid" style={formControlFeedback}>
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formAdmissionYear" style={formGroupStyle}>
            <Form.Label style={formLabelStyle}>Year of Admission:</Form.Label>
            <Form.Control as='select' style={formControlStyle} value={admissionYear} onChange={(e) => setAdmissionYear(e.target.value)} required>
            <option value="" disabled>Select Admission Year</option>
            {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
            ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formPassingYear" style={formGroupStyle}>
            <Form.Label style={formLabelStyle}>Year of Passing:</Form.Label>
            <Form.Control as="select" style={formControlStyle} value={passingYear} onChange={(e) => setPassingYear(e.target.value)} required>
            <option value="" disabled>Select Passing Year</option>
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formContact" style={formGroupStyle}>
            <Form.Label style={formLabelStyle}>Contact No.:</Form.Label>
            <Form.Control
              style={formControlStyle}
              type="tel"
              pattern="[0-9]{10}"
              maxLength="10"
              value={contactNumber}
              onChange={(e) => {
                const inputValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                setContactNumber(inputValue);
                setIsValidContactNumber(inputValue.length === 10);
              }}
              isInvalid={!isValidContactNumber}
              required
            />
            <Form.Control.Feedback type="invalid" style={formControlFeedback}>
              Please enter a valid 10-digit contact number.
            </Form.Control.Feedback>
          </Form.Group>





          <Form.Group controlId="formExamTaken" style={formGroupStyle}>
            <Form.Label style={formLabelStyle}>Exam Taken:</Form.Label>
            <Form.Control style={formControlStyle} type="text" required />
          </Form.Group>

          <Form.Group controlId="formScoreCard" style={formGroupStyle}>
            <Form.Label style={{ ...formLabelStyle, marginBottom: '5px' }}>Upload Score Card:</Form.Label>
            <div {...getRootProps()} style={{ ...formControlStyle, border: '2px dashed #ddd', padding: '20px', textAlign: 'center', cursor: 'pointer'}}>
              <input {...getInputProps()} required />
              <p style={{...formControlStyle, textAlign: 'left', marginLeft: '-10px'}}>
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Click to Select Files (JPG, PNG, PDF allowed)</p>
                )}
              </p>
            </div>
            {uploadedFiles.length > 0 && (
              <div>
                <strong>Selected Files:</strong>
                <ul>
                  {uploadedFiles.map((file, index) => (
                    <li key={index}>
                      {file.name}{' '}
                      <Button variant="danger" size="sm" onClick={() => handleRemoveFile(index)}>
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Form.Group>

          <Form.Group controlId="formRegistrationNo" style={formGroupStyle}>
            <Form.Label style={formLabelStyle}>Enter Registration No.:</Form.Label>
            <Form.Control style={formControlStyle} type="text" required />
          </Form.Group>

          <Form.Group controlId="formRecommenderName" style={formGroupStyle}>
            <Form.Label style={formLabelStyle}>Faculty Recommender Name:</Form.Label>
            <Form.Control style={formControlStyle} type="text" required />
          </Form.Group>

          <Form.Group controlId="formProjectGuide" style={formGroupStyle}>
            <Form.Label style={formLabelStyle}>Project Guide:</Form.Label>
            <Form.Control style={formControlStyle} type="text" required />
          </Form.Group>

          <hr /> 

          <div style={projectDetailsStyle}>
            <Form.Label style={{ ...formLabelStyle, marginBottom: '15px' }}>Project Details:</Form.Label>
            {projects.map((project, index) => (
              <div key={index}>
                <Form.Group controlId={`projectName${index}`} style={formGroupStyle}>
                  <Form.Label style={formLabelStyle}>Project Name:</Form.Label>
                  <Form.Control
                    style={formControlStyle}
                    type="text"
                    value={project.name}
                    onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId={`projectDescription${index}`} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Form.Label style={formLabelStyle}>Project Description:</Form.Label>
                  <Form.Control
                    style={formControlStyle}
                    as="textarea"
                    rows={3}
                    value={project.description}
                    onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            ))}
          </div>


          <div style={buttonContainerStyle}>
            <Button variant="primary" onClick={handleAddProject} style={addProjectButtonStyle}>
              Add Project
            </Button>
            {projects.length > 1 && (
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleRemoveProject(projects.length - 1)} // Assuming you want to remove the last project
                style={removeProjectButtonStyle}
              >
                Remove
              </Button>
            )}
          </div>
          <Form.Group style={submitButtonStyle}>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form.Group>
        </Form>
        <div style={footerStyle}></div>
      </div>
      
    </Container>
  );
};

export default LOR;