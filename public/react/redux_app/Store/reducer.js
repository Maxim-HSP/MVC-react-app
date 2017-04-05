import { combineReducers } from 'redux';

//--------------------------todoList reducer-----------------------------


//解构匹配action的type值等，直接通过常量传递字符串，防止出错,由action.js暴露
//同时也将所有的方法名集中，方便查阅
import {
	ADD_TODO,
	COMPLETED_TODO,
	SET_SHOW_TYPE,
	INCREMENT_ID,
	filter
} from "./actions.js";

//处理器(reducer):
//reducer实际就是个函数，其默认接收两个参数，action是dispatch执行时发送的对象(其中包含type键和自定的数据，type用来匹配具体的操作以处理数据),state是reducer返回(return)的值，也就是说，reducer的每次执行都会更新state的值，而每次执行dispatch都会将所有的reducer都执行一次（即一般不直接执行reducer，而是调用dispatch发送action执行reducer从而更新state，reducer方法名相当于键，state相当于值，实际就是生成数据）

let initialData = [{
                id:1,
                content:"redux备忘1",
                done:false
            },{
                id:2,
                content:"redux备忘2",
                done:true
            },{
                id:3,
                content:"redux备忘3",
                done:true
            },{
                id:4,
                content:"redux备忘4",
                done:false
            }]
function listData(state = initialData, action) {
    //此处为方便测试赋予state默认数据(改为空数组默认值即可恢复)
    //开始匹配dispatch发送的action，以执行不同的操作
	switch(action.type) {
		case ADD_TODO:
			return [...state, {
				id: action.id,
				content: action.content,
				done: false
			}];
		case COMPLETED_TODO:
			return state.map((item) => {
				if(item.id === action.id) {
					return Object.assign({}, item, {
						done: !item.done
					})
				}
				return item;
			})
            //默认情况下返回state
		default: 
			return state;
	}
}


function showType(state = filter.ALL, action) {
	switch(action.type) {
		case SET_SHOW_TYPE:
			return action.showType;
		default:
			return state;
	}
}
//单条备忘数据添加一个id，以模拟请求后台交互的参数的结构
//每次添加一条数据的时候，index加1，再将这个数字作为id给数据本身（仍旧是为了模拟参数结构，实际有后台接口的时候就不用这样了，后台会自动给数据添加_id）
function index(state = 5, action) {
	switch(action.type) {
		case INCREMENT_ID:
			return state + 1;
		default:
			return state
	}
}


//--------------------------EMP reducer-----------------------------

function usernameIsUse (state = false, action){
    switch(action.type){
        case "usernameIsUse":
            return action.isUse
        default:
            return state
    }
}

function regIsSuccess (state = false,action){
    switch(action.type){
        case "regIsSuccess":
            return action.isSuccess
        default:
            return state
    }
}

let testEmpData = {
			curPage: 1,
			eachPage: 10,
			sumPage: 0,
			maxPage: 0,
			listData: []
		}
function empData(state = testEmpData, action){
    switch(action.type){
        case "getEmpByPage":
            return action.empData   
        default:
            return state
    }
}

//----------将所有处理器打包暴露(使用combineReducers方法)---------------
export default combineReducers({
    //todoList部分
    listData,
	showType,
	index,
    //EMP部分
    usernameIsUse,
    regIsSuccess,
    empData
})