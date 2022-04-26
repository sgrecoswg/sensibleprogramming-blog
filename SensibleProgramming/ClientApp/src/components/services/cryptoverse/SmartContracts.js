import React, { Component } from 'react';
import { Card, Carousel, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
//import  AddOnList from "../../common/AddOnList";

export class SmartContracts extends Component {
    static displayName = SmartContracts.name;


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
            <h1>What are smart contracts?</h1>
            <p>Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. They typically are used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any intermediary’s involvement or time loss. They can also automate a workflow, triggering the next action when conditions are met.</p>
            <p>
         We create and deploy your smart contracts onto either the Polygon network or the Etherium network.
         We can help you get your next collection off and running.
         Get started creating your own NFTs today by <Link  to="/contact">contacting us.</Link>
         </p>
        <p>Worried about it costing too much? All projects are different, look at our <Link  to="/pricing">affordable pricing.</Link></p>

      </div>
    );
  }
}
