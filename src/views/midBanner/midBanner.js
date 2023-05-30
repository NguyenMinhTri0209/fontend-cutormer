import React from "react";
import img from "./banner-giua.jpg";

class midBanner extends React.Component {
  render() {
    return (
      <div className="mid-banner mb-4">
        <a href="#">
          <div className="image-banner">
            <img
              className="w-100"
              //   width="1920"
              //   height="220"
              alt="Bệnh viện Đa khoa Vạn Ninh"
              src={img}
            />
          </div>
        </a>
      </div>
    );
  }
}

export default midBanner;
