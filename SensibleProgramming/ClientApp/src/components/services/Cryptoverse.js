import React, { Component } from 'react';

export class Cryptoverse extends Component {
    static displayName = Cryptoverse.name;

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
        <h1>Services in the cryptoverse</h1>

        <p>Contact us for more details on the crypto related services we offer.</p>

        
      </div>
    );
  }
}
