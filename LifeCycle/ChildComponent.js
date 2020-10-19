import React, { Component, PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Constructor child");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps child");
    return null;
  }

  render() {
    console.log("render child");
    return (
      <div>
        <h3>Child number: {this.props.number.index}</h3>
        Component child:
      </div>
    );
  }
  conponentDidMount() {
    console.log("componentDidMount child");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate child");
  }
  componentWillUnmount() {
    // life cycle chạy trước khi component mất khỏi giao diện
    console.log("componentWillUnmount");
  }
}
