const express = require('express')

const app = new express()

app.get('/cars',(req,res)=>{
    const cars = [
        {name:'凯迪拉克',price:'$1'},
        {name:'奔驰',price:'$2'},
    ]
    res.send(cars)
})

app.listen(5001,(err)=>{
    if(!err)
        console.log('服务器启动成功：获取汽车信息请访问http://localhost:5001/cars')
})