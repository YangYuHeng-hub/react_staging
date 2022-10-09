import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./index.css"

export default class Add extends Component {
  //添加一个todo的回调
  handleKeyUp = (event)=>{
    const {value} = event.target
    if(event.keyCode !== 13)
      return
    if(value.trim() === '')
      return alert('输入内容不能为空，请重新输入')
    //准备好一个todo对象
    const todo = {id:uuidv4(),name:value.trim(),done:false}
    //将todo对象传给APP
    this.props.addTodo(todo)
    event.target.value = ''
  }


  render() {
    return (
      <div className='title'>
        <input type="text" onKeyUp={this.handleKeyUp} placeholder={"请输入你的任务名称，按回车键确认"} />
      </div>
    )
  }
}
