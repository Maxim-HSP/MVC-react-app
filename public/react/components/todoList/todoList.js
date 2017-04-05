import React from "react"
import AddTodo from "./AddTodo.js"
import Node_list from "./Node_list.js"
import FilterWrap from "./Filter.js"

export default class todoList extends React.Component {
    constructor(props){
        super(props);
        //初始化state，等同于getInitialState方法
        this.state = {
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
    };
    //定义展示组件方法
    
    addTodo(inputMemo){
        //添加备忘条目数据
        this.state.listData.push({
            content:inputMemo,
            done:false
        });
        //setState（即调用render并更新state）
        this.setState(this.state);
    }
    switchMemo(item){
        console.log(item);
        item.done= !item.done;//取反，为true则false，反之亦然
        this.setState(this.state);
    }
    
    setShowType(showType) {
		this.setState({
			showType
		})
	}
	dataFilter() {
		switch (this.state.showType) {
			case "all":
				return this.state.listData;
			case "completed":
				return this.state.listData.filter((item) => item.done)
			case "active":
				return this.state.listData.filter((item) => !item.done)
		}
	};
    
    //组织子组件结构（并将数据和方法通过props传递给子组件）
    render(){
        return(
            <div className = {"wrap"}>
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
}