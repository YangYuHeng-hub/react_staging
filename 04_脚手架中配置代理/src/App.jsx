import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  getStudentInfo = ()=>{
    axios({
      url:'http://localhost:3000/api1/students',
      method:'GET'
    }).then(
      response => {console.log('成功了',response.data)},
      error => {console.log('失败了',error)}
    ) 
  }

  getCarInfo = ()=>{
    axios.get('http://localhost:3000/api2/cars').then(
      response => {console.log('成功了',response.data)},
      error => {console.log('失败了',error)}
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentInfo}>点我获取学生信息</button>
        <button onClick={this.getCarInfo}>点我获取汽车信息</button>
      </div>
    )
  }
}

