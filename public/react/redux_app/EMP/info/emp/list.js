import React from "react"
import {hashHistory,Link} from "react-router";
import axios from 'axios';

export default class List extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return (
			<table className="empList">
				<thead>
					<tr>
						<th>员工编号</th>
						<th>员工姓名</th>
						<th>员工薪水</th>
						<th>员工岗位</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.listData.map((item, index) => {
							return (
								<tr key={index}>
									<td>{ item._id }</td>
									<td>{ item.empName }</td>
									<td>{ item.sal }</td>
									<td>{ item.job }</td>
									<td><input onClick={() => {
										this.props.delFn(item._id)
									}} type="button" value="删除" /></td>
								</tr>
							);
						})
					}
				</tbody>
			</table>
		);
    }
}