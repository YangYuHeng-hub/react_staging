import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    keyWordContainer = React.createRef()

    search = ()=>{
        //1.获取用户的输入
        const {value} = this.keyWordContainer.current
        //2.校验数据
        if(!value.trim()) return alert('输入不能为空')
        //通知App将：isFirst变为false，isLoading变为true，把errorMsg清空
        this.props.updateAppState({isFirst:false,isLoading:true,errorMsg:''})
        //3.发送请求获取数据
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                const {items:users} = response.data
                //请求成功后，通知App存储用户信息
                this.props.updateAppState({users,isLoading:false})
            },
            error => {
                //请求失败后，存储错误信息，将isLoading变为false
                this.props.updateAppState({isLoading:false,errorMsg:error.message})
            }
        )
    }

  render() {
    return (
        <section> 
            <h3>Search Github Users</h3>
            <div>
                <input type="text" ref={this.keyWordContainer} placeholder='enter the name you search' />
                <button onClick={this.search}>Search</button>
            </div>
        </section>
    )
  }
}
