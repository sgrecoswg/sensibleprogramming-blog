import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { About } from './components/about';
import { WebServices } from './components/services/WebServices';
import { Automation } from './components/services/Automation';
import { Services } from './components/Services';
import { CryptoverseServices } from './components/services/cryptoverse/CryptoverseServices';
import {NFT} from './components/services/cryptoverse/NFT';
import {SmartContracts} from './components/services/cryptoverse/SmartContracts';
import {DomainNames} from './components/services/cryptoverse/DomainNames';
import {ContactUs} from './components/ContactUs';
import {Pricing} from './components/Pricing';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        /*
         getSetting("dbversion").then((setting)=>{
            const defId = setting ? setting.value : null;
            getArtists(defId).then((setting)=>{
                
            });
         });
         */
    }

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/services/home' component={Services} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/about' component={About} />

            <Route path='/services/web' component={WebServices} />
            <Route path='/services/automation' component={Automation} />
            <Route path='/services/crypto/home' component={CryptoverseServices} />
            <Route path='/services/crypto/nft' component={NFT} />
            <Route path='/services/crypto/smartcontracts' component={SmartContracts} />
            <Route path='/services/crypto/domainnames' component={DomainNames} />
            <Route path='/contact' component={ContactUs}/>
            <Route path='/pricing' component={Pricing}/>
            
      </Layout>
    );
  }
}
/* 
 * <Route path='/services/crypto' component={Cryptoverse} />
 */
