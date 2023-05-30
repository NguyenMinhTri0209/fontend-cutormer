import React from "react";
import "./contentField.css";
import cna from "./cam-nhan-ava.svg";
import cnn from "./cam-nhan-nhay-kep.svg";

class contentField extends React.Component {
  render() {
    return (
      <div className="baivietnoibat-camnhan mt-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3 className="titleall mb-3">Bài viết Nổi bật</h3>
              <ul className="listbaivietnoibat p-0 m-0">
                <li>
                  <a href="#">Dấu hiệu khi mang thai dễ nhận biết nhất</a>
                </li>
                <li>
                  <a href="#">Chăm sóc bệnh nhân mắc Sav-Covid 19 tại nhà</a>
                </li>
                <li>
                  <a href="#">Đại tiện ra máu là triệu chứng của bệnh gì?</a>
                </li>
                <li>
                  <a href="#">Đau bụng dưới âm ỉ ở nữ cảnh báo điều gì?</a>
                </li>
                <li>
                  <a href="#">
                    Phân biệt dấu hiệu viêm họng và viêm họng mãn tính
                  </a>
                </li>
                <li>
                  <a href="#">Loét dạ dày và cách ngăn ngừa</a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h3 className="titleall mb-3">Cảm nhận bệnh nhân</h3>
              <div className="slidecamnhan slick-initialized slick-slider">
                <div className="slick-list draggable">
                  <div className="slick-list draggable">
                    <div
                      className="item-camnhan slick-slide slick-current slick-active"
                      data-slick-index="0"
                      aria-hidden="false"
                      style={{ width: 485 }}
                    >
                      <div className="grid-top">
                        <div className="row">
                          <div className="hkt col-2">
                            <img
                              alt="phong kham da khoa hong cuong"
                              height="60"
                              width="60"
                              src={cna}
                            />
                          </div>
                          <div className="col-7 ">
                            <h4>Nguyễn Đức Hải</h4>
                            <span>Công nhân - Vạn Phú, Vạn Ninh</span>
                          </div>
                          <div className="hkt col-3">
                            <img
                              alt="Bệnh viện Đa khoa Vạn Ninh"
                              width="60"
                              height="60"
                              src={cnn}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="noidungcamnhan mt-3">
                        &nbsp;&nbsp;&nbsp;&nbsp;Tôi là một người công nhân, vì
                        công việc mà ăn uống bất thường nên dẫn đến việc đau dạ
                        dày. Sau khi khám chữa bệnh tại đây tôi còn nhận được
                        một số lời khuyên rất hữu ích từ các bác sĩ để có một
                        liệu trình đúng đắn để chữa căn bệnh của mình. Tôi cảm
                        thấy rất an tâm khi đến với Bệnh viện Đa khoa Vạn Ninh.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contentField;
