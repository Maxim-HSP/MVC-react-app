import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
////组件的生命周期
//var Wrap = React.createClass({
//	getDefaultProps() {
//		console.log("getDefaultProps")
//		return {
//			message: "hi",
//			name: "li4"
//		}
//	},
//	test() {
//		console.log(this.props.name)
//	},
//	render() {
//		return (
//			<div>
//				<h1>{ this.props.message + ": " + this.props.name }</h1>
//				<input onClick={() => {
//					console.log(this)
//				}} type="button" value="点击" />
//				{ this.props.children }
//			</div>
//		);
//	}
//})
//
//ReactDOM.render((
//	<Wrap 
//		message="hello" 
//		name="zhangsan"
//		{ ...user }
//		clickHandle={ clickHandle }>
//		{ test }
//	</Wrap>
//), app)

//-------------------------------self-计数----------------------------------
//外层容器(主容器)
var Container_count = React.createClass({
    getInitialState(){
        return  {
            name : "maxim",
            age : 23,
            sayName : function(){
                console.log(this.name)
            },
            count: 0
        }
    },
    //定义各方法，在render时传给各展示组件
    plusCount(){
        this.setState({
            count: ++this.state.count
        })
        console.log(this.state.count)
    },
    setCount(num){
        console.log(num);
        this.setState({
            count: num
        })
    },
    //组织所有子组件结构(将外层容器state与子组件即展示组件props关联)
    render(){
        return (
            <div className={"wrap"}>
                <Node_num num={this.state.count} name={this.state.name}/>
                <Set_count 
                       plusCount={() => this.plusCount()} 
                       setCount={(num) => this.setCount(num)} 
                />
            </div>
        )
    }
});
//展示组件
var Node_num = React.createClass({
    //默认值
    getDefaultProps(){
        return {
            hobby:"GAMES"
        }
    },
    render(){
        //定义本子组件结构
        return (
            <div>
                <p>主容器state中name值传递到本容器：<b>{this.props.name}</b></p>
                <p>默认props值hobby：<b>{this.props.hobby}</b></p>
                <h3>计数：{this.props.num}</h3>
            </div>
        );
    }
})
var Set_count = React.createClass({
    render() {
       return(
           <div>
               <input type="text" ref="inputNum" placeholder="重设数字"/>
               <input type="button" value="计数+" onClick={() => this.props.plusCount()}/>
               <input type="button" value="重置/重设" onClick={() => {
                       console.log(this.refs.inputNum.value)
                        this.props.setCount(~~this.refs.inputNum.value);
                        this.refs.inputNum.value = "";
                   }}/>
           </div>
       )
   }
});
ReactDOM.render(<Container_count />,app)

//------------------------self-todoList----------------------------------

//定义主容器
var Container_todoList = React.createClass({
    //主要数据
    getInitialState(){
        return {
            listData:[{
                content:"备忘1",
                done:false
            },{
                content:"备忘2",
                done:true
            },{
                content:"备忘3",
                done:true
            },{
                content:"备忘4",
                done:false
            }],
            showType: "all"
        }
    },
    
    //各子组件方法（在主容器中定义才能操作主容器state及调用setState方法）
    addTodo(inputMemo){
        //添加备忘条目数据
        this.state.listData.push({
            content:inputMemo,
            done:false
        });
        //setState（会调用render并更新state）
        this.setState(this.state);
    },
    switchMemo(item){
        console.log(item);
        item.done= !item.done;//取反，为true则false，反之亦然
        this.setState(this.state);
    },
    
    setShowType(showType) {
		this.setState({
			showType
		})
	},
	dataFilter() {
		switch (this.state.showType) {
			case "all":
				return this.state.listData;
			case "completed":
				return this.state.listData.filter((item) => item.done)
			case "active":
				return this.state.listData.filter((item) => !item.done)
		}
	},
    
    //组织子组件结构（并将数据和方法通过props传递给子组件）
    render(){
        return(
            <div className="wrap">
                <AddTodo addTodo = {(inputMemo)=>this.addTodo(inputMemo)} />
                <Node_list 
                    listData = {this.dataFilter()} 
                    switchMemo={(item)=>this.switchMemo(item)}
                />
                <FilterWrap 
                    showType={ this.state.showType } 
                    setShowType={(showType)=>{this.setShowType(showType)}}
                />
            </div>
        )
    }
})
//子组件（展示组件）
var AddTodo = React.createClass({
    render(){
        return (
            <div>
                <input ref="inputMemo" type="text"/>
                <input type="button" value="add" onClick={()=>{
                        this.props.addTodo(this.refs.inputMemo.value)
                        this.refs.inputMemo.value="";
                    }}/>
            </div>
        )
    }
})
var Node_list = React.createClass({
    render(){
            //注意此处listData是址传递（才能在主容器为Node_list定义的方法中通过栈地址直接更新堆数据），item是每个数据条目的对象
        return(
            <ul>
                {
                    this.props.listData.map((item,index)=>{
                        return <li key = {"No."+index} onClick = {()=> this.props.switchMemo(item)} className={item.done ? "done" : ""}>{item.content}</li>
                    })
                }
            </ul>
        );
    }
})
var FilterWrap = React.createClass({
    render(){
        return(
            <div>
				<span>SHOW: </span>
				{" "}
				{ this.showType(this.props.showType, "all") }
				{" "}
				{ this.showType(this.props.showType, "completed") }
				{" "}
				{ this.showType(this.props.showType, "active") }
			</div>
        )
    },
    showType(showType, name) {
		if (showType === name) {
			return <span>{ name }</span>
		}
		return (<a onClick = {
			(e) => {
				e.preventDefault();
				this.props.setShowType(name)
                }
            }
		href = "#" >{name}</a>)
	}
})
//输出主容器
ReactDOM.render(<Container_todoList />, app2)

//-------------组件模块化 重构备忘录-------------------------
import TodoList from "./components/todoList/todoList.js"

ReactDOM.render(<TodoList />, app3)
//-------------react-router spa后台管理系统--------------------
//获取react-router
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

import Login from "./components/emp_spa/login.js";
import Reg from "./components/emp_spa/reg.js";

import Info from "./components/emp_spa/info/info.js"
import Student from "./components/emp_spa/info/student/student.js"
import Emp from "./components/emp_spa/info/emp/emp.js"
import GetEmp from "./components/emp_spa/info/emp/getEmp.js"
import AddEmp from "./components/emp_spa/info/emp/addEmp.js"

//使用react-router提供的组件进行模块化跳转（路由）(实际就是render加载Router和Route等组件)
//Router的history属性指定那种类型的路径，hashHistory则是地址栏锚点
//Route的path属性为路径匹配，component属性为加载的模块

//定义spa多级模块（树组件等等需要同时显示的），则将父Route和子Route嵌套（父Route写为闭合标签而不是单标签），这样可以在父模块的render中使用this.props.children加载子模块
//注意嵌套的Route子组件的path不要加斜杠，搭配子模块中的Link组件的to属性匹配路径以加载相应的子模块
ReactDOM.render((
    <div className={"wrap"}>
        <Router history={ hashHistory }>
            <Route path="/" component={ Login } />
            <Route path="/login" component={ Login } />
            <Route path="/login/:username" component={ Login } />
            <Route path="/reg" component={ Reg } />
            <Route path="/info" component={ Info }>
                <Route path="emp" component={ Emp }>
				    <Route path="getEmp" component={ GetEmp} />
				    <Route path="addEmp" component={ AddEmp} />
			    </Route>
			    <Route path="student" component={ Student }>
                    
                </Route>
		    </Route>  
	    </Router>
    </div>
), app5)
