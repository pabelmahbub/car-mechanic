// import React from 'react';
// import {Carousel} from 'react-bootstrap';

// //for slick

// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

// function Banner() {
//   return (
//     <>
//     <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="https://img.freepik.com/free-vector/auto-repair-shop-service-workers-fixing-car-and-billing-customer-retro-cartoon-indoor-composition_1284-16849.jpg?w=996" height={500}
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>MAKE YOUR CAR LAST LONGER</h3>
//       <p>JUST A PHONE CALL NEEDED</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="https://img.freepik.com/free-photo/close-up-hands-of-unrecognizable-mechanic-doing-car-service-and-maintenance_146671-19689.jpg?t=st=1649255003~exp=1649255603~hmac=2f12f256ac7c92150c576d1149f10882e7cfb4dd8859877ccab83ef4c2466c2c&w=900" height={500}
//       alt="Second slide"
//     />

//     <Carousel.Caption>
//       <h3>MAKE YOUR JOURNEY SAFE AND RELAXING</h3>
//       <p>JUST A PHONE CALL NEEDED.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="https://img.freepik.com/free-vector/auto-repair-shop-service-workers-fixing-car-and-billing-customer-retro-cartoon-indoor-composition_1284-16849.jpg?w=996" height={500}
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
// </>
//   )
// }

// export default Banner;




// //for slick
import React from 'react';

import Slider from "react-slick";

function Banner() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    backgroundColor:'red'
  };

   return (
     <>

       <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div style={{}}>
          <img
       className="d-block w-100"
       src="https://img.freepik.com/free-vector/auto-repair-shop-service-workers-fixing-car-and-billing-customer-retro-cartoon-indoor-composition_1284-16849.jpg?w=996" height={400}
       alt="First slide"
       />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>

</>
  )
 }

 export default Banner;


