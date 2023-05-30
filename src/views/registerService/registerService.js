import React from "react";
import "./registerService.css";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import vi from "date-fns/locale/vi";
import axios from "axios";
import Select from "react-select";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class registerService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tofService: [],
    };

    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios
      .get("http://localhost:8080/tofservice/getall")
      .then((response) => this.setState({ tofService: response.data }))
      .catch((error) => console.error(error));
  }

  state = {
    selecteDate: null,
  };

  setSelecteDate = (date) => {
    this.setState((prevState) => ({
      selecteDate: date,
      selectedDate: date,
    }));
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      fullName: this.state.fullName,
      phoneNumber: this.state.phoneNumber,
      selectedDate: this.state.selectedDate,
      selectedService: this.state.selectedService,
      note: this.state.note,
      patientCode: null,
      malk: null,
    };

    axios
      .get("http://localhost:8080/patient/getma")
      .then((response) => {
        const patientCode = response.data;
        console.log(response.data);
        formData.patientCode = patientCode;
        console.log(formData.patientCode);

        axios
          .post("http://localhost:8080/patient/save", {
            mabn: formData.patientCode,
            ten: "Nguyễn Minh Huy",
            ngaysinh: "",
            email: "",
            gioitinh: null,
            sodienthoai: "",
            cccd: "",
            mabh: "null",
            nghenghiep: "",
          })
          .then((response) => {
            console.log(response.data);

            axios
              .get("http://localhost:8080/registerservice/getma")
              .then((response) => {
                const malk = response.data;
                console.log(response.data);
                formData.malk = malk;
                console.log(formData.malk);

                const formattedDate = this.formatDate(this.state.selectedDate); // Chuyển đổi ngày thành chuỗi ngày tháng

                axios
                  .post("http://localhost:8080/registerservice/save", {
                    malichkham: formData.malk,
                    ngaykham: formattedDate,
                    mabn: formData.patientCode,
                    mabs: "null",
                    madvkham: this.state.selectedService.value,
                    tinhtrang: false,
                    ghichu: this.state.note,
                  })
                  .then((response) => {
                    console.log(response.data);
                    toast.success(
                      "Nhân viên y tế sẽ liên lạc với bạn sau ít phút!"
                    );
                  })
                  .catch((error) => {
                    console.error(error);
                    toast.error("Yêu cầu khám bệnh thất bại!");
                    console.log(
                      this.state.fullName,
                      this.state.phoneNumber,
                      formattedDate,
                      this.state.selectedService.value,
                      this.state.note,
                      formData.malk,
                      formData.patientCode
                    );
                  });
              })
              .catch((error) => {
                console.error(error);
                // Xử lý khi yêu cầu lấy mã lượt khám thất bại
              });
          })
          .catch((error) => {
            console.error(error);
            toast.error("Gửi mã bệnh nhân thất bại!");
          });
      })
      .catch((error) => {
        console.error(error);
        // Xử lý khi yêu cầu lấy mã bệnh nhân thất bại
      });
  };

  formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "phoneNumber") {
      // Kiểm tra giá trị nhập vào có chứa ký tự không phải số
      if (isNaN(value)) {
        return; // Nếu có, không cập nhật state và thoát khỏi hàm handleChange
      }
    }

    this.setState({ [name]: value });
  };

  render() {
    let { selecteDate } = this.state;
    const { tofService } = this.state;

    const transformedData = tofService.map((tofService) => ({
      value: tofService.madv,
      label: tofService.tendv,
    }));

    const { fullName, phoneNumber, selectedDate, selectedService, note } =
      this.state;

    return (
      <div className="dangkygiua mb-4 mt-2 p-5">
        <ToastContainer />
        <div className="container">
          <div className="text-center mb-3" style={{ color: "white" }}>
            Vui lòng điền đầy đủ thông tin được đánh dấu hoa thị (*), chúng tôi
            sẽ liên hệ với bạn và giúp bạn giải đáp thắc mắc.
            <br /> Mọi thông tin của của người đăng ký đều được bảo mật.
          </div>
          <form
            className="formRegister pe-5 ps-5"
            action=""
            method="post"
            // onSubmit={this.handleSubmit}
          >
            <div className="form-group mb-3">
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  className="form-control me-3"
                  name="fullName"
                  placeholder="Họ tên *"
                  value={fullName}
                  onChange={this.handleChange}
                />

                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  placeholder="Số điện thoại *"
                  value={phoneNumber}
                  onChange={this.handleChange}
                />
              </div>
              <div className="d-flex align-items-center mt-2">
                <div className=" me-3">
                  {/* <Datepicker
                    className="custom-datepicker"
                    selected={this.state.selecteDate}
                    onChange={(date) => this.setSelecteDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Ngày khám *"
                    locale={vi}
                    shouldCloseOnSelect={false}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  /> */}
                  <Datepicker
                    className="custom-datepicker"
                    selected={this.state.selectedDate} // Use selectedDate state value instead of selecteDate
                    onChange={this.setSelecteDate}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Ngày khám *"
                    locale={vi}
                    shouldCloseOnSelect={false}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </div>
                {/* <Select
                  className="custom-select"
                  options={transformedData}
                  placeholder="Chọn dịch vụ..."
                /> */}
                <Select
                  className="custom-select"
                  options={transformedData}
                  placeholder="Chọn dịch vụ..."
                  value={selectedService}
                  onChange={(selectedOption) =>
                    this.setState({ selectedService: selectedOption })
                  }
                />
              </div>
            </div>

            <div className="form-group mb-3">
              <textarea
                name="note"
                placeholder="Ghi chú thêm (triệu chứng, yêu cầu, chỉ định bác sĩ khám...) nếu có"
                className="form-control"
                rows="5"
                value={note}
                onChange={this.handleChange}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                className="btn btn-success"
                name="btn_sdt_goilai"
                type="submit"
                onClick={this.handleSubmit}
              >
                GỬI THÔNG TIN
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.tofService };
};

export default connect(mapStateToProps)(registerService);
