import React from "react";
import "./footer.css";
import i1 from "./footer1-hotline.svg";
import i2 from "./footer1-tu-van.svg";
import i3 from "./footer1-dat-hen.svg";
import i4 from "./footer1-tu-van.svg";
import i5 from "./footer-dia-chi.svg";
import i6 from "./footer-hotline.svg";
import i7 from "./footer-gio-kham.svg";
import map from "./bgmap.png";

class footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container pb-3">
          <div className="thongtinfooter">
            <div className="row">
              <div className="col-3">
                <a href="#">
                  <div className="d-flex">
                    <div className="hkt me-2">
                      <img
                        alt="Bệnh viện Đa khoa Vạn Ninh"
                        width="55"
                        height="55"
                        src={i1}
                      />
                    </div>
                    <div className="char-footer">
                      Hotline <br />
                      <strong>058.3840250</strong>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-3">
                <a href="#">
                  <div className="d-flex">
                    <div className="hkt me-2">
                      <img
                        alt="Bệnh viện Đa khoa Vạn Ninh"
                        width="55"
                        height="55"
                        src={i2}
                      />
                    </div>
                    <div className="char-footer">
                      Tư vấn <br />
                      <strong>Chat với bác sĩ</strong>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-3">
                <a href="#">
                  <div className="d-flex">
                    <div className="hkt me-2">
                      <img
                        alt="Bệnh viện Đa khoa Vạn Ninh"
                        width="55"
                        height="55"
                        src={i3}
                      />
                    </div>
                    <div className="char-footer">
                      Đăng ký <br />
                      <strong>Đặt lịch khám</strong>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-3">
                <a href="#">
                  <div className="d-flex">
                    <div className="hkt me-2">
                      <img
                        alt="Bệnh viện Đa khoa Vạn Ninh"
                        width="55"
                        height="55"
                        src={i4}
                      />
                    </div>
                    <div className="char-footer">
                      Hỗ trợ <br />
                      <strong>Chỉ dẫn đường</strong>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-7">
                  <h3 className="titleall active-color mb-4">
                    Thông tin liên hệ
                  </h3>
                  <div className="d-flex align-items-center mb-4">
                    <div className="hkt me-2">
                      <img
                        alt="Bệnh viện Đa khoa Vạn Ninh"
                        width="25"
                        height="25"
                        src={i5}
                      />
                    </div>
                    <div className="footer-contact">
                      Thôn Tân Đức Đông, Xã Vạn Phú
                      <br />
                      Huyện Vạn Ninh, Tỉnh Khánh Hòa
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="hkt me-2">
                      <img
                        alt="Bệnh viện Đa khoa Vạn Ninh"
                        width="25"
                        height="25"
                        src={i6}
                      />
                    </div>
                    <div className="footer-contact">
                      Hotline tư vấn:
                      <br />
                      058.3840250
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="hkt me-2">
                      <img
                        alt="Bệnh viện Đa khoa Vạn Ninh"
                        width="25"
                        height="25"
                        src={i7}
                      />
                    </div>
                    <div className="footer-contact">
                      Làm việc từ 7h đến 17h30
                      <br />
                      (Từ Thứ 2 đến Thứ 6)
                    </div>
                  </div>
                  <h3 className="titleall active-color mb-4">
                    Hệ thống website trực thuộc bệnh viện đa khoa Vạn Ninh
                  </h3>
                  <div className="ft-van">
                    <a href="http://www.trungtamytevanninh.com.vn/gioithieu/tabid/760/Default.aspx">
                      http://www.trungtamytevanninh.com.vn
                    </a>
                  </div>
                </div>
                <div className="col-5">
                  <h3 className="titleall active-color mb-4">
                    Chuyên khoa điều trị
                  </h3>
                  <ul className="footer-ck-list">
                    <li className="footer-ck-item">
                      <a href="ngoai-khoa-1/">Ngoại Khoa</a>
                    </li>
                    <li className="footer-ck-item">
                      <a href="nam-khoa-3/">Nam Khoa</a>
                    </li>
                    <li className="footer-ck-item">
                      <a href="phu-san-2/">Phụ Sản</a>
                    </li>
                    <li className="footer-ck-item">
                      <a href="phu-khoa-16/">Phụ Khoa</a>
                    </li>
                    <li className="footer-ck-item">
                      <a href="benh-xa-hoi-4/">Bệnh Xã Hội</a>
                    </li>
                    <li className="footer-ck-item">
                      <a href="tai-mui-hong-5/">Tai Mũi Họng</a>
                    </li>
                    <li className="footer-ck-item">
                      <a href="benh-hau-mon-94/">Bệnh Hậu Môn</a>
                    </li>
                    <li className="footer-ck-item">
                      <a href="khoa-da-lieu-140/">Khoa Da Liễu</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <h3 className="titleall active-color mb-4">Bản đồ đường đi</h3>
              <div className="map-footer">
                <a
                  href="https://www.google.com/maps/@12.6781355,109.2140101,16.43z"
                  title=""
                >
                  <picture>
                    <img
                      src={map}
                      alt="Bệnh viện Đa khoa Vạn Ninh"
                      width="485"
                      height="240"
                    />
                  </picture>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
