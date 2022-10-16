const express = require('express')

const app = express()

app.get('/students',(req,res)=>{
    const students = [
        {name:'张三',age:18},
        {name:'李四',age:19}
    ]
    res.send(students)
})

app.listen(5000,(err)=>{
    if(!err)
        console.log('服务器启动成功：获取学生信息请访问http://localhost:5000/students')
})