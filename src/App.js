import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  componentDidMount() {
    const originalState = [...this.state.counters];
    this.setState({
      ...this.state.counters,
      originalState
    });
    // this.handleRefresh(originalState);
  }

  styles = {
    fontSize: 15,
    fontWeight: "light"
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({
      counters
    });
  };

  handleReset = () => {
    {
      const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
      });

      this.setState({
        counters
      });
    }
  };

  handleRefresh = () => {
    const counters = this.state.originalState;
    this.setState({
      counters
    });
  };

  incrementButton = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({
      counters
    });
  };

  decrementButton = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;

    this.setState({
      counters
    });
  };

  totalCount = () => {
    let total = 0;
    for (let i = 0; i < this.state.counters.length; i++) {
      total = total + this.state.counters[i].value;
    }
    return total === 0 ? "Zero" : total;
  };

  render() {
    return (
      <React.Fragment>
        <main className="container" align="center">
          <NavBar onTotal={this.totalCount} />
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onRefresh={this.handleRefresh}
            onDelete={this.handleDelete}
            onIncrement={this.incrementButton}
            onDecrement={this.decrementButton}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
