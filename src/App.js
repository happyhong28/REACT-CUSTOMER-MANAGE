import "./App.css";
import React, { Component } from "react";
import Customer from "./components/Customer";
import Paper from "@mui/material/Paper"; //어떠한 컴포넌트의 외부를 감싸기 위한 컴포넌트 중 하나이다.
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { withStyles } from "@mui/styles";


const styles = {
  root: {
    width: "100%",
    overflowX: "auto",
    marginTop : 50
  },
  table: {
    minWidth: 1080,
  },
};

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "홍다혜",
    birthday: "990208",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "김영훈",
    birthday: "970208",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "문형서",
    birthday: "980208",
    gender: "여자",
    job: "대학생",
  },
];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => {
            return (
              <Customer
                key={c.id} //map 함수를 사용할 때는 꼭 키값을 넣어주어야한다.
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })}
        </TableBody>
      </Table>
    </Paper>


);
  }
}

export default withStyles(styles)(App);
