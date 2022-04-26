import React, { Component } from 'react';
import { Card, Carousel, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
//import  AddOnList from "../../common/AddOnList";

export class CryptoverseServices extends Component {
    static displayName = CryptoverseServices.name;


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
            <h1>Available Services</h1>
          

            <ul className="list-inline">
                <li>
                    <Card  text='dark'  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/bg-crypto.jpg"} />
                        <Card.Body>
                            <Card.Title  className="mb-2 text-dark">NFT</Card.Title>
                            <Card.Text>
                                Create the next great NFT.
                            </Card.Text>
                            <Link to="/services/crypto/nft">
                                <Button variant="dark">Start creating</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </li>
                <li>
                    <Card text='dark' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/bg-web.jpg"} />
                        <Card.Body>
                            <Card.Title className="mb-2 text-dark">Smart contracts</Card.Title>
                            <Card.Text> 
                                Start taking advantage of decentralized, trustless contracts.
                            </Card.Text>
                            <Link to="/services/crypto/smartcontracts">
                                <Button variant="dark">What is a smart contract?</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </li>     
                <li>
                    <Card  text='dark'  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"data:image/jpeg;base64,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"} />
                        <Card.Body>
                            <Card.Title  className="mb-2 text-dark">Domain Names</Card.Title>
                            <Card.Text> 
                                Get an easy to read address associated with your cryto wallet
                            </Card.Text>
                            <Link to="/services/crypto/domainnames">
                                <Button variant="dark">Do you need one?</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </li>                          
            </ul>
      </div>
    );
  }
}
