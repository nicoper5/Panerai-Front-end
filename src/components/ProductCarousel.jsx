import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ProductCarousel({ image, imageBack }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
      <Carousel.Item>
        <div className="picture-div">
          <img
            className="carousel-img "
            src={process.env.REACT_APP_STORAGE_URL + image}
            alt="Product front"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="picture-div">
          <img
            className="carousel-img"
            src={process.env.REACT_APP_STORAGE_URL + imageBack}
            alt="Product back"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
