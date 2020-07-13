import React, { Component } from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBIcon,
  } from "mdbreact";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color="white darken-5" className="black-text" dark expand="md" style={{width:'100%'}}>
        <MDBNavbarBrand>
          <strong className="black-text">App</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse}  className="black"/>
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink className="black-text" to="/">
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="black-text" to="/agenda">
                Agenda
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="black-text" to="/covid">
                Covid-19
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon className="black-text" fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon className="black-text" fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon className="black-text" icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="black-text dropdown-default">
                  <MDBDropdownItem className="black-text" href="#!">
                    Action
                  </MDBDropdownItem>
                  <MDBDropdownItem className="black-text" href="#!">
                    Another Action
                  </MDBDropdownItem>
                  <MDBDropdownItem className="black-text" href="#!">
                    Something else here
                  </MDBDropdownItem>
                  <MDBDropdownItem className="black-text" href="#!">
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
