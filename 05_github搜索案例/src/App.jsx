import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'

export default class App extends Component {
    state = {
        users:[],//存储用户信息
        isFirst:true,//是否为初始展示
        isLoading:false, //标识是否为加载中
        errorMsg:'' //存储错误信息
    }

    updateAppState = (obj)=>{
        this.setState(obj)
    }

    render() {
        return (
            <div className='container'>
            <Search updateAppState={this.updateAppState}/>
            <List {...this.state}/>
        </div>
        )
    }
}
