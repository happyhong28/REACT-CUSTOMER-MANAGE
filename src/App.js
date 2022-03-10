import "./App.css";
import React, { Component } from "react";
import Customer from "./components/Customer";

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
    birthday: "990208",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "김선우",
    birthday: "990208",
    gender: "여자",
    job: "대학생",
  },
];

class App extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
