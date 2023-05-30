import React from "react";
import "./strongPoint.css";
import i1 from "./uu-diem-1.svg";
import i2 from "./uu-diem-2.svg";
import i3 from "./uu-diem-3.svg";
import i4 from "./uu-diem-4.svg";

class strongPoint extends React.Component {
  render() {
    return (
      <div className="uudiem mb-4">
        <div className="container">
          <h3 className="titleall mb-3">Ưu điểm nổi bật của phòng khám</h3>
          <div className="row">
            <div className="col-md-3 col-sm-6 text-center">
              <div className="hkt">
                <img
                  alt="Bệnh viện Đa khoa Vạn Ninh"
                  width="90"
                  height="90"
                  src={i1}
                />
              </div>
              <div className="titleuudiem">Bác sĩ giàu kinh nghiệm</div>
              <p className="contentuudiem">
                Hội tụ đội ngũ y bác sĩ đã từng tu nghiệp tại nước ngoài với
                phong cách làm việc chuyên nghiệp, trình độ chuyên môn cao và
                luôn tận tâm với nghề.
              </p>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="hkt">
                <img
                  alt="Bệnh viện Đa khoa Vạn Ninh"
                  width="90"
                  height="90"
                  src={i2}
                />
              </div>
              <div className="titleuudiem">Trang thiết bị hiện đại</div>
              <p className="contentuudiem">
                Luôn chú trọng về phát triển cơ sở vật chất cũng như các trang
                máy móc, thiết bị hiện đại hỗ trợ trong việc khám chữa bệnh, xét
                nghiệm và chuẩn đoán.
              </p>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="hkt">
                <img
                  alt="Bệnh viện Đa khoa Vạn Ninh"
                  width="90"
                  height="90"
                  src={i3}
                />
              </div>
              <div className="titleuudiem">Môi trường thân thiện</div>
              <p className="contentuudiem">
                Phòng khám được thiết kế và bố trí dựa theo tiêu chuẩn quốc tế
                hệ thống các phòng xét nghiệm, phòng chuẩn đoán... đều được vô
                trùng kỹ lưỡng.
              </p>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="hkt">
                <img
                  alt="Bệnh viện Đa khoa Vạn Ninh"
                  width="90"
                  height="90"
                  src={i4}
                />
              </div>
              <div className="titleuudiem">Chi phí hợp lý</div>
              <p className="contentuudiem">
                Mọi chi phí liên quan đến việc khám chữa bệnh, các dịch vụ bảo
                hiểm, y tế đều được công khai rõ ràng nhằm phù hợp với từng đối
                tượng bệnh nhân.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default strongPoint;
