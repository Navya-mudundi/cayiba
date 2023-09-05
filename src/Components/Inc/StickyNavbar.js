import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel } from 'react-bootstrap';

const StickyNavbar = () => {
  return (
      <Navbar sticky="top" bg="" expand="lg" className="justify-content-between align-items-center">
        <Navbar.Brand href="#home">
          <img
            src="https://www.cayiba.com/resources/images/cayiba_logo2.png" 
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {/* <button className=" btn btn-secondary btn-sm" type="submit">Sell</button>  */}
        </Navbar.Brand>
         <Navbar.Toggle aria-controls="navbar-nav" />
           <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
             <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Categories" id="categories-dropdown">
                   <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline className="d-none d-sm-flex">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>  
         <Form inline className="d-flex d-sm-none">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />      
         </Form>
         <Nav>
       <Nav.Link href="#login">Login</Nav.Link> 
       </Nav>
       <Nav>
       <button className="btn" type="submit">Sell</button>    
       </Nav>
       </Navbar.Collapse> 
     </Navbar>    
    );

  };
     
export default StickyNavbar;
     
     
     
     
     
     
     