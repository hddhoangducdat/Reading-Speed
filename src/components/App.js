import React, { Component } from "react";
import NavbarPage from "./NavbarPage";
import Footer from "./Footer";
import Button from "./Button";
import TextArea from "./TextArea";

class App extends Component {
  state = { tmp: 12 };
  render() {
    return (
      <div>
        <NavbarPage />
        <TextArea props={this.state.tmp} />
        <Button />
        <Footer />
      </div>
    );
  }
}

export default App;
