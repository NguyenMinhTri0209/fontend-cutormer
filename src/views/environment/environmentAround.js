import React from "react";
import "./environmentAround.css";
import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
import i3 from "./i3.jpg";
import i4 from "./i4.jpg";

class environmentAround extends React.Component {
  render() {
    return (
      <div className="moitruong mb-4">
        <div className="container">
          <h3 className="titleall mb-3">Môi trường phòng khám</h3>
          <div className="grid-moitruong">
            <div className="mt2">
              <div className="hkt">
                <img
                  className="w-100"
                  alt="Bệnh viện Đa khoa Vạn Ninh"
                  width="270"
                  height="255"
                  src={i1}
                />
              </div>
            </div>
            <div className="mt2">
              <div className="hkt">
                <img
                  className="w-100"
                  alt="Bệnh viện Đa khoa Vạn Ninh"
                  width="270"
                  height="255"
                  src={i2}
                />
              </div>
            </div>
            <div className="mt2">
              <div className="hkt">
                <img
                  className="w-100"
                  alt="Bệnh viện Đa khoa Vạn Ninh"
                  width="270"
                  height="255"
                  src={i3}
                />
              </div>
            </div>
            <div className="mt2">
              <div className="hkt">
                <img
                  className="w-100"
                  alt="Bệnh viện Đa khoa Vạn Ninh"
                  width="270"
                  height="255"
                  src={i4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default environmentAround;
