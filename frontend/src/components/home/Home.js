import React, { Component } from "react";
import actions from "../../services/index";
import DemoCarousel from "../landing/Landing";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Home extends Component {
  render() {
    return (
      <div>
        <DemoCarousel />
      </div>
    );
  }
}

export default Home;
