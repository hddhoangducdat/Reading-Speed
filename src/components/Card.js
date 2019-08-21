import React, { Component } from "react";
import DropdownPage from "./DropdownPage";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

class Card extends Component {
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
    const { length } = this.props;
    const { status, runningTime } = this.state;
    return (
      <MDBCol>
        <MDBCard style={{ width: "67rem" }}>
          <MDBCardBody>
            <MDBCardTitle>Your Record</MDBCardTitle>
            <MDBCardText>
              <div>You have read {length} words</div>
              <div>
                Second per word:{" "}
                {runningTime !== 0 && !status
                  ? (runningTime * 0.001) / length + " s/w"
                  : "..............................."}
              </div>
              <div>
                Word per second:{" "}
                {runningTime !== 0 && !status
                  ? length / (runningTime * 0.001) + " w/s"
                  : "..............................."}
              </div>
            </MDBCardText>
            <MDBBtn onClick={this.handleClick} gradient="aqua">
              {status ? "Stop" : "Start"}
            </MDBBtn>
            <MDBBtn onClick={this.handleReset} gradient="aqua">
              Reset
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default Card;
