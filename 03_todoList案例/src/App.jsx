import React,{Component} from "react";
import Add from "./components/Add"
import Footer from "./components/Footer";
import List from "./components/List"
import './App.css'

export default class App extends Component{
    //初始化状态，因为Add要用todos(添加),而且List也要用(读取)
    state = {
        todos:[
            {id:'001',name:"抽烟",done:true},
            {id:'002',name:"喝酒",done:false},
            {id:'003',name:"烫头",done:true}
        ]
    }

    //添加todo
    addTodo = (todo)=>{
        //获取原数据
        const {todos} = this.state
        //更新状态
        this.setState({todos:[todo,...todos]})
    }

    //删除todo
    deleteTodo = (id)=>{
        const {todos} = this.state
        const newTodos = todos.filter((todo,index)=>{
            return todo.id !== id
        })
        this.setState({todos:newTodos})
        /* todos.splice(index,1)
        this.setState({todos}) */
    }

    //更新todo
    updateTodo = (id,done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todo,index)=>{
            if(todo.id === id){
                todo.done = done
            }
            return todo
        })
        this.setState({todos:newTodos})
    }

    //删除已完成todo
    deleteDone = ()=>{
        const {todos} = this.state
        const newTodos = todos.filter((todo,index)=>{
            return todo.done !== true
        })
        this.setState({todos:newTodos})
    }

    //将所有任务全选或全不选
    selectAll = (type)=>{
        const {todos} = this.state
        const newTodos = todos.map((todo,index)=>{
            todo.done = type
            return todo
        })
        this.setState({todos:newTodos})
    }

    render(){
        return (
            <div className="app">
                <Add addTodo={this.addTodo}/>
                <List todos={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
                <Footer todos={this.state.todos} deleteDone={this.deleteDone} selectAll={this.selectAll}/>
            </div>
        )
    }
}