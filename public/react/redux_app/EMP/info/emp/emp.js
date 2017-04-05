import React from "react"
import {hashHistory,Link} from "react-router";
import axios from 'axios';

export default class Emp extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div className="emp">
				<ul className="emp-nav">
					<li><Link to="/info/emp/addEmp">新增员工</Link></li>
					<li><Link to="/info/emp/getEmp">员工列表</Link></li>
				</ul>
				<div>{ this.props.children }</div>
			</div>
        )
    }
}