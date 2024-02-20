import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  // Carousel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SearchBar.css";
import "../Inc/StickyNavbar.css";

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
      </Navbar.Brand>
      <Nav className="d-flex flex-row-reverse flex-lg-row">
        <Nav.Link as={Link} to="/Sell">
          <Button variant="warning" className="d-sm-none ">
            Sell
          </Button>
        </Nav.Link>
      </Nav>
      {/* </Navbar.Brand> */}
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <NavDropdown title="Categories" id="categories-dropdown">
            {/* <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item> */}
            <NavDropdown.Item as={Link} to="/category_1">
              Category_1
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Category_2</NavDropdown.Item>
          </NavDropdown>
          <Nav>
            {/* <Nav.Link as={Link} to="/category">
            category 
          </Nav.Link>  */}
          </Nav>
        </Nav>
        <Form inline className="d-none d-lg-flex">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 custom-search-bar"
          />
          <span className="search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </Form>

        <Form inline className="d-flex d-lg-none">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 custom-search-bar"
          />
          <div className="search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </Form>

        <Nav>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/Sell">
            <Button variant="warning" size="lg" className="d-none d-md-block ">
              Sell
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default StickyNavbar;
