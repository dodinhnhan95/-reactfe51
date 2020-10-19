import React, { Component } from "react";
import FormComponent from "./FormComponent";

export default class DanhSachNguoiDung extends Component {
  render() {
    return (
      <div className="container">
        <FormComponent />
        <table className="table">
          <thead>
            <tr>
              <th>Tên người dùng</th>
              <th>Mã người dùng</th>
              <th>Số diện thoại</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}
