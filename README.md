## 笔记：

### 1.用脚手架编写Weather组件
		(1).建立如下文件结构：
					├── public ==> 用于存放静态资源
							├── favicon.ico ==> 网站页签图标
							├── index.html ==> 应用界面
					├── src
						  ├── index.js ==> 入口文件，要引入：React，ReactDOM，App
						  ├── App.jsx ==>整个应用的外壳组件
						  └── components ==>专门用于存放程序员写的组件
								  ├── Weather.jsx ==>天气组件(自己要写的功能组件)
		(2).注意点：
					 1). import React,{Component} from 'react' 不是解构赋值！
					 2). html中容器的id，必须和index.js中写的容器相对应。
					 3). App是外壳组件，里面通常引入其他组件使用。

### 2.TodoList案例
        (1).组件化编码流程:
            1.拆分组件：根据功能点划分组件。
            2.实现静态组件：使用组件实现静态页面效果
            3.实现动态组件
                3.1 动态显示初始化数据
                    3.1.1 数据类型
                    3.1.2 数据名称
                    3.1.3 保存在哪个组件？
                            某个组价用，放在自身
                            某些组件用，放在共同父组件 ==> 状态提升
                3.2 交互(从绑定事件监听开始)
        (2).状态在哪里，操作状态的方法就在哪里
        (3).关于父子之间通信：
            1.【父组件】给【子组件】传递数据：通过props传递
            2.【子组件】给【父组件】传递数据：通过props传递，要求父组件提前给子组件传递一个函数
        (4).兄弟组件之间通信：借助共同的父亲
        (5).关于checked和defaultChecked：
            1.什么时候用checked？————不仅仅展示勾选状态，后期还需要响应勾选的动作
                                    注意：用了checked，就必须要用onChange
            2.什么时候用defaultChecked？————仅仅展示勾选状态
                                            注意：defaultChecked只管第一次渲染
            3.value和defaultValue也是同理

### 3.脚手架配置代理
		1.第一种：直接在package.json中配置"proxy": "http://localhost:5000"
		2.第二种：建立配置文件，详见：老师分享的配置文档
                1.创建代理配置文件，在src下创建配置文件：src/setuoProxy.js
                2.编写setupProxy.js配置具体代理规则

