import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

class Customer extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell><img src={this.props.image} alt="" /></TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.job}</TableCell>
      </TableRow>
    );
  }
}

//사용자의 id값과 image를 렌더링하는 함수
class CustomerProfile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="profile" />
        <h2>
          {this.props.name}({this.props.id})
        </h2>
      </div>
    );
  }
}

//사용자 정보를 렌더링하는 함수
class CustomerInfo extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

export default Customer;
