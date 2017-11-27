import React from 'react';
import stackOverflowData from '../data';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, FormGroup, Label, Input } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/"><img className="img" src={"/kanye-west.png"} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
            {stackOverflowData.navbar_links.map((link) => (
            	<NavItem>
            	  <NavLink href="/components/">{link}</NavLink>
            	</NavItem>
            ))}
            </Nav>
            <Nav className="ml-auto" navbar>
	            <Form>
		            <FormGroup>
		              <Input type="search" name="search" id="exampleSearch" placeholder="search Kanye Yo" />
		            </FormGroup>
		          </Form>
		        </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}