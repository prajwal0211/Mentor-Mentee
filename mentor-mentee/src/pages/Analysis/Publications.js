import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Publications({ studentPrn }) {
  const [publicationData, setPublicationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the local JSON file
        const response = await fetch("/publications.json");
        const data = await response.json();
        const filteredData = data.filter(
          (publication) => publication.studentPrn === studentPrn
        );
        setPublicationData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [studentPrn]);

  const openDocument = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {publicationData.map((publication) => (
        <Card key={publication.id} style={{ width: "18rem", margin: "10px" }}>
          <Card.Body>
            <Card.Title>{publication.topicName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Author: {publication.authorName}
            </Card.Subtitle>
            <Button onClick={() => openDocument(publication.documentUrl)}>
              Open Document
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Publications;
