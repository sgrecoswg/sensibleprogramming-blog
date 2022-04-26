import React, { Component } from 'react';

export class About extends Component {
    static displayName = About.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1>About us</h1>

        <p>Bringing real world solutions to real world problems for over a decade. We can </p>turn ideas into reality.

        
      </div>
    );
  }
}
