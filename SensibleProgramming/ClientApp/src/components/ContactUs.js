import React, { Component } from 'react';

export class ContactUs extends Component {
    static displayName = ContactUs.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Contact us</h1>

        <dl>
            <dt>Phone:</dt>
            <dd>813*527*8872</dd>
            <dt>Email</dt>
            <dd>sensibleprogammer@gmail.com</dd>
        </dl>

        
      </div>
    );
  }
}