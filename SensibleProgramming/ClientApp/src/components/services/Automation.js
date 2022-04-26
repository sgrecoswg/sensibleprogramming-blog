import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Automation extends Component {
    static displayName = Automation.name;

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
        <h1>What are automation services</h1>

        <p>Service automation is the condensation of many human-centric services into a streamlined, software-based online platform. It is services that maintain the integrity of what service is while automating background tasks to provide a seamless user experience..</p>

        <p>
         We can get you back to doing what you love, not the repetitve tasks that have taken over your days.
         There are many solutions, Lets see what is right for you. <Link  to="/contact">Contact us now.</Link>
         </p>
        <p>On a budget? All projects are different, look at our <Link  to="/pricing"> affordable pricing </Link>
        or call for a quote today.
        </p>

      </div>
    );
  }
}
