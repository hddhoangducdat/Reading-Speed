import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class NavbarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      edit: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    const bgPink = { backgroundColor: "#3f59cd" };
    const { edit, ChangeEdit } = this.props;
    return (
      <div>
        <Router>
          <header>
            <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                <strong>Test Your Reading Speed</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.ChangeEdit} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem onClick={() => ChangeEdit(!edit)} active>
                    <MDBNavLink to="#">
                      <i
                        style={{ margin: "5px" }}
                        className="fas fa-pencil-alt prefix"
                      />{" "}
                      EDIT
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      <MDBIcon fab icon="facebook-f" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      <MDBIcon fab icon="twitter" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      <MDBIcon fab icon="instagram" />
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

export default NavbarPage;
