import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import wedding1 from '../resources/images/image0.jpeg';
import wedding2 from '../resources/images/image1.jpeg';
import wedding3 from '../resources/images/image2.jpeg';
import wedding4 from '../resources/images/image3.jpeg';
import wedding5 from '../resources/images/image4.jpeg';
import wedding6 from '../resources/images/image5.jpeg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel slide={false} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          style={{'width': '50%'}}
          className="d-block w-100"
          src={wedding1}
          alt="Bröllopsbild 1"
        />
        <Carousel.Caption>
          <p>Foto av Paulina Gabre</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{'width': '50%'}}
          className="d-block w-100"
          src={wedding2}
          alt="Bröllopsbild 2"
        />

        <Carousel.Caption>
          <p>Foto av Paulina Gabre</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{'width': '50%'}}
          className="d-block w-100"
          src={wedding3}
          alt="Bröllopsbild 3"
        />

        <Carousel.Caption>
          <p>Foto av Paulina Gabre</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{'width': '50%'}}
          className="d-block w-100"
          src={wedding4}
          alt="Bröllopsbild 4"
        />

        <Carousel.Caption>
          <p>Foto av Paulina Gabre</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{'width': '50%'}}
          className="d-block w-100"
          src={wedding5}
          alt="Bröllopsbild 5"
        />

        <Carousel.Caption>
          <p>Foto av Paulina Gabre</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{'width': '50%'}}
          className="d-block w-100"
          src={wedding6}
          alt="Bröllopsbild 6"
        />

        <Carousel.Caption>
          <p>Foto av Paulina Gabre</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel