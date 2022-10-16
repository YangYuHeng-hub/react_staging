import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './index.css'



export default class List extends Component {
  state = {
    users:[],//存储用户信息
    isFirst:true,//是否为初始展示
    isLoading:false, //标识是否为加载中
    errorMsg:'' //存储错误信息
}

  componentDidMount(){
    this.token = Pubsub.subscribe('Search2List',(msg,data)=>{
      this.setState(data)
    })
  }

componentWillUnmount(){
  Pubsub.unsubscribe(this.token)
}

  render() {
    const {users,isFirst,isLoading,errorMsg} = this.state
    return (
    <div className='row'>
      {
        isFirst ? <h1>欢迎使用！</h1> :
        isLoading ? <h1>Loading...</h1> :
        errorMsg ? <h1>{errorMsg}</h1> :
        users.map((user,index)=>{
          return (
            <div className="card" key={user.id}>
			        <a href={user.html_url} target="_blank" rel="noreferrer">
				        <img alt="pic" src={user.avatar_url} style={{width: '100px'}}/>
			        </a>
			        <p className="card-text">{user.login}</p>
            </div>
          )
        })
      }
    </div>
    )
  }
}
