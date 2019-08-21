import React, { Component } from "react";
import NavbarPage from "./NavbarPage";
import Footer from "./Footer";
import Card from "./Card";
import TextArea from "./TextArea";
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

class App extends Component {
  state = { length: 859, edit: false };

  SetLength = len => {
    this.setState({ length: len });
  };

  IsButton = ed => {
    this.setState({ edit: ed });
  };

  ChangeEdit = ed => {
    this.setState({ edit: ed });
  };

  render() {
    const container = { height: 1100 };
    const { length, edit } = this.state;
    return (
      <div>
        <NavbarPage ChangeEdit={this.ChangeEdit} edit={edit} length={length} />
        <MDBContainer style={container} className="text-center mt-5 pt-5">
          <TextArea
            edit={edit}
            IsButton={this.IsButton}
            SetLength={this.SetLength}
          />
          <br />
          {!edit ? <Card length={this.state.length} /> : ""}
          <Footer />
        </MDBContainer>
      </div>
    );
  }
}

export default App;
