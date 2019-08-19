import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

// src/App.js
class Button extends React.Component {
  state = {
    status: false,
    runningTime: 0
  };
  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime });
        });
      }
      return { status: !state.status };
    });
  };
  handleReset = () => {
    this.setState({ runningTime: 0, status: false });
  };
  render() {
    const { status, runningTime } = this.state;
    return (
      <div>
        <p>{runningTime}ms</p>
        <Fragment>
          <MDBBtn onClick={this.handleClick} gradient="aqua">
            {status ? "Stop" : "Start"}
          </MDBBtn>
        </Fragment>
        <Fragment>
          <MDBBtn onClick={this.handleReset} gradient="aqua">
            Reset
          </MDBBtn>
        </Fragment>
      </div>
    );
  }
}

export default Button;
