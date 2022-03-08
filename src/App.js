import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';

const customer  = {
  name : "홍다혜",
  birthday : "990208",
  gender : "여자",
  job : "대학생"
}

class App extends Component{
  render(){
    return(
      <Customer name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job}/>

    );
  }
}

export default App;
