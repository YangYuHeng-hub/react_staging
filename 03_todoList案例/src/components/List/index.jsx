import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const {todos,deleteTodo,updateTodo} = this.props
    return (
      <ul className='list'>
        {
          todos.map((todo,index)=>{
            return <Item key={todo.id} {...todo} index={index} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
          })
        }
      </ul>
    )
  }
}
