import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '.././CustomCarousel.css'

import Compass from './Compass'


function CustomCarousel(props) {
  return (
    <React.Fragment>
      <Carousel >
        <Carousel.Item>
          <div className="main">
            <div>Wind</div>
            <Compass></Compass>
          </div>

          <Carousel.Caption>
            <div className="carousel-item">
              <div>Vitesse Vent</div>
              <div>Direction Vent</div>
            </div>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <div className="main">
            <div>UV</div>
          </div>
          <Carousel.Caption>
            <div className="carousel-item">
              <div>UV</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <div className="main">
            <div>Pollution</div>
          </div>
          <Carousel.Caption>
            <div className="carousel-item">
              <div>Visibilité</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </React.Fragment >
  )
}


export default CustomCarousel;