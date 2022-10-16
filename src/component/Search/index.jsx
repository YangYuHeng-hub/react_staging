import React, { Component } from 'react'
import axios from 'axios'
import Pubsub from 'pubsub-js'

export default class Search extends Component {

    keyWordContainer = React.createRef()

    search = ()=>{
        //1.获取用户的输入
        const {value} = this.keyWordContainer.current
        //2.校验数据
        if(!value.trim()) return alert('输入不能为空')
        //通知List将：isFirst变为false，isLoading变为true，把errorMsg清空
        Pubsub.publish('Search2List',{isFirst:false,isLoading:true})
        //3.发送请求获取数据
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                const {items:users} = response.data
                //请求成功后，通知App存储用户信息
                Pubsub.publish('Search2List',{users,isLoading:false})
                //this.props.updateAppState({users,isLoading:false})
            },
            error => {
                //请求失败后，存储错误信息，将isLoading变为false
                Pubsub.publish('Search2List',{isLoading:false,errorMsg:error.message})
                //this.props.updateAppState({isLoading:false,errorMsg:error.message})
            }
        )
    }

    pressEnter = (event)=>{
        if(event.keyCode === 13)
            this.search()
    }

  render() {
    return (
        <section> 
            <h3>Search Github Users</h3>
            <div>
                <input type="text" ref={this.keyWordContainer} onKeyUp={this.pressEnter} placeholder='enter the name you search' />
                <button onClick={this.search}>Search</button>
            </div>
        </section>
    )
  }
}
