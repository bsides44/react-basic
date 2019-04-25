import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onRefresh,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;

    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-secondary btn-med m-4">
          RESET
        </button>
        <button onClick={onRefresh} className="btn btn-secondary btn-med m-4">
          REFRESH
        </button>
        <br />
        {counters.map(counter => (
          <span>
            <Counter
              key={counter.id}
              onDelete={onDelete}
              counter={counter}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
            <br />
          </span>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
