import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Sheet = () => {
  const [tableData, setTableData] = useState([
    ["", "", "", "", "", "", "", "", "", ""],
    ...Array(8).fill(Array(10).fill("")), // Changed the column count to 10
  ]);

  const handleInputChange = (e, rowIndex, colIndex) => {
    const updatedData = tableData.map((row, rIndex) =>
      row.map((cell, cIndex) => {
        if (rIndex >= 2 && cIndex >= 0) {
          if (rIndex === rowIndex && cIndex === colIndex) {
            return e.target.value;
          }
          return cell;
        }
        return cell;
      })
    );
    setTableData(updatedData);
  };

  const tableStyle1 = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    width: "65%", // Set the border style and color
  };

  const headerCellStyle1 = {
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
    backgroundColor: "#084CA4",
    color: "white",
    padding: "10px",
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
          <div>
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
            <div className="text-end me-3">
              <p className="mb-0">Year: [Year]</p>
              <p className="mb-0">Semester: [Semester]</p>
            </div>
            <table border="1" style={tableStyle1}>
              <thead>
                <tr>
                  {Array.from({ length: 4 }, (_, index) => (
                    <th
                      key={index}
                      style={{ width: "90px", backgroundColor: "#0DA9B1" }}
                    ></th>
                  ))}
                  <th style={{ backgroundColor: "#0DA9B1" }} colSpan="6">
                    Marks Obtained
                  </th>
                </tr>
                <tr>
                  {Array.from({ length: 0 }, (_, index) => (
                    <th key={index} style={{ width: "80px" }}></th>
                  ))}
                  <th style={{ backgroundColor: "#0DA9B1" }}>Subject</th>
                  <th style={{ backgroundColor: "#0DA9B1" }}>Test 1</th>
                  <th style={{ backgroundColor: "#0DA9B1" }}>Test 2</th>
                  <th style={{ backgroundColor: "#0DA9B1" }}>Average</th>
                  <th style={{ width: "90px", backgroundColor: "#0DA9B1" }}>
                    Attempt-1
                  </th>
                  <th style={{ width: "90px", backgroundColor: "#0DA9B1" }}>
                    Attempt-2
                  </th>
                  <th style={{ width: "90px", backgroundColor: "#0DA9B1" }}>
                    Attempt-3
                  </th>
                  <th style={{ width: "90px", backgroundColor: "#0DA9B1" }}>
                    Attempt-4
                  </th>
                  <th style={{ width: "90px", backgroundColor: "#0DA9B1" }}>
                    Attempt-5
                  </th>
                  <th style={{ width: "90px", backgroundColor: "#0DA9B1" }}>
                    Attempt-6
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, colIndex) => (
                      <td
                        key={colIndex}
                        style={{ width: "40%", backgroundColor: "#0DA9B1" }}
                      >
                        {rowIndex === tableData.length - 1 && colIndex === 0 ? (
                          <b>No. Of ATKTs</b>
                        ) : (
                          rowIndex >= 0 &&
                          colIndex >= 0 && (
                            <input
                              type="text"
                              value={cell}
                              onChange={(e) =>
                                handleInputChange(e, rowIndex, colIndex)
                              }
                              style={{ width: "90%" }}
                            />
                          )
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <br></br>
            <div className="d-flex justify-content-between mt-3">
              <span style={{ marginRight: "57px", marginBottom: "20px" }}>
                Month & Year of First Attempt
              </span>
              <Form.Control type="text" placeholder="Eg.October 2022" />
              <span style={{ marginLeft: "1.3%", margin: "10px" }}></span>
              <span style={{ marginLeft: "1%", margin: "10px", width: "2px" }}>
                Out of
              </span>
              <Form.Control type="text" placeholder="Eg.198/300" />
              <br></br>
              <span style={{ marginRight: "15px", marginBottom: "20px" }}>
                Month & Year of Passing all subjects
              </span>
              <Form.Control type="text" placeholder="Eg.October 2022" />
              <span style={{ marginLeft: "0.1%", margin: "10px" }}></span>
              <span style={{ marginLeft: "1%", margin: "10px", width: "1px" }}>
                % Marks
              </span>
              <Form.Control type="text" placeholder="Eg.93" />
              <br></br>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Sheet;
