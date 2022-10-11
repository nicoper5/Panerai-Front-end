import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import luminor from "../Images/Carousel/Luminor_Carousel/Pam1085_Cat_Sdr_2033392.jpg";
import radomir from "../Images/Carousel/Radiomir_Carousel/Panerai-Eileen-PAM1243-Watch-Dive-2.jpg";
import Sumersible from "../Images/Carousel/Sumersible_Carousel/Luminor-Submersible-eLAB-ID-PAM1225-2.jpg";

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
      <Carousel.Item>
        <img className="d-block w-100" src={luminor} alt="Luminor Collection" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={radomir} alt="Radomir Collection" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Sumersible} alt="Sumersible Collection" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
