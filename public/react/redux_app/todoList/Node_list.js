import React from "react"

export default class AddTodo extends React.Component{
    constructor(props){
        super(props);
    };
    
    render(){
            //注意此处listData是址传递（才能在主容器为Node_list定义的方法中通过栈地址直接更新堆数据），item是每个条目的对象
        return(
            <ul>
                {
                    this.props.listData.map((item,index)=>{
                        return <li key = {"No."+index} onClick = {()=> this.props.switchMemo(item)} className={item.done ? "done" : ""}>{item.content}</li>
                    })
                }
            </ul>
        );
    }
}