import React, { Component } from 'react';
import { Card, Carousel, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
//import  AddOnList from "../../common/AddOnList";

export class DomainNames extends Component {
    static displayName = DomainNames.name;


  constructor(props) {
    super(props);
    //this.state = { currentaddons: [] };
    }

    //setAddOns(x) {
    //    console.log(x);
    //    this.setState({
    //        currentaddons: x
    //    });
    //}
    /*
     *  <AddOnList
                label="addme"
                update={e => this.setAddOns(e)}
                value={this.state.currentaddons}
                readonly={false}
            ></AddOnList>*/


  render() {
    return (
      <div>
         <h1>Do you have your own domain name for your crypto wallet?</h1>
         <p>
         No longer fear your payments getting lost in the ether. 
         Instead of copy and pasting your wallet address 
         (which is similar to a bank account number and can look like: 0xc6b0562605d35ee710138402b878ffe6f2e23807), 
         use an custom domain name as your one-stop-shop username to store all of your wallet addresses 
         for sending and receiving crypto. 
        </p>
        <p>
         We can help you find an available domain name that fits your business.
         Get started finding your domain name today by <Link  to="/contact">contacting us.</Link>
         </p>
        <p>Our <Link  to="/pricing">affordable pricing </Link> makes it easy.</p>
      </div>
    );
  }
}
