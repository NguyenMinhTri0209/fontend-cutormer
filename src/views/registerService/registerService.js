import React from "react";
import "./registerService.css";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import vi from "date-fns/locale/vi";
import axios from "axios";
import Select from "react-select";
import { connect } from "react-redux";

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
    this.setState({
      selecteDate: date,
    });
  };

  render() {
    let { selecteDate } = this.state;
    const { tofService } = this.state;

    const transformedData = tofService.map((tofService) => ({
      value: tofService.madv,
      label: tofService.tendv,
    }));

    return (
      <div className="dangkygiua mb-4 mt-2 p-5">
        <div className="container">
          <div className="text-center mb-3" style={{ color: "white" }}>
            Vui lòng điền đầy đủ thông tin được đánh dấu hoa thị (*), chúng tôi
            sẽ liên hệ với bạn và giúp bạn giải đáp thắc mắc.
            <br /> Mọi thông tin của của người đăng ký đều được bảo mật.
          </div>
          <form className="formRegister pe-5 ps-5" action="" method="post">
            <div className="form-group mb-3">
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  className="form-control me-3"
                  name="hoten"
                  placeholder="Họ tên *"
                />

                <input
                  type="text"
                  className="form-control"
                  name="sodienthoai"
                  placeholder="Số điện thoại *"
                />
              </div>
              <div className="d-flex align-items-center mt-2">
                <div className=" me-3">
                  <Datepicker
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
                  />
                </div>
                <Select
                  className="custom-select"
                  options={transformedData}
                  placeholder="Chọn dịch vụ..."
                />
              </div>
            </div>

            <div className="form-group mb-3">
              <textarea
                name="trieuchung"
                placeholder="Ghi chú thêm (triệu chứng, yêu cầu, chỉ định bác sĩ khám...) nếu có"
                className="form-control"
                rows="5"
              ></textarea>
            </div>

            <div className="text-center">
              <button className="btn btn-success" name="btn_sdt_goilai">
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
