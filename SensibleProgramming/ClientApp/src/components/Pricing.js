import React, { Component } from 'react';

export class Pricing extends Component {
    static displayName = Pricing.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Pricing</h1>
        <p>Our services are customizable to fit you demands. 
          After the inital consultation we plan out a minumum viable product for you.
          Once achieved, we can continue to enhance your product, at anytime.
        </p>
        <dl>
            <dt>Inital consultation:</dt>
            <dd>
              <div style={{'color':'green'}}>Free (under 1 hour)</div>
              <div>$20/hr afterwords.</div>
            </dd>
            <dt>Project planning:</dt>
            <dd>$20/hr (usd)</dd>
            <dt>Non Block chain project implementation:</dt>
            <dd>
              <div>Each milestone met in the project will be paid in full at time of delivery.</div>
              <div>$60/hr* usd per developer on the project</div>
              <div></div>
            </dd>
        </dl>
        <i></i>
        <dl>
        <dt>Block chain project implementation:</dt>
            <dd>
              <div>Each milestone met in the project will be paid in full at time of delivery.</div>
              <div>$80/hr* usd per developer on the project</div>
              <div></div>
            </dd>
            <dt>Block chain domain name:</dt>
            <dd>
              <div>We find a domain name for you.</div>
              <div>$10/hr usd plus the cost of the domain name.</div>
              <div></div>
            </dd>
        </dl>

        <p>Want to to pay with crypto? We accept etherium, bitcoin, and many more. All prices are similar prices after conversion to USD.</p>
        <p>* Prices given for an average project, your project may be less or more expensive depending on it's complexity</p>
      </div>
    );
  }
}