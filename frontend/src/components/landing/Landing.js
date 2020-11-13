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

// import React, { Component } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

// class DemoCarousel extends Component {
//   render() {
//     return (
//       <Carousel>
//         <div>
//           <img
//             className="d-block w-100 carousel"
//             src="../../images/carousel5.jpg"
//           />
//           <p className="legend">Legend 1</p>
//         </div>
//         <div>
//           <img src="assets/2.jpeg" />
//           <p className="legend">Legend 2</p>
//         </div>
//         <div>
//           <img src="assets/3.jpeg" />
//           <p className="legend">Legend 3</p>
//         </div>
//       </Carousel>
//     );
//   }
// }
// export default DemoCarousel;
import { Carousel } from "react-responsive-carousel";
import React, { Component } from "react";
import image from "../../images/carousel1.jpg";
class DemoCarousel extends Component {
  render() {
    return (
      <div class="carousel-wrapper">
        <Carousel>
          <div>
            <img
              style={{ width: "fitContent", height: "100%" }}
              className="d-block w-100 carousel"
              src={require("../../images/carousel1.jpg")}
            />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img className="d-block w-100" src={image} alt="Third slide" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default DemoCarousel;
