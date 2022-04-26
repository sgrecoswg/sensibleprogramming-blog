import React, { Component } from 'react';
import { Card, Carousel, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
//import  AddOnList from "../../common/AddOnList";

export class NFT extends Component {
    static displayName = NFT.name;


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
         <h1>What is a NFT?</h1>
         <p>
         A non-fungible token is a non-interchangeable unit of data stored on a blockchain, 
         a form of digital ledger, that can be sold and traded.
          Types of NFT data units may be associated with digital files such as photos, videos, and audio.
        </p>
        <p>
         We create and deploy your NFTs onto either the Polygon network or the Etherium network.
         We can help you get your next collection off and running.
         Get started creating your own NFTs today by <Link  to="/contact">contacting us.</Link>
         </p>
        <p>Worried about it costing too much? All projects are different, look at our <Link  to="/pricing">affordable pricing.</Link></p>
      </div>
    );
  }
}
