import React, { Component } from "react";
import TextBox from "./textbox";
class Counter extends Component {
  // state = {
  //   count: this.props.counter.value,
  //   tags: ["party", "moparty", "bullshit"]
  // };

  //   constructor() {
  //     super();
  //     this.incrementButton = this.incrementButton.bind(this);
  //   }

  styles = {
    fontSize: 19,
    fontWeight: "light",
    display: "block"
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.changeBadgeColour()}>
          {this.formatCount()}
          <TextBox />
        </span>
        <div className="buttons-wrap">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-primary btn-sm m-2"
          >
            MO DAT
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-primary btn-sm m-2"
          >
            LESS DAT
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            GONEZO
          </button>
        </div>
      </React.Fragment>
    );
  }

  changeBadgeColour() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
