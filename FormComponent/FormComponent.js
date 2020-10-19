import React, { Component } from "react";
import swal from "sweetalert2";
export default class FormComponent extends Component {
  state = {
    values: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
  };
  handleChangeInput = (event) => {
    // lấy ra name và value
    let { name, value } = event.target;
    // lấy ra các attribute types( các thuộc tính trên thẻ tự thêm gọi là attribute)
    let types = event.target.getAttribute("types");
    console.log("types");
    let newValues = { ...this.state.values }; // tạo ra value mới giá trị bằng value cũ
    newValues[name] = value;
    // xử lý errors
    let newErrors = { ...this.state.errors };
    newErrors[name] = value.trim() === "" ? "Không được bỏ trống" : "";

    // Validation các trường đặc biệt
    if (types === "phoneNumber") {
      const regexNumber = /^[0-9]+$/;
      if (!regexNumber.test(value.trim())) {
        newErrors[name] = "Dữ liêu phải là số!";
      }
    }
    if (types === "email") {
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value.trim())) {
        newErrors[name] = "Email không hợp lệ !";
      }
    }
    this.setState(
      {
        // [name]: value,
        values: newValues, // gán values = value mới
        errors: newErrors,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <form
        class="card"
        onSubmit={(event) => {
          // cản sự kiện submit lại trang của browser
          event.preventDefault();
          let valid = true;
          // duyệt thuộc tính trong object values (duyệt thuộc tính trong đối tượng thì dùng ES6 for in )
          for (let tenThuocTinh in this.state.values) {
            if (this.state.values[tenThuocTinh].trim() === "") {
              valid = false;
            }
          }
          // duyệt lỗi => tất cả lỗi phải = rỗng
          for (let tenThuocTinh in this.state.errors) {
            if (this.state.errors[tenThuocTinh].trim() !== "") {
              valid = false;
            }
          }
          if (!valid) {
            // alert("Dữ Liệu không hợp lệ");
            swal.fire("Thông báo", " Dữ liệu không hợp lệ! ", "error");
            return; // return chặn sự kiện submit
          }
          swal.fire("Thông báo", " thêm người dùng thành công", "success");
        }}
      >
        <div className="card-header bg-dark text-light font-weight-bold">
          <span>THÔNG TIN NGƯỜI DÙNG</span>
        </div>

        <div class="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <span>Mã người dùng</span>
                <input
                  value={this.state.values.maNguoiDung}
                  className="form-control"
                  name="maNguoiDung"
                  onChange={this.handleChangeInput}
                ></input>
                <p className="text-danger">{this.state.errors.maNguoiDung}</p>
              </div>
              <div className="form-group">
                <span>Tên người dùng</span>
                <input
                  value={this.state.values.tenNguoiDung}
                  className="form-control"
                  name="tenNguoiDung"
                  onChange={this.handleChangeInput}
                ></input>
                <p className="text-danger">{this.state.errors.tenNguoiDung}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <span>Số điện thoại</span>
                <input
                  types="phoneNumber"
                  value={this.state.values.soDienThoai}
                  value={this.state.values.soDienThoai}
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                ></input>
                <p className="text-danger">{this.state.errors.soDienThoai}</p>
              </div>
              <div className="form-group">
                <span>Email</span>
                <input
                  types="email"
                  value={this.state.values.email}
                  value={this.state.values.email}
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                ></input>
                <p className="text-danger">{this.state.errors.email}</p>
              </div>
            </div>
            <div className="col-12 text-right">
              <button className=" btn btn-success">Thêm người dùng</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
