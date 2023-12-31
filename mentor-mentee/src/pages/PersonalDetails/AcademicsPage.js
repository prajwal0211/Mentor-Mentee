import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
// import {Row, Col, Form, Button } from 'react-bootstrap';

const AcademicsPage = () => {
  const [data, setData] = useState({
    ssc: { percentage: "", medium: "", board: "" },
    hsc: { percentage: "", medium: "", board: "" },
    cet: { score: "", rank: "" },
  });

  const handleChange = (e, field, subField) => {
    const updatedData = { ...data };
    updatedData[field][subField] = e.target.value;
    setData(updatedData);
  };

  const tableStyle1 = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    width: "65%", // Set the border style and color
  };

  const tableStyle2 = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    width: "30%", // Set the border style and color
  };

  const headerCellStyle1 = {
    backgroundColor: "#0DA9B1",
    color: "black",
    border: "1px solid white", // Set the border style and color for header cells
    width: "35%",
  };

  const headerCellStyle2 = {
    backgroundColor: "#0DA9B1",
    color: "black",
    border: "1px solid white", // Set the border style and color for header cells
    width: "35%",
  };

  const dataCellStyle = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    padding: "10px", // Set the border style and color for data cells
    width: "35%",
  };

  const h4Style = {
    backgroundColor: "#084CA4", // Change the background color for the h4 element
    color: "white",
    padding: "10px", // Optional: Add padding to the h4 element
  };

  const labelStyle = {
    color: "black",
    backgroundColor: "#084CA4",
    padding: "5px",
    marginRight: "20px",
    borderRadius: "2px",
    marginBottom: "20px",
    margin: "40px 60px",
  };

  const linkStyle = {
    marginRight: "20px", // Adjust this value to increase/decrease space between links
    textDecoration: "none",
    color: "black",
    marginBottom: "20px",
  };

  const h6style = {
    color: "Black",
    padding: "10px",
    margin: "10px",
    marginRight: "10px",
    marginBottom: "5px",
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
            width: "1230px",
            height: "755px",
            background: `linear-gradient(180deg, rgba(0, 0, 255, 0.67) 0%, rgba(2, 8, 16, 0) calc(100% - 300px))`,
            borderRadius: "5px",
          }}
        >
          <h4 style={h4Style}>Academics</h4>
          <div className="position-absolute top-0 start-0 m-3">
            <img
              src="abc.jpg"
              alt="Profile"
              style={{
                width: "100px",
                marginBottom: "20px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>

          <Table striped bordered hover className="mt-3" style={tableStyle1}>
            <thead>
              <tr>
                <th style={headerCellStyle1}> </th>
                <th style={headerCellStyle1}>
                  <b>Percentage</b>
                </th>
                <th style={headerCellStyle1}>
                  <b>Medium</b>
                </th>
                <th style={headerCellStyle1}>
                  <b>Board</b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style={headerCellStyle1}>
                  <b>S.S.C</b>
                </th>
                <td style={dataCellStyle}>
                  <input
                    type="text"
                    value={data.ssc.percentage}
                    onChange={(e) => handleChange(e, "ssc", "percentage")}
                  />
                </td>
                <td style={dataCellStyle}>
                  <input
                    type="text"
                    value={data.ssc.medium}
                    onChange={(e) => handleChange(e, "ssc", "medium")}
                  />
                </td>
                <td style={dataCellStyle}>
                  <input
                    type="text"
                    value={data.ssc.board}
                    onChange={(e) => handleChange(e, "ssc", "board")}
                  />
                </td>
              </tr>
              <tr>
                <th style={headerCellStyle1}>
                  <b>H.S.C</b>
                </th>
                <td style={dataCellStyle}>
                  <input
                    type="text"
                    value={data.hsc.percentage}
                    onChange={(e) => handleChange(e, "hsc", "percentage")}
                  />
                </td>
                <td style={dataCellStyle}>
                  <input
                    type="text"
                    value={data.hsc.medium}
                    onChange={(e) => handleChange(e, "hsc", "medium")}
                  />
                </td>
                <td style={dataCellStyle}>
                  <input
                    type="text"
                    value={data.hsc.board}
                    onChange={(e) => handleChange(e, "hsc", "board")}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
          <br></br>

          <Table striped bordered hover className="mt-5" style={tableStyle2}>
            <thead>
              <tr>
                <th style={headerCellStyle2}>
                  <b></b>
                </th>
                <th style={headerCellStyle2}>
                  <b>CET/AIEEE</b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style={headerCellStyle2}>
                  <b>Score</b>
                </th>
                <td style={dataCellStyle}>
                  <input
                    type="text"
                    value={data.cet.score}
                    onChange={(e) => handleChange(e, "cet", "score")}
                  />
                </td>
              </tr>
              <tr>
                <th style={headerCellStyle2}>
                  <b>Rank</b>
                </th>
                <td style={dataCellStyle}>
                  <input
                    type="text"
                    value={data.cet.rank}
                    onChange={(e) => handleChange(e, "cet", "rank")}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
          <br></br>
          <div>
            <span style={labelStyle}>FE</span>
            <span style={labelStyle}>SE</span>
            <span style={labelStyle}>TE</span>
            <span style={labelStyle}>BE</span>
          </div>
          <br></br>
          <div>
            <Link to="/sheet" style={{ ...linkStyle, margin: "50px 60px" }}>
              <button>Sem 1</button>
            </Link>
            <Link to="/sheet" style={{ ...linkStyle, margin: "23px 33px" }}>
              <button>Sem 3</button>
            </Link>
            <Link to="/sheet" style={{ ...linkStyle, margin: "48px 58px" }}>
              <button>Sem 5</button>
            </Link>
            <Link to="/sheet" style={{ ...linkStyle, margin: "23px 33px" }}>
              <button>Sem 7</button>
            </Link>
          </div>
          <br></br>
          <div>
            <Link to="/sheet" style={{ ...linkStyle, margin: "50px 60px" }}>
              <button>Sem 2</button>
            </Link>
            <Link to="/sheet" style={{ ...linkStyle, margin: "23px 33px" }}>
              <button>Sem 4</button>
            </Link>
            <Link to="/sheet" style={{ ...linkStyle, margin: "48px 58px" }}>
              <button>Sem 6</button>
            </Link>
            <Link to="/sheet" style={{ ...linkStyle, margin: "23px 33px" }}>
              <button>Sem 8</button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AcademicsPage;
