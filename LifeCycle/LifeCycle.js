import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: {
        index: 1,
      },
    };
    console.log("contructor");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  render() {
    console.log("render");
    return (
      <div>
        <header>Header component</header>
        <h1>
          Lifecycle number
          {this.state.number.index}
        </h1>
        <button
          onClick={() => {
            let newNumber = this.state.number;
            newNumber.index += 1;

            this.setState({
              number: newNumber,
            });
          }}
        >
          +
        </button>
        {/* {this.state.number < 3 ? <ChildComponent /> : ""} */}
        <ChildComponent number={this.state.number} />
      </div>
    );
  }
  componentDidMount() {
    // Gọi api tại didmount
    console.log("conponentDidMount");
  }
  componentDidUpdate() {
    console.log("conponentDidUpdate");
  }
}
