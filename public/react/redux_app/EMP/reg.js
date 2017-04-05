import React from "react"
import {hashHistory} from "react-router";
import { connect } from "react-redux";

//获取action
import {
    asynNameisUse,
    asynReg
} from "../Store/actions.js"

class Reg extends React.Component{
    constructor(props){
        super(props)
    };
    
    render(){
        //取出store的state
        let {
            dispatch,
            usernameIsUse,
            regIsSuccess
        } = this.props
        
        return(
            <div className="wrap">
                <h4>注册模块</h4>
                <div>账户：<input type="text" ref="username" placeholder="请输入账户检测是否被使用" onBlur={()=>{dispatch(asynNameisUse(this.refs.username.value))}}/>{usernameIsUse ? "该用户名已被使用" : ""}</div>
                <div>密码：<input type="text" ref="password" placeholder="请输入密码"/>{regIsSuccess?"注册成功":""}</div>
                <div>
                    <input type="button" value="登录" onClick={()=>this.loginFn()}/>
                    {" "}{" "}
                    <input type="button" value="注册" onClick={()=>{dispatch(asynReg(this.refs.username.value,this.refs.password.value))}} disabled={usernameIsUse}/>
                </div>
            </div>
        )
    };
    loginFn(){
        hashHistory.push("/login/");
    };
}

//connect
function select(state){
    return state
};

export default connect(select)(Reg);