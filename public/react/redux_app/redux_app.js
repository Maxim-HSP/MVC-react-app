//引入react全家桶
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, hashHistory, IndexRoute } from "react-router";
//载入redux及相关依赖
import { createStore, combineReducers, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
let logger = createLogger();

//载入实例组件
import "../index.css";
import TodoList from "./todoList/todoList.js";

import Login from "./EMP/login.js";
import Reg from "./EMP/reg.js";
import Info from "./EMP/info/info.js"
import Student from "./EMP/info/student/student.js"
import Emp from "./EMP/info/emp/emp.js"
import GetEmp from "./EMP/info/emp/getEmp.js"
import AddEmp from "./EMP/info/emp/addEmp.js"

//实例导航
class ReduxNav extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <ul className = "infoUl">
                    <li><Link to="todoList">备忘录todoList</Link></li>
                    <li><Link to="login">EMP管理</Link><span>--(在注册(reg.js)和员工列表(getEmp.js)中使用了redux)</span></li>
                </ul>
                { this.props.children }
            </div>
        )
    }
}

//建立Redux Store,并加载logger与thunk
import reducer from "./Store/reducer.js"
let store = createStore(reducer,applyMiddleware(thunk,logger));


//经测试，Provider标签只能写在最外，无法嵌套在Router中，意味着一个应用只能有一个store
ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={ReduxNav} >
                    <Route path="todoList" component={TodoList}/>
                    
                    <Route path="login" component={Login} />
                    <Route path="reg" component={ Reg } />
                    <Route path="info" component={ Info }>
                        <Route path="emp" component={ Emp }>
				            <Route path="getEmp" component={ GetEmp} />
				            <Route path="addEmp" component={ AddEmp} />
			            </Route>
			            <Route path="student" component={ Student }>
                        
                        </Route>
                    </Route>
            </Route>
        </Router>
    </Provider>
),app)
