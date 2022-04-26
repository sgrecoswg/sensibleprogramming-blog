import React, { Component } from 'react';
import { Link } from "react-router-dom";

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

        <p>
          <ul>
            <li>Is it time for you to take control of your brand?</li>
            <li>Are you not satisfied with the "build your own sites" available?</li>
          </ul>
          Take the first step by talking with us about your vison. The first hour is free!
         
         </p>
         <p> What do you have to lose? <Link  to="/contact">Contact us now!</Link></p>
        <p>Worried about it costing too much? All projects are different, look at our <Link  to="/pricing"> affordable pricing </Link>
           or contact us directly.
        </p>


        
      </div>
    );
  }
}
