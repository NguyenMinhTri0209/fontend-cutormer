import React from "react";
import banner1 from "./bannermoi.jpg";
import banner2 from "./banner.jpg";
import Carousel from "react-bootstrap/Carousel";
import "./draggable.css";

class draggable extends React.Component {
  render() {
    return (
      <div className="mb-4">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner2} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default draggable;
