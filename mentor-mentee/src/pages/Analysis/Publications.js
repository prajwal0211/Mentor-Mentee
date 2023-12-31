import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useDropzone } from "react-dropzone";
import * as pdfjs from "pdfjs-dist/webpack"; // Use this import statement

function Publications({ studentPrn, userType }) {
  const [publicationData, setPublicationData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [newPublication, setNewPublication] = useState({
    topicName: "",
    authorName: "",
    fileType: "",
    file: null,
    description: "",
    documentContent: "",
  });
  const [downloadRequested, setDownloadRequested] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/publications.json");
        const data = await response.json();
        const filteredData = data.filter(
          (publication) => publication.studentPrn === studentPrn
        );
        setPublicationData(
          filteredData.map((publication, index) => ({
            ...publication,
            id: index,
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [studentPrn]);

  useEffect(() => {
    if (downloadRequested && selectedPublication) {
      const { documentContent } = selectedPublication;

      if (documentContent.trim() !== "") {
        const blob = new Blob([documentContent], { type: "text/plain" });

        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "document.txt";

        document.body.appendChild(downloadLink);
        downloadLink.click();

        document.body.removeChild(downloadLink);
      } else {
        console.error("Document content is empty.");
      }

      setDownloadRequested(false);
    }
  }, [downloadRequested, selectedPublication]);

  const handleShowModal = () => {
    setShowModal(true);
    setNewPublication({
      topicName: "",
      authorName: "",
      file: null,
      description: "",
      documentContent: "",
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPublication(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (selectedPublication) {
      setSelectedPublication((prevPublication) => ({
        ...prevPublication,
        [name]: value,
      }));
    } else {
      setNewPublication((prevPublication) => ({
        ...prevPublication,
        [name]: value,
      }));
    }
  };

  const handleFileChange = async (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      const reader = new FileReader();
      reader.onload = async (event) => {
        const fileContent = event.target.result;

        try {
          const pdf = await pdfjs.getDocument({ data: fileContent }).promise;
          const numPages = pdf.numPages;

          let textContent = "";
          for (let i = 1; i <= numPages; i++) {
            const page = await pdf.getPage(i);
            const pageText = await page.getTextContent();
            textContent += pageText.items.map((item) => item.str).join(" ");
          }

          if (selectedPublication) {
            setSelectedPublication((prevPublication) => ({
              ...prevPublication,
              file: file,
              documentContent: textContent,
            }));
          } else {
            setNewPublication((prevPublication) => ({
              ...prevPublication,
              file: file,
              documentContent: textContent,
            }));
          }
          console.log(selectedPublication);
        } catch (error) {
          console.error("Error extracting text content:", error);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    // accept: [".pdf", ".doc", ".docx"],
    multiple: false,
    onDrop: handleFileChange,
  });

  const handleAddPublication = () => {
    const newPublicationWithId = {
      ...newPublication,
      id: publicationData.length,
    };

    setPublicationData((prevData) => [...prevData, newPublicationWithId]);
    handleCloseModal();
    console.log(publicationData);
  };

  const handleEditPublication = () => {
    const updatedData = publicationData.map((publication, index) =>
      index === selectedPublication.id
        ? { ...selectedPublication }
        : publication
    );
    setPublicationData(updatedData);
    handleCloseModal();
  };

  const handleEditClick = (publication) => {
    setSelectedPublication(publication);
    handleShowModal();
  };

  const handleDownload = (publication) => {
    setSelectedPublication(publication);
    setDownloadRequested(true);
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="d-flex pt-5 ps-5">
        <h3 className="mb-3 text-dark">Publications</h3>
        {userType === "mentee" && (
          <Button
            variant="outline-dark"
            size="sm"
            style={{
              position: "absolute",
              right: "10px",
              zIndex: 1,
            }}
            onClick={handleShowModal}
          >
            <AddOutlinedIcon />
          </Button>
        )}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }} className="p-5">
        {publicationData.map((publication) => (
          <Card
            key={publication.id}
            style={{ width: "22rem" }}
            className="p-3 me-lg-3 mb-3 me-sm-3"
          >
            <Card.Body>
              <Card.Title>{publication.topicName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Author: {publication.authorName}
              </Card.Subtitle>
              <Card.Text>Description: {publication.description}</Card.Text>
              <Button
                className="d-flex justify-content-center"
                variant="outline-dark"
                onClick={() => {
                  handleDownload(publication);
                }}
              >
                Open Document
              </Button>
              {userType === "mentee" && (
                <Button
                  variant="outline-warning"
                  size="sm"
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    zIndex: 1,
                  }}
                  onClick={() => handleEditClick(publication)}
                >
                  <EditOutlinedIcon fontSize="small" />
                </Button>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedPublication ? "Edit Publication" : "Add Publication"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Topic Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter topic name"
                name="topicName"
                value={
                  selectedPublication
                    ? selectedPublication.topicName
                    : newPublication.topicName
                }
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Author Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author name"
                name="authorName"
                value={
                  selectedPublication
                    ? selectedPublication.authorName
                    : newPublication.authorName
                }
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                name="description"
                value={
                  selectedPublication
                    ? selectedPublication.description
                    : newPublication.description
                }
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>File</Form.Label>
              <div
                {...getRootProps()}
                style={{
                  border: "1px solid #ced4da",
                  borderRadius: "4px",
                  padding: "20px",
                  cursor: "pointer",
                }}
              >
                <input {...getInputProps()} />
                {selectedPublication ? (
                  <p>{selectedPublication.file.name}</p>
                ) : newPublication.file ? (
                  <p>{newPublication.file.name}</p>
                ) : (
                  <p>Drag 'n' drop a file here, or click to select a file</p>
                )}
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {userType === "mentee" && (
            <Button
              variant="primary"
              onClick={
                selectedPublication
                  ? handleEditPublication
                  : handleAddPublication
              }
            >
              {selectedPublication ? "Edit Publication" : "Add Publication"}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Publications;
