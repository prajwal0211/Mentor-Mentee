import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Login() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (inputValue.toLowerCase() === "mentor") {
      navigate("/mentor/dashboard");
    } else if (inputValue.toLowerCase() === "mentee") {
      navigate("/mentee/dashboard");
    }
    // You can add additional conditions or logic here
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="warning" onClick={handleLogin}>
        Login
      </Button>{" "}
    </div>
  );
}

export default Login;
