import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Carousel,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const StickyNavbar = () => {
  return (
    <Navbar
      sticky="top"
      bg=""
      expand="lg"
      className="justify-content-between align-items-center"
    >
      <Navbar.Brand href="#home">
        <img
          src="https://www.cayiba.com/resources/images/cayiba_logo2.png"
          width="100"
          height="50"
          className="d-inline-block align-top"
          alt="Logo"
        />
        <Button variant="danger" className="d-sm-none ">
          Sell
        </Button>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Categories" id="categories-dropdown">
            <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline className="d-none d-lg-flex">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Form inline className="d-flex d-lg-none">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Nav>
          {/* <Nav.Link href="#Login">Login</Nav.Link>  */}
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        </Nav>
        <Button variant="danger" className="d-none d-md-block">
          Sell
        </Button>

        <Nav></Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default StickyNavbar;
