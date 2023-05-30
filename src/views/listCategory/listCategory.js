import React from "react";
import nk from "./gioi-thieu-nk.svg";
import pk from "./gioi-thieu-pk.svg";
import bxh from "./gioi-thieu-bxh.svg";
import tmh from "./gioi-thieu-tmh.svg";
import bt from "./gioi-thieu-bt.svg";
import gt from "./gioi-thieu-img.jpg";
import "./listCategory.css";

class listCategory extends React.Component {
  render() {
    return (
      <div className="list-category mb-4">
        <div className="container">
          <div className="row align-items-center">
            <a href="nam-khoa-3/">
              <div className="item-category">
                <div className="hkt">
                  <img
                    alt="Bệnh viện đa khoa Vạn Ninh"
                    width="65"
                    height="65"
                    src={nk}
                  />
                </div>
                <p className="mt-3">Nam khoa</p>
              </div>
            </a>
            <a href="phu-khoa-16/">
              <div className="item-category">
                <div className="hkt">
                  <img
                    alt="Bệnh viện đa khoa Vạn Ninh"
                    width="65"
                    height="65"
                    src={pk}
                  />
                </div>
                <p className="mt-3">Phụ Khoa</p>
              </div>
            </a>
            <a href="benh-xa-hoi-4/">
              <div className="item-category">
                <div className="hkt">
                  <img
                    alt="Bệnh viện đa khoa Vạn Ninh"
                    width="65"
                    height="65"
                    src={bxh}
                  />
                </div>
                <p className="mt-3">Bệnh Xã Hội</p>
              </div>
            </a>
            <a href="benh-hau-mon-94/">
              <div className="item-category">
                <div className="hkt">
                  <img
                    alt="Bệnh viện đa khoa Vạn Ninh"
                    width="65"
                    height="65"
                    src={bt}
                  />
                </div>
                <p className="mt-3">Bệnh Trĩ</p>
              </div>
            </a>
            <a href="tai-mui-hong-5/">
              <div className="item-category">
                <div className="hkt">
                  <img
                    alt="Bệnh viện đa khoa Vạn Ninh"
                    width="65"
                    height="65"
                    src={tmh}
                  />
                </div>
                <p className="mt-3">Tai Mũi Họng</p>
              </div>
            </a>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="hkt">
                <img
                  className="img-fluid"
                  width="485"
                  height="320"
                  alt="Bệnh viện đa khoa Vạn Ninh"
                  src={gt}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h3 className="titleall mb-4">
                Giới thiệu Bệnh viện Đa khoa Vạn Ninh
              </h3>
              <p className="textCategory mb-3">
                Bệnh viện Đa khoa Vạn Ninh là một trong những cơ sở y tế lớn
                nhất tại địa bàn huyện Vạn Ninhvới hệ thống trang thiết bị hiện
                đại và đội ngũ y bác sĩ, điều dưỡng chuyên môn cao.
              </p>
              <p className="textCategory">
                Bệnh viện cung cấp các dịch vụ khám chữa bệnh, phẫu thuật, điều
                trị nội trú, ngoại trú, và chăm sóc sức khỏe định kỳ cho cộng
                đồng. Bệnh viện Đa khoa Vạn Ninh cam kết đem lại chất lượng dịch
                vụ y tế tốt nhất cho người bệnh và người dân trong khu vực.
              </p>
              <a href="#" className="btn btn-tuvan mt-2">
                <i>Tư vấn thêm</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default listCategory;
