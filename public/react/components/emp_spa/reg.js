import React from "react"
import {hashHistory} from "react-router";
import axios from 'axios';

export default class Reg extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isUse: false,
            regSuccess: false
        }
    };
    
    render(){
        return(
            <div>
                <h4>注册模块</h4>
                <div>账户：<input type="text" ref="username" placeholder="请输入账户检测是否被使用" onBlur={()=>{this.isUse()}}/>{this.state.isUse ? "该用户名已被使用" : ""}</div>
                <div>密码：<input type="text" ref="password" placeholder="请输入密码"/>{this.state.regSuccess?"注册成功":""}</div>
                <div>
                    <input type="button" value="登录" onClick={()=>this.loginFn()}/>
                    {" "}{" "}
                    <input type="button" value="注册" onClick={()=>this.regFn()} disabled={this.state.isUse}/>
                </div>
            </div>
        )
    };
    //测试push与path的配合使用，在地址栏中传入账户输入框的值
    loginFn(){
        hashHistory.push("/login/"+this.refs.username.value)
    };
    regFn(){
        axios.get('/users/reg', {
				params: {
                    username : this.refs.username.value,
                    password : this.refs.password.value
                }
			})
			.then(function(response) {
                //此处再将data传送给下一个then
				return response.data;
			})
			.then((data) => {
				if(data) {
					this.setState({regSuccess: data})
				}
			})
        //如果出错打印错误信息
			.catch(function(error) {
				console.log(error);
			});
    };
    isUse(){
        axios.get('/users/isUse', {
				params: {
                    username : this.refs.username.value
                }
			})
			.then(function(response) {
				return response.data;
			})
			.then((data) => {
				this.setState({isUse: data})
			})
        //如果出错打印错误信息
			.catch(function(error) {
				console.log(error);
			});
    }
}