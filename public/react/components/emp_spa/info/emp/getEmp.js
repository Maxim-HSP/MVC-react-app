import React from "react"
import {hashHistory,Link} from "react-router";
import axios from 'axios';

import List from "./list.js";
import Pagination from "./pagination.js";

export default class GetEmp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
			curPage: 1,
			eachPage: 10,
			sumPage: 0,
			maxPage: 0,
			listData: []
		}
    };
    //在render之前执行componentWillMount的内容
    componentWillMount() {
		this.getEmpByPage()
	}

	getEmpByPage() {
        axios.get('/emp/getEmpByPage', {
            params: {
              curPage: this.state.curPage,
              eachPage: this.state.eachPage
            }
        })
	    .then(function (response) {
            return response.data
	    })
	    .then((data) => {
            //返回列表数据
            //注意，这里可以将state的键写为和返回的数据data一样，这样直接setState(data)直接解构配对
            this.setState({
                sumPage:data.count,
                curPage:data.curPage,
                eachPage:data.eachPage,
                maxPage:data.maxPage,
                listData:data.data
            })
        })
	    .catch(function (error) {
	        console.log(error);
	    });
	}

	delById(_id) {
		axios.get('/emp/delById', {
            params: {
              _id:_id
            }
        })
	    .then(function (response) {
            return response.data
	    })
	    .then((data) => {
            //返回是否删除成功
            if(eval(data)){
                getEmpByPage();
            }
        })
	   .catch(function (error) {
	        console.log(error);
	    });
	}

	setCurPage(curPage) {
		this.state.curPage = curPage;
		this.getEmpByPage();
	}

	render() {
		return (
			<div>
				<h1>员工信息列表</h1>
				<List delFn={(_id) => this.delById(_id) } listData={ this.state.listData } />
				<Pagination 
				setCurPage={(curPage) => this.setCurPage(curPage)}
				{...this.state} />
			</div>
		);
	}
}