import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  handleSelectAll = (event)=>{
    this.props.selectAll(event.target.checked)
  }

  render() {
    const {todos,deleteDone} = this.props
    const countDone = todos.reduce((preValue,current)=>{
      return preValue + (current.done === true ? 1 : 0)
    },0)
    return (
      <div>
        <input type="checkbox" 
          onChange={this.handleSelectAll}
          checked={todos.length === countDone && todos.length > 0}
        />
        <span>
          <span>已完成{countDone}</span> / 总计{todos.length}
        </span>
        <button onClick={deleteDone}>删除所有已完成任务</button>
      </div>
    )
  }
}
