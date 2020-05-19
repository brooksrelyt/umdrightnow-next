import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">UMDRightNow</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/events">Events Example</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/articles">Articles Example</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="pl-5"><a className="btn outline" href="/contact">Contact Us</a></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;