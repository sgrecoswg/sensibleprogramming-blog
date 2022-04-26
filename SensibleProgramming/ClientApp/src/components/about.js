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

        <p>Bringing real world solutions to real world problems for over a decade. </p>
        We can turn ideas into reality.

        <p>80% of the benefit is in 20% of the work.
          By breaking the solutions down into smaller parts, we can deliver small definable goals. Allowing you the flexibility
          to stop when you feel like it. When it is time to enhance what is there, we are here for you.
        </p>
      </div>
    );
  }
}
