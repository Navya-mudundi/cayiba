import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel } from 'react-bootstrap';

const StickyNavbar = () => {
  return (
    
  
      <Navbar sticky="top" bg="" expand="lg" className="justify-content-between align-items-center">
      
        <Navbar.Brand href="#home">
         <img
            src="https://www.cayiba.com/resources/images/cayiba_logo2.png" 
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
         />
       </Navbar.Brand>
         <Navbar.Toggle aria-controls="navbar-nav" />
           <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
             <Nav.Link href="#home">Home</Nav.Link>
             <NavDropdown title="Categories" id="categories-dropdown">
                <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>
             </NavDropdown>
        </Nav>
            <Form inline className="d-none d-sm-flex">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              {/* <Button variant="outline-primary">Search</Button> */}
           </Form>
         
            {/* <a href="https://www.cayiba.com/users/login" class="button border uploadproductbutton">login</a>  */}
            {/* <Nav.Link href="#wishlist">
             <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAZlBMVEX///8AAAD8/PyBgYH09PT5+fni4uLx8fG7u7t8fHwODg7u7u64uLjX19fExMRhYWHMzMwfHx+hoaFNTU1zc3Otra2NjY00NDRWVlZCQkJbW1tra2skJCQZGRk7Ozunp6eVlZUsLCwuCgxlAAAEgUlEQVRoge1ayWKCMBBlMYDsi7IoUvz/n2zNJFGUbEDshXcs04yZ9SUZy9qxY8eOHTt2/AuQlwdxHAe5hxSkHS1pMbzUbYrQBoRFU6eeULqeSLtCaQn8ICvsdxTtOZqVjs7tjHQW+It0H8bmYzGyq2PyIZ0cQ450Mx70lZ85iwGyqUm9TCh91tSdTPZddJfsMtwmKx6fFvWPU9M01aWaSjefxhKgZP93u5aJj5y/vznIT8pTz770AREOnn8rrmUeIcexHAdFSXl9eqNUV872UsXvERalGVvyiH8UEw6z9EM6rpiwom7nRHXns989l/24yIrY8u58duVU4OQoaafKY65EREV6ZvUTP7NjKqKinOysEpaq5D4JtLswqhDZvitXflZzk+O+KHdlRiWxIc08T/dnqixKDRrKCm+l7qKcKJ+PzTdApFRioRQLNWrhmWBhtUKCoHylQiEI4fk2Mq9etYpFkCQiEUgO9boU2IFciGCUpDFJjbsGLdDo3wgnact3aqIawovwIwkTnJbNMjogh38XFpLD8PhcG1JuWfVj+YHHNXKNDFqCRFgecFfvFvAgRRw6UUa1KgV+DXBctZyPvSQhV+MsKDheqFPnliAStBoIuvUnED6QIOwCHHRqDWYZHJzS88UZe+ViULllXfi19Ee5sy8G7vI/s59GRVKzApjijLOfarN1VqJi/JL2ka/93yyPY/5qVPuVH/NnURXeBi1fO+azvdFaV/B5LbRfcw32r8UKCMThZpZckP3dOPtr9Oi0PjB9aTgfT6ZLrVBBbJTS/pHaRkRfdM5lSyBe3+m+wKj5BAKzvs5UxqNOzFrBNOJT7nKkEscC4c4Mac9kxwU45a64WBYA7mRGgQQc8c10Wbi6ERL2qzFWDWxa3MATY5t3VYpJZcjz4HXJnRU50GzPcE6CY8wLWiM5D7kuJ07g+WbbwCO3dQotxDUQeEflNaN+c9uD3Xulwzk+y9rhdrZH8JqheC+RbRz3UMJU2wdQT85ZUx9wS6hOlsFPG7lefzGI+2ILkpUU2jmEoOYM6xmmP0CJ1YphD9KuW629g2TTbBzk2WNt4EO4qz2evIK8oq07XJB3uwU3kLW9uuSSV7NFHP20Vr27ynvEaUvvjYnypRTZqdb4npiuWn75SdRn+is4ZBpBxqWE6MgaumXHJ797XcFAF1hl0CsXHlQ4u13ZpqkFQ52an5DxhMt6jiAfBnhHYG9TKDFGWy/x6cv8RhcBhB48xizkYIMYm10/BcSPhbxb5GTaKdzwdSkhMSxlW9RMeuM9MhyoPTMRPTvQgadu65ct0vJ4jzoP0Fg3cQamzreP89s/0KGjUH0iQANeS5Yf5vhpSkOjMnPx8jJj474XMcT/tB1SquM2zb2czbMZsToFonX3db7vOdt3NXm7/0BAtxmWYGNUsjlOk+/XBD7bafOIPhZt9sXk8/UT8Z1ZOmeeKL6wcYD/OmBGisB3Ng7wuonuweRrzhzOzPx2b2o+SICoJrFef9PoT3hX+2Ou95tI6m87fMeOHTt27Nghxy/xxyocwmfw6gAAAABJRU5ErkJggg==" 
              width="20"
              height="20"
              alt="Wishlist" */}
              {/* /> */}
           {/* </Nav.Link> */}
           {/* <Nav.Link href="#cart">
             <img
                // 
                width="20"
                height="20"
                alt="Cart"
              />
            </Nav.Link> */}
        
         <Form inline className="d-flex d-sm-none">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            {/* <Button class="btn btn-outline-light btn-lg" >Search</Button> */}
            {/* <button type="button" class="btn-primary"> Sell</button> */}
         </Form>
         <Nav>
       <Nav.Link href="#login">Login</Nav.Link> 
       </Nav>
       <Nav>
           {/* <a class="btn btn-primary" href="#" role="button">Link</a> */}
           <button class="btn btn-primary" type="submit">Sell</button>
       </Nav>
       </Navbar.Collapse>
       
     </Navbar>

  
  
     
    );

  };
     
     export default StickyNavbar;
     
     
     
     
     
     
     