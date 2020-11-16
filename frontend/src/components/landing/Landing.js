// import React from "react";
// import Carousel from "react-bootstrap/Carousel";



import { Carousel } from "react-responsive-carousel";
import React, { Component } from "react";

class DemoCarousel extends Component {
  render() {
    return (
      <div id="car">
        <div class="carousel-wrapper">
          <Carousel interval={900} keyboard={false} pauseOnHover={true}>
            <div>
              <img
                style={{ width: "fitContent", height: "90%" }}
                className="d-block w-100 carousel"
                src={require("../../images/carousel1.jpg")}
              />
            </div>
            <div>
              <img
                style={{ width: "fitContent", height: "90%" }}
                className="d-block w-100 carousel"
                src={require("../../images/carousel2.jpg")}
              />
            </div>
            <div>
              <img
                style={{ width: "fitContent", height: "90%" }}
                className="d-block w-100 carousel"
                src={require("../../images/carousel5.jpg")}
              />
            </div>
          </Carousel>
        </div>
        <div className="title2">
          <h3>work faster and more efficiently with</h3>
          <h1>LaunchPad</h1>
          <div className="title">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={require("../../images/card1.png")} alt="logo" />
                </div>
                <div class="flip-card-back">
                  <h3 >1</h3>
                  <p>Choose your department</p>
                </div>
              </div>
            </div>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={require("../../images/card2.png")} alt="logo" />
                </div>
                <div class="flip-card-back">
                  <h3 >2</h3>
                  <p >Navigate to the certain service </p>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={require("../../images/card3.png")} alt="logo" />
                </div>
                <div class="flip-card-back">
                  <h3>3</h3>
                  <p >Save time</p>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={require("../../images/card4.png")} alt="logo" />
                </div>
                <div class="flip-card-back">
                  <h3>4</h3>
                  <p>You rock it!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DemoCarousel;
