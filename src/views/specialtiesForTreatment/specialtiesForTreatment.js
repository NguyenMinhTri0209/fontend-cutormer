import React from "react";
import "./specialtiesForTreatment.css";
import tb from "./tieu-buot.jpg";
import i0 from "./pasted image 0.jpg";
import i1 from "./viem-duong-tiet-nieu-co-tu-khoi-khong.jpg";
import i3 from "./dieu-tri.jpg";
import i4 from "./nguy-hiem.jpg";

class secialtiesForTreatment extends React.Component {
  state = {
    item1: true,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
    item8: false,
  };

  handleOnClick = (item1) => {
    this.setState({
      item1: true,
    });
  };

  render() {
    let { item1, item2 } = this.state;
    return (
      <div className="ckdt mb-4">
        <div className="container">
          <h3 className="titleall mb-4">Chuyên khoa điều trị</h3>
          <div className="row">
            <div className="col-3">
              <div
                className={item1 === true ? "ckdt-item active" : "ckdt-item"}
                onClick={() => this.handleOnClick(item1)}
              >
                Ngoại Khoa
              </div>
            </div>
            <div className="col-3">
              <div
                className={item2 === true ? "ckdt-item active" : "ckdt-item"}
              >
                Nam Khoa
              </div>
            </div>
            <div className="col-3">
              <div className="ckdt-item">Phụ Sản</div>
            </div>
            <div className="col-3">
              <div className="ckdt-item">Phụ Khoa</div>
            </div>
            <div className="col-3">
              <div className="ckdt-item">Bệnh Xã Hội</div>
            </div>
            <div className="col-3">
              <div className="ckdt-item">Tai Mũi Họng</div>
            </div>
            <div className="col-3">
              <div className="ckdt-item">Bệnh Hậu Môn</div>
            </div>
            <div className="col-3">
              <div className="ckdt-item">Khoa Da Liễu</div>
            </div>
          </div>
          <div className="ckdt-ajax">
            <div className="row">
              <div className="col-3">
                <ul className="list-group">
                  <li
                    data-id="6"
                    className="sub-ckdt-tab list-group-item  active"
                  >
                    Tiết Niệu
                  </li>
                  <li data-id="7" className="sub-ckdt-tab list-group-item ">
                    Tiêu Hóa
                  </li>
                </ul>
              </div>
              <div className="ckdt-ajax-sub col-9">
                <div className="ckdt-top mb-3">
                  <div className="ckdt-top-l">
                    <a href="#" title="">
                      <img src={tb} alt="Bệnh viện đa khoa Vạn Ninh" />
                    </a>
                  </div>
                  <div className="ckdt-top-main">
                    <h3>
                      <a href="#" title="">
                        Tiểu buốt là gì và nguyên nhân tiểu buốt
                      </a>
                    </h3>
                    <p>
                      Tiểu buốt (tiểu khó) là triệu chứng thường xuất hiện ít
                      nhất một lần trong đời mỗi người, đặc biệt là ở phụ nữ
                      trong độ tuổi từ 20 đến 50. Đây ...
                    </p>
                    <a href="#" className="btn btn-primary">
                      Chi tiết
                    </a>
                  </div>
                </div>
                <div className="ckdt-bottom">
                  <div className="ckdt-bottom-item">
                    <div className="ckdt-bottom-l">
                      <a href="#" title="">
                        <img
                          src={i0}
                          alt="Bệnh viện Đa khoa Vạn Ninh"
                          width="100"
                          height="80"
                        />
                      </a>
                    </div>
                    <div className="ckdt-bottom-r">
                      <h4>
                        <a href="#" title="">
                          Mỡ máu cao, nguyên nhân, triệu chứng chẩn đoán phòng
                          bệnh
                        </a>
                      </h4>
                      <span className="fst-italic text-muted">
                        Ngày đăng 18/04/2023
                      </span>
                    </div>
                  </div>

                  <div className="ckdt-bottom-item">
                    <div className="ckdt-bottom-l">
                      <a href="#" title="">
                        <img
                          src={i1}
                          alt="Bệnh viện Đa khoa Vạn Ninh"
                          width="100"
                          height="80"
                        />
                      </a>
                    </div>
                    <div className="ckdt-bottom-r">
                      <h4>
                        <a href="#" title="">
                          Viêm đường tiết niệu có tự khỏi không?
                        </a>
                        <br />
                        <br />
                      </h4>
                      <span className="fst-italic text-muted">
                        Ngày đăng 18/04/2023
                      </span>
                    </div>
                  </div>

                  <div className="ckdt-bottom-item">
                    <div className="ckdt-bottom-l">
                      <a href="#" title="">
                        <img
                          src={i3}
                          alt="Bệnh viện Đa Khoa Vạn Ninh"
                          width="100"
                          height="80"
                        />
                      </a>
                    </div>
                    <div className="ckdt-bottom-r">
                      <h4>
                        <a href="#" title="">
                          Các cách phòng tránh bệnh viêm tiết niệu
                        </a>
                      </h4>
                      <span className="fst-italic text-muted">
                        Ngày đăng 18/04/2023{" "}
                      </span>
                    </div>
                  </div>

                  <div className="ckdt-bottom-item">
                    <div className="ckdt-bottom-l">
                      <a href="#" title="">
                        <img
                          src={i4}
                          alt="Bệnh viện Đa khoa Vạn Ninh"
                          width="100"
                          height="80"
                        />
                      </a>
                    </div>
                    <div className="ckdt-bottom-r">
                      <h4>
                        <a href="#" title="">
                          Mức độ nguy hiểm của căn bệnh viêm tiết niệu
                        </a>
                      </h4>
                      <span className="fst-italic text-muted">
                        Ngày đăng 18/04/2023
                      </span>
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

export default secialtiesForTreatment;
