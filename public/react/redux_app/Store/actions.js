//--------------------------todoList action-----------------------------

//将action的type名声明为常量，直接传递这个常量，一方面给action的type，一方面给reducer的type，防止出错。
export const ADD_TODO = "ADD_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";
export const SET_SHOW_TYPE = "SET_SHOW_TYPE";
export const INCREMENT_ID = "INCREMENT_ID";
export const filter = {
	ALL: "all",
	COMPLETED: "completed",
	ACTIVE: "active"
};

//定义各action，写成函数的形式方便处理action中的额外数据，使其配合thunk使用(thunk在dispatch时如果参数不是对象而是方法，就会生效)，同时还实现不用在组件中dispatch的时候完整的写完一个包含type的对象，只用写方法名执行就行。
export function addTodo(id, content) {
	return {
		type: ADD_TODO,
		id,
		content
	}
}

export function completedTodo(id) {
	return {
		type: COMPLETED_TODO,
		id
	}
}

export function setShowType(showType) {
	return {
		type: SET_SHOW_TYPE,
		showType
	}
}

export function incrementID() {
	return {
		type: INCREMENT_ID
	}
}
//通过redux-thunk二次封装action，实际就是让多个action函数变为一个执行，用于将不同的action组合成不同的功能，如下面这个功能就是添加新条目的同时使index(id)加1,在组件中只用dispatch一个action函数而不用写两个
export function thunk_addTodo(id, content) {
	return function(dispatch) {
		dispatch(addTodo(id, content));
		dispatch(incrementID())
	}
}


//--------------------------EMP action-----------------------------
import axios from "axios";

export function usernameIsUse(isUse){
    return {
        type: "usernameIsUse",
        isUse
    }
}
export function asynNameisUse(username){
    return dispatch => {
        axios.get('/users/isUse', {
				params: {username}
			})
			.then(function(response) {
				return response.data;
			})
			.then((data) => {
				dispatch(usernameIsUse(data))
			})
			.catch(function(error) {
				console.log(error);
			});
    };
}

export function regIsSuccess(isSuccess){
    return {
        type:"regIsSuccess",
        isSuccess
    }
}
export function asynReg(username,password){
    return dispatch =>{
        axios.get('/users/reg', {
				params: {
                    username ,
                    password
                }
			})
			.then(function(response) {
                //此处再将data传送给下一个then
				return response.data;
			})
			.then((data) => {
				if(data) {
					dispatch(regIsSuccess(data))
				}
			})
        //如果出错返回false
			.catch(function(error) {
                dispatch(regIsSuccess(false))
				console.log(error);
			});
    }
};

//员工列表
export function getEmpByPage(empData){
    return {
        type:"getEmpByPage",
        empData
    }
}
export function asynGetEmpByPage(curPage = 1,eachPage = 10){
    return dispatch => {
        axios.get('/emp/getEmpByPage', {
            params: {
              curPage,
              eachPage
            }
        })
	    .then(function (response) {
            return response.data
	    })
	    .then((data) => {
            //返回列表数据
            //稍微修改一下键(方便理解)
            dispatch(getEmpByPage({
                sumPage:data.count,
                curPage:data.curPage,
                eachPage:data.eachPage,
                maxPage:data.maxPage,
                listData:data.data
            }))
        })
	    .catch(function (error) {
	        console.log(error);
	    });
    }
}

export function asynDelById(_id){
    return dispatch =>{
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
                dispatch(asynGetEmpByPage());
            }
        })
	   .catch(function (error) {
	        console.log(error);
	    });
    }
}
export function setCurPage(curPage){
    return dispatch => {
        dispatch(asynGetEmpByPage(curPage))
    }
}