import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouseEnter:false}

  //鼠标移入移出的回调
  handleMouse = (isEnter)=>{
    return ()=>{
      this.setState({mouseEnter:isEnter})
    }
  }

  //删除按钮的回调
  handleDelete = (id)=>{
    return ()=>{
      if(window.confirm('确定删除吗？')){
        this.props.deleteTodo(id)
      }
    }
  }

  //勾选or取消勾选的回调
  handleChange = (id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }

  render() {
    const {id,name,done} = this.props
    const {mouseEnter} = this.state
    return (
      <li
       onMouseEnter={this.handleMouse(true)} 
       onMouseLeave={this.handleMouse(false)}
       className={mouseEnter?'active':''}
      >
        <label>
          <input type="checkbox" checked={done} onChange={this.handleChange(id)}/>
          <span>{name}</span>
        </label>
        <button
         style={{display:mouseEnter?'block':'none'}}
         onClick={this.handleDelete(id)}
         className="btn btn-danger"
        >
          删除
        </button>
      </li>
    )
  }
}
