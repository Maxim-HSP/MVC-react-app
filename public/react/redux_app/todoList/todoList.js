import React from "react"
import {connect} from "react-redux";
//引入action
import {
	thunk_addTodo,
	completedTodo,
	setShowType,
	filter,
	incrementID
} from "../Store/actions.js";
//用以匹配在filterFn中过滤listData数据
let {
	ALL,
	COMPLETED,
	ACTIVE
} = filter;

//载入子展示组件,注意展示组件本身没有数据，只是用来处理数据并render而已(view)
import AddTodo from "./AddTodo.js"
import Node_list from "./Node_list.js"
import FilterWrap from "./Filter.js"

class todoList extends React.Component {
    constructor(props){
        super(props);
    };
    
    render(){
        //通过connect方法，todoList组件的props已经拿到了数据和dispatch方法
        //另外，同时还有react-router赋予的props(地址栏hash值等),可打印查看
//        console.log(this.props)
        //将拿到的数据和dispatch方法取出,方便调用,注意listData已经经过filterFn过滤
        let {
			listData,
			showType,
			index,
			dispatch
		} = this.props;
        //组织子组件结构（并将数据和方法再传递给子组件的props）
        return(
            <div className="wrap">
                <AddTodo 
                   addTodo = {(inputMemo)=>{
                        dispatch(thunk_addTodo(index, inputMemo))
                    }}
                 />
                <Node_list 
                    listData = {listData} 
                    switchMemo={(item)=>{
                        dispatch(completedTodo(item.id))
                    }}
                />
                <FilterWrap 
                    showType={ showType } 
                    setShowType={(choseType)=>{
                        dispatch(setShowType(choseType))
                    }}
                />
            </div>
        )
    }
}
//通过showType过滤数据
function filterFn(state) {
	switch(state.showType) {
		case ALL:
			return state.listData;
		case COMPLETED: 
			return state.listData.filter((item) => item.done);
		case ACTIVE:
			return state.listData.filter((item) => !item.done);
	}
}

//connect方法：
//---解析:自建一个select方法，可以在这个方法中处理数据然后返回，将这个方法作为参数传入react-redux提供的connect方法中运行（connect方法会将store的数据传入select方法中执行过滤），其返回值也为一个方法，再将需要注入数据的组件作为参数传入这个返回的方法中运行,最后会将props已有数据的组件返回，此时可暴露出去让应用入口接收。
//---简单理解为：connect方法第一个括号传入select方法(用来过滤或处理数据)，第二个括号传入需要数据的组件,执行完成后这个组件的props上就有过滤过后的store的数据了

function select(state) {
    //assign合并对象，相同键值的会被覆盖，返回一个新对象
	return Object.assign({}, state, {
		listData: filterFn(state)
	})
}
export default connect(select)(todoList);