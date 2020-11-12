import React, { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";

function Landing() {

  return (
    <div>
    <div className="box">
      <div className="container-fluid">
        <Carousel interval={900} keyboard={false} pauseOnHover={true}>
          <Carousel.Item className="carousel box">
            <img
              className="d-block w-100 carousel"
              src={require("")}
            />
          </Carousel.Item>
          <Carousel.Item className="carousel">
            <img
              className="d-block w-100 carousel"
              src={require("")}
            />
          </Carousel.Item>
          <Carousel.Item className="carousel">
            <img
              className="d-block w-100 carousel"
              src={require("")}
            />
          </Carousel.Item>

          <Carousel.Item className="carousel">
            <img
              className="d-block w-100 carousel"
              src={require("")}
            />
          </Carousel.Item>

          <Carousel.Item className="carousel">
            <img
              className="d-block w-100 carousel"
              src={require("")}
            />
          </Carousel.Item>
          <Carousel.Item className="carousel">
            <img
              className="d-block w-100 carousel"
              src={require("")}
            />
          </Carousel.Item>
          <Carousel.Item className="carousel">
            <img
              className="d-block w-100 carousel"
              src={require("")}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div class="text">
        <div>
          <p>
            Beauty and Hair 
          </p>
          <h1>
            Launcapp
          </h1>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Landing;