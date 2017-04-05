import React from "react"
import {
	hashHistory
} from "react-router";
//使用axios取代ajax（不用引入jquery了,axios较轻量化，基于promise实现）
import axios from 'axios';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
			username: "maxim",
			password: "123456"
		}
    };
    render(){
        return(
            <div className="wrap">
                <h4>登录模块</h4>
                <span>（注意输入数据库已有的用户名及密码，或者点击注册进行注册）</span>
                <div>账户：<input type="text" ref="username" defaultValue={this.state.username}/></div>
                <div>密码：<input type="text" ref="password" defaultValue={this.state.password}/></div>
                <div>
                    <input type="button" value="登录" onClick={()=>this.loginFn()}/>
                    {" "}{" "}
                    <input type="button" value="注册" onClick={()=>this.regFn()}/>
                </div>
            </div>
        )
    }
    loginFn(){
        axios.get('/users/login', {
				params: {
                    username :this.refs.username.value,
                    password :this.refs.password.value
                }
			})
			.then(function(response) {
				return response.data;
			})
			.then((data) => {
                console.log(data)
				if(data) {
					hashHistory.push("/info")
				}
			})
			.catch(function(error) {
				console.log(error);
			});
    };
    regFn(){
        hashHistory.push("/reg")
    }
}

