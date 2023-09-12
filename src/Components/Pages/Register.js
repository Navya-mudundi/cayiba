import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";

const RegisterPage = () => {
  // State to store form field values
  const [formData, setFormData] = useState({
    employeeReference: "",
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  // State to store form validation errors
  const [errors, setErrors] = useState({
    employeeReference: "", // Add an error field for the dropdown
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const employeeReferenceOptions = ["Option 1", "Option 2", "Option 3"];
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
    if (!formData.employeeReference) {
      valid = false;
      newErrors.employeeReference = "Employee reference is required.";
    }
    if (!formData.name) {
      valid = false;
      newErrors.name = "Name is required.";
    }
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      valid = false;
      newErrors.email = "Valid email address is required.";
    }
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
      valid = false;
      newErrors.mobile = "Valid 10-digit mobile number is required.";
    }
    if (!formData.password || formData.password.length < 7) {
      valid = false;
      newErrors.password = "Password must be at least 7 characters long.";
    }
    if (formData.password !== formData.confirmPassword) {
      valid = false;
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!valid) {
      setErrors(newErrors);
      return;
    }
  };
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="employeeReference">
              <Form.Label>Employee Reference</Form.Label>
              <Form.Control
                as="select" // Use the "as" prop to create a dropdown
                name="employeeReference"
                value={formData.employeeReference}
                onChange={handleInputChange}
                required
                style={{ maxWidth: "500px" }}
              >
                <option value="">Select an option</option>
                {employeeReferenceOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
              {errors.employeeReference && (
                <div className="text-danger">{errors.employeeReference}</div>
              )}
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Enter Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{ maxWidth: "500px" }}
              />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Enter Your Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{ maxWidth: "500px" }}
              />
              {errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </Form.Group>

            <Form.Group controlId="mobile">
              <Form.Label>Enter Your Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your mobile number"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                style={{ maxWidth: "500px" }}
              />
              {errors.mobile && (
                <div className="text-danger">{errors.mobile}</div>
              )}
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Type Your Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                style={{ maxWidth: "500px" }}
              />
              {errors.password && (
                <div className="text-danger">{errors.password}</div>
              )}
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Your Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                style={{ maxWidth: "500px" }}
              />
              {errors.confirmPassword && (
                <div className="text-danger">{errors.confirmPassword}</div>
              )}
            </Form.Group>
            <br />
            <Button variant="danger" type="submit" block>
              Register
            </Button>
          </Form>
          <div className="text-center mt-3">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
