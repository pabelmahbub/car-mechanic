import React from 'react';
import {Carousel} from 'react-bootstrap'

function Banner() {
  return (
    <>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-vector/auto-repair-shop-service-workers-fixing-car-and-billing-customer-retro-cartoon-indoor-composition_1284-16849.jpg?w=996" height={500}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/close-up-hands-of-unrecognizable-mechanic-doing-car-service-and-maintenance_146671-19689.jpg?t=st=1649255003~exp=1649255603~hmac=2f12f256ac7c92150c576d1149f10882e7cfb4dd8859877ccab83ef4c2466c2c&w=900" height={500}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-vector/auto-repair-shop-service-workers-fixing-car-and-billing-customer-retro-cartoon-indoor-composition_1284-16849.jpg?w=996" height={500}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>
  )
}

export default Banner