import React from "react"
import {hashHistory,Link} from "react-router";
//使用axios取代ajax（不用引入jquery了,axios较轻量化,基于promise实现）
import axios from 'axios';

export default class info extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        //这里是info父组件，使用this.props.children加载子组件以在同一页面显示（this.props.children由主容器中Route父子组件的嵌套关系决定）
        //使用Link组件（由react-router获取），并添加to属性（值为相应的路径），会将组件渲染为a标签，点击后会加载相应的this.props.children
        		return (
			<div className = "wrap">
				<ul className = "infoUl">
					<li><Link to="info/emp">员工管理</Link></li>
					<li><Link to="info/student">学生管理</Link></li>
					<li><Link to="info/teache">教师管理</Link></li>
					<li><Link to="info/system">系统管理</Link></li>
				</ul>
				{ this.props.children }
			</div>
		);
    }
    
}