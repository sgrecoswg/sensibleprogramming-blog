import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Carousel, Button } from 'react-bootstrap';
import Hero from './common/Hero';
import FeaturesTiles from './sections/FeaturesTiles';
import FeaturesSplit from './sections/FeaturesSplit';
import Testimonial from './sections/Testimonial';
import Cta from './sections/Cta';
import Footer from './layout/Footer';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>           
            <Hero />
            <FeaturesTiles />
            {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
            {/* <Testimonial topDivider /> */}
            {/* <Cta split /> */}
            <Footer />
      </div>
    );
  }
}

/*
 <div style={{ height: '300px' }}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={process.env.PUBLIC_URL + "/images/23036.jpg"}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Enter the Crypto verse</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                            className="d-block w-100 h-50"
                        src={process.env.PUBLIC_URL + "/images/OcTozpj.jpg"}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Establish your web presense</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                            className="d-block w-100 h-50"
                        src={process.env.PUBLIC_URL + "/images/23073.jpg"}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Begin automation</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
     
 */
