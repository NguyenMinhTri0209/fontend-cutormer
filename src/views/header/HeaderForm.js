import React from "react";
import "./Header.css";
import logoHeader from "./header-logo.png";
import locationImage from "./header-location.svg";
import hotlineImage from "./header-hotline.svg";

class HeaderForm extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="top-header">
          <div className="container pt-2 pb-2">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="d-flex">
                  <div className="me-2">
                    <i className="fa-regular fa-clock"></i>
                  </div>
                  <div className="text-light">
                    Thời gian làm việc 7h - 17h50 (từ Thứ 2 đến Thứ 6)
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <div className="frm-search-header">
                  <form action="#" className="d-flex align-items-center">
                    <input
                      type="text"
                      className="form-control rounded-pill me-2 min-vw-5"
                      placeholder="Tìm kiếm"
                    ></input>
                    <button className="search-btn border border-2 border-light rounded-circle">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mid-header p-3">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <a href="#" className="logo">
                  <img
                    src={logoHeader}
                    className="logo-header"
                    alt="Bệnh viện đa khoa Vạn Ninh"
                  />
                </a>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <div
                  style={{ flex: 3 }}
                  className="addr-header-mid d-flex align-items-center justify-content-end"
                >
                  <div className="locationImage me-2">
                    <img alt="Bệnh viện đa khoa Vạn Ninh" src={locationImage} />
                  </div>
                  <p className="m-0">
                    Thôn Tân Đức Đông, X.Vạn Lương
                    <br /> <strong> H.Vạn Ninh, T.Khánh Hoà</strong>
                  </p>
                </div>

                <div
                  style={{ flex: 2 }}
                  className="time-header-mid d-flex align-items-center justify-content-end "
                >
                  <a
                    href="#"
                    // style={{ flex: 2 }}
                    className="d-flex align-items-center justify-content-end text-decoration-none text-reset"
                  >
                    <div className="hotlineImage me-2">
                      <img
                        alt="Bệnh viện đa khoa Vạn Ninh"
                        src={hotlineImage}
                      />
                    </div>
                    <p className="m-0">
                      Hotline tư vấn
                      <br /> <strong>058.3840250</strong>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="menu">
          <div className="container">
            <div className="row justify-content-center">
              <ul className="d-flex align-items-center justify-content-center">
                <li>
                  <a className="active-menu" href="#">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#">Giới thiệu</a>
                </li>
                <li className="mainmenu">
                  <a href="#">Danh mục bệnh &#8744;</a>
                  <ul className="submainmenu">
                    <li className="lisubmainmenu">
                      <a href="ngoai-khoa-1/">Ngoại Khoa</a>
                      <ul className="lisubmainmenu1">
                        <li className="lisubsubmainmenu">
                          <a href="tiet-nieu-6/">Tiết Niệu</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="tieu-hoa-7/">Tiêu Hóa</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="lisubmainmenu">
                      <a href="nam-khoa-3/">Nam Khoa</a>
                      <ul className="lisubmainmenu1">
                        <li className="lisubsubmainmenu">
                          <a href="benh-duong-tiet-nieu-46/">
                            Bệnh Đường Tiết Niệu
                          </a>
                          <ul className="lisubmainmenu2">
                            <li>
                              <a href="viem-nieu-dao-54/">Viêm Niệu Đạo</a>
                            </li>
                            <li>
                              <a href="viem-bang-quang-55/">Viêm Bàng Quang</a>
                            </li>
                            <li>
                              <a href="viem-duong-sinh-duc-131/">
                                Viêm Đường Sinh Dục
                              </a>
                            </li>
                            <li>
                              <a href="tieu-nhieu-132/">Tiểu nhiều</a>
                            </li>
                            <li>
                              <a href="tieu-buot-133/">Tiểu buốt</a>
                            </li>
                            <li>
                              <a href="tieu-rat-134/">Tiểu rắt</a>
                            </li>
                            <li>
                              <a href="tieu-ra-mau-135/">Tiểu ra máu</a>
                            </li>
                          </ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-tuyen-tien-liet-47/">
                            Bệnh Tuyến Tiền Liệt{" "}
                          </a>
                          <ul className="lisubmainmenu2">
                            <li>
                              <a href="viem-tuyen-tien-liet-59/">
                                Viêm Tuyến Tiền Liệt
                              </a>
                            </li>
                            <li>
                              <a href="phi-dai-tuyen-tien-liet-60/">
                                Phì Đại Tuyến Tiền Liệt
                              </a>
                            </li>
                            <li>
                              <a href="tang-sinh-tuyen-tien-liet-61/">
                                Tăng Sinh Tuyến Tiền Liệt
                              </a>
                            </li>
                            <li>
                              <a href="dau-tuyen-tien-liet-62/">
                                Đau Tuyến Tiền Liệt
                              </a>
                            </li>
                            <li>
                              <a href="u-nang-tuyen-tien-liet-63/">
                                U Nang Tuyến Tiền Liệt
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="lisubsubmainmenu">
                          <a href="vo-sinh-nam-49/">Vô Sinh Nam </a>
                          <ul className="lisubmainmenu2">
                            <li>
                              <a href="gian-tinh-mach-thung-tinh-68/">
                                Giãn Tĩnh Mạch Thừng Tinh
                              </a>
                            </li>
                            <li>
                              <a href="tinh-dich-bat-thuong-69/">
                                Tinh Dịch Bất Thường
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="suc-khoe-sinh-san-117/">Sức Khỏe Sinh Sản</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-duong-vat-138/">Bệnh Dương Vật</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="lisubmainmenu">
                      <a href="phu-san-2/">Phụ Sản</a>
                      <ul className="lisubmainmenu1">
                        <li className="lisubsubmainmenu">
                          <a href="ke-hoach-hoa-gia-dinh-17/">
                            Kế Hoạch Hóa Gia Đình
                          </a>
                          <ul className="lisubmainmenu2">
                            <li>
                              <a href="cay-thao-thuoc-trang-thai-37/">
                                Cấy-tháo thuốc tránh thai
                              </a>
                            </li>
                            <li>
                              <a href="dat-va-thao-dung-cu-tu-cung-38/">
                                Đặt và Tháo Dụng Cụ Tử Cung
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="suc-khoa-sinh-san-18/">Sức Khỏe Sinh Sản</a>
                          <ul className="lisubmainmenu2">
                            <li>
                              <a href="kiem-tra-thai-40/">Kiểm Tra Thai</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="lisubmainmenu">
                      <a href="phu-khoa-16/">Phụ Khoa</a>
                      <ul className="lisubmainmenu1">
                        <li className="lisubsubmainmenu">
                          <a href="viem-phu-khoa-20/">Viêm Phụ Khoa</a>
                          <ul className="lisubmainmenu2">
                            <li>
                              <a href="viem-nieu-dao-26/">Viêm Niệu Đạo</a>
                            </li>
                          </ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-co-tu-cung-21/">Bệnh Cổ Tử Cung</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="lisubmainmenu">
                      <a href="benh-xa-hoi-4/">Bệnh Xã Hội</a>
                      <ul className="lisubmainmenu1">
                        <li className="lisubsubmainmenu">
                          <a href="sui-mao-ga-74/">Sùi Mào Gà</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-lau-71/">Bệnh Lậu</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="giang-mai-70/">Giang Mai</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="mun-rop-sinh-duc-73/">Mụn Rộp Sinh Dục</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="lisubmainmenu">
                      <a href="tai-mui-hong-5/">Tai Mũi Họng</a>
                      <ul className="lisubmainmenu1">
                        <li className="lisubsubmainmenu">
                          <a href="benh-ve-tai-75/">Bệnh Về Tai</a>
                          <ul className="lisubmainmenu2">
                            <li>
                              <a href="viem-tai-78/">Viêm Tai</a>
                            </li>
                            <li>
                              <a href="viem-tai-giua-79/">Viêm Tai Giữa</a>
                            </li>
                            <li>
                              <a href="viem-tai-ngoai-80/">Viêm Tai Ngoài</a>
                            </li>
                            <li>
                              <a href="ngua-tai-81/">Ngứa Tai</a>
                            </li>
                            <li>
                              <a href="chay-mu-tai-82/">Chảy Mủ Tai</a>
                            </li>
                            <li>
                              <a href="u-tai-83/">Ù Tai</a>
                            </li>
                          </ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-ve-mui-76/">Bệnh Về Mũi</a>
                          <ul className="lisubmainmenu2">
                            <li>
                              <a href="viem-mui-84/">Viêm Mũi</a>
                            </li>
                            <li>
                              <a href="viem-xoang-85/">Viêm Xoang</a>
                            </li>
                            <li>
                              <a href="viem-mui-di-ung-86/">Viêm Mũi Dị Ứng</a>
                            </li>
                            <li>
                              <a href="polyp-mui-87/">Polyp Mũi</a>
                            </li>
                            <li>
                              <a href="phi-dai-cuon-mui-88/">
                                Phì Đại Cuốn Mũi
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-ve-hong-77/">Bệnh Về Họng</a>
                          <ul className="lisubmainmenu2">
                            <li>
                              <a href="viem-amidan-89/">Viêm Amidan</a>
                            </li>
                            <li>
                              <a href="viem-hong-90/">Viêm Họng</a>
                            </li>
                            <li>
                              <a href="viem-hong-hat-91/">Viêm Họng Hạt</a>
                            </li>
                            <li>
                              <a href="viem-thanh-quan-92/">Viêm thanh quản</a>
                            </li>
                            <li>
                              <a href="viem-hau-hong-93/">Viêm Hầu Họng</a>
                            </li>
                          </ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-ve-luoi-139/">Bệnh Về Lưỡi</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="lisubmainmenu">
                      <a href="benh-hau-mon-94/">Bệnh Hậu Môn</a>
                      <ul className="lisubmainmenu1">
                        <li className="lisubsubmainmenu">
                          <a href="tri-ngoai-96/">Trĩ Ngoại</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="tri-hon-hop-97/">Trĩ hỗn hợp</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="apxe-hau-mon-98/">Apxe Hậu Môn</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-tri-136/">Bệnh Trĩ</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="ro-hau-mon-99/">Rò Hậu Môn</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="nut-ke-hau-mon-100/">Nứt kẽ hậu môn</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="polyp-hau-mon-137/">Polyp Hậu Môn</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="lisubmainmenu">
                      <a href="khoa-da-lieu-140/">Khoa Da Liễu</a>
                      <ul className="lisubmainmenu1">
                        <li className="lisubsubmainmenu">
                          <a href="benh-viem-da-141/">Viêm Da</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-vay-ca-142/">Vảy Cá</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-mun-coc-143/">Mụn Cóc</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-di-ung-da-144/">Dị Ứng Da</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-cham-145/">Bệnh Chàm</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-ngua-146/">Bệnh Ngứa</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-da-dau-147/">Bệnh Da Đầu</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-me-day-148/">Mề Đay</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-lang-ben-149/">Lang Ben</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-hac-lao-150/">Hắc Lào</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-day-sung-nang-long-151/">
                            Dày Sừng Nang Lông
                          </a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-rung-toc-152/">Rụng Tóc</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-nam-153/">Bệnh Nấm</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-hat-com-154/">Hạt Cơm</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-vay-nen-155/">Vảy Nến</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-ghe-156/">Bệnh Ghẻ</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-hoi-nach-157/">Hôi Nách</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-hoi-chan-158/">Hôi Chân</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-bach-bien-159/">Bạch Biến</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-to-dia-160/">Tổ Đỉa</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="benh-zona-161/">Bệnh Zona</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="cac-loai-mun-162/">Các Loại Mụn</a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                        <li className="lisubsubmainmenu">
                          <a href="trieu-chung-benh-da-lieu-163/">
                            Triệu Chứng Bệnh Da Liễu
                          </a>
                          <ul className="lisubmainmenu2"></ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Quy trình khám</a>
                </li>
                <li>
                  <a href="#">Liên hệ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderForm;
