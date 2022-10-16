import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users,isFirst,isLoading,errorMsg} = this.props
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
