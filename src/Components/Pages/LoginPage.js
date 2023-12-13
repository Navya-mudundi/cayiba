import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../Pages/LoginPage.css";

const LoginPage = () => {
  // State to store form field values
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });
  
  // State to store form validation errors
  const [errors, setErrors] = useState({
    mobile: "",
    password: "",
  });
  const [LoginSuccess, setLoginSuccess] = useState(null);
  const captureFormData = () => {
    console.log("Form Data:", formData);
      setTimeout(()=>{
      setLoginSuccess(true);
    },2000);
  };
  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset validation error for the field
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    let valid = true;
    const newErrors = { ...errors };
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
      valid = false;
      newErrors.mobile = "Mobile number must be 10 digits.";
    }
    if (!formData.password || formData.password.length < 7) {
      valid = false;
      newErrors.password = "Password must be at least 7 characters long.";
    }
    // If any validation errors, update state and stop submission
    if (!valid) {
      setErrors(newErrors);
      setLoginSuccess(false)
      return;
    }
    captureFormData();
  };
  return (
    <Container className="mt-5">
      <div>
        <h2 style={{ color: "black", display: "inline", position: "relative" }}>
          Login
        </h2>
        <hr className="line" />
      </div>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="mobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter mobile number"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
            style={{ maxWidth: "400px" }}/>
           {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={{ maxWidth: "400px" }}/>
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </Form.Group>
        <br />
        <Button variant="warning custom-button" size="lg" type="submit" block>
          Login
        </Button>
      </Form>
      <div className="text-center mt-3">
        <p>
          New to Cayiba? <a href="/register">Register</a>
        </p>
      </div>
      {LoginSuccess === true && (
        <div className="text-success mt-3">Login successful!</div>
      )}
      {LoginSuccess === false && (
        <div className="text-danger mt-3">Login failed. Please try again.</div>
      )}
    </Container>
  );
};
export default LoginPage;
