import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Universities.css";

// Define the Popup component
const Popup = ({ message, onClose }) => (
  <div className="popup">
    <div className="popup-content">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

function Universities() {
  const [universities, setUniversities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newUniversity, setNewUniversity] = useState({
    name: "",
    location: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    // Fetch data from the JSON file (assuming it's in the public folder)
    fetch("/universities.json")
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredUniversities = universities.filter(
    (university) =>
      university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      university.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addUniversity = () => {
    const { name, location } = newUniversity;

    if (
      !universities.some(
        (u) =>
          u.name.toLowerCase() === name.toLowerCase() ||
          u.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      setUniversities([...universities, { name, location }]);
      setNewUniversity({ name: "", location: "" });
    } else {
      setPopupMessage("University already exists.");
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage("");
  };

  return (
    <div className="universities-container">
      <h2>List of Universities for Higher Education</h2>

      <div className="mb-3 search">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a university"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredUniversities.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="row m-5 g-0">
          {filteredUniversities.map((university, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className="card p-3"
                style={{ width: "18rem", height: "12rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Name: {university.name}</h5>
                  <p className="card-text">Location: {university.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4">
        <h4>Add a New University</h4>
        <div className="mb-3">
          <input
            type="text"
            className="form-control w-50"
            placeholder="University Name"
            value={newUniversity.name}
            onChange={(e) =>
              setNewUniversity({ ...newUniversity, name: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Location"
            value={newUniversity.location}
            onChange={(e) =>
              setNewUniversity({ ...newUniversity, location: e.target.value })
            }
          />
        </div>
        <button className="btn btn-primary" onClick={addUniversity}>
          Add University
        </button>
      </div>

      {showPopup && <Popup message={popupMessage} onClose={closePopup} />}

      <footer className="mt-4"></footer>
    </div>
  );
}

export default Universities;
