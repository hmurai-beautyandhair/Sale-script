// import React from "react";
// import Carousel from "react-bootstrap/Carousel";

// const BootstrapCarousel = props => {
//   return (
//     <div>
//       <div className="box">
//         <div className="container-fluid">
//           <Carousel interval={900} keyboard={false} pauseOnHover={true}>
//             <Carousel.Item className="carousel box">
//               <img
//                 className="d-block w-100 carousel"
//                 src={require("../../images/carousel1.jpg")}
//               />
//             </Carousel.Item>
//             <Carousel.Item className="carousel">
//               <img
//                 className="d-block w-100 carousel"
//                 src={require("../../images/carousel2.jpg")}
//               />
//             </Carousel.Item>
//             <Carousel.Item className="carousel">
//               <img
//                 className="d-block w-100 carousel"
//                 src={require("../../images/carousel3.jpg")}
//               />
//             </Carousel.Item>

//             <Carousel.Item className="carousel">
//               <img
//                 className="d-block w-100 carousel"
//                 src={require("../../images/carousel4.jpg")}
//               />
//             </Carousel.Item>

//             <Carousel.Item className="carousel">
//               <img
//                 className="d-block w-100 carousel"
//                 src={require("../../images/carousel5.jpg")}
//               />
//             </Carousel.Item>
//             <Carousel.Item className="carousel">
//               <img
//                 className="d-block w-100 carousel"
//                 src={require("../../images/carousel6.jpg")}
//               />
//             </Carousel.Item>
//             <Carousel.Item className="carousel">
//               <img
//                 className="d-block w-100 carousel"
//                 src={require("../../images/carousel7.jpg")}
//               />
//             </Carousel.Item>
//           </Carousel>
//         </div>
//         <div class="text">
//           <div>
//             <p>Beauty and Hair</p>
//             <h1>Launcapp</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BootstrapCarousel;

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
          <h3>Work Faster and More Efficiently with</h3>
          <h1 id="lauchPad">LaunchPad</h1>
          <div className="title">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={require("../../images/card1.png")} alt="logo" />
                </div>
                <div class="flip-card-back">
                  <h1>2</h1>
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
                  <h1>3</h1>
                  <p>Navigate to the certain service </p>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={require("../../images/card3.png")} alt="logo" />
                </div>
                <div class="flip-card-back">
                  <h1>3</h1>
                  <p>You rock it!</p>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={require("../../images/card4.png")} alt="logo" />
                </div>
                <div class="flip-card-back">
                  <h1>3</h1>
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
