import React from "react"
import { connect } from "react-redux";

//载入依赖的展示组件
import List from "./list.js";
import Pagination from "./pagination.js";

//获取action
import {
    asynGetEmpByPage,
    asynDelById,
    setCurPage
} from "../../../Store/actions.js";


class GetEmp extends React.Component{
    constructor(props){
        super(props);
    };
    
    //在render之前执行componentWillMount的内容
    componentWillMount() {
		this.props.dispatch(asynGetEmpByPage(1,10))
	}
	render() {
        //缓存props上的state
        let {
            dispatch,
            empData
        } = this.props;
        
		return (
			<div>
				<h1>员工信息列表</h1>
				<List delFn={(_id) =>{dispatch(asynDelById(_id))} } listData={ empData.listData } />
				<Pagination 
				setCurPage={(curPage) => {dispatch(setCurPage(curPage))}}
				{...empData} />
			</div>
		);
	}
}

function select(state){
    return state;
}

export default connect(select)(GetEmp);