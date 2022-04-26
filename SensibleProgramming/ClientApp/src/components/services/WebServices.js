import React, { Component } from 'react';

export class WebServices extends Component {
    static displayName = WebServices.name;

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
        <h1>Web services</h1>

        <p>Contact us for web related services.</p>

        
      </div>
    );
  }
}
