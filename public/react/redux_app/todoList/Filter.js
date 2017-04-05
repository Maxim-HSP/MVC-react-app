import React from "react"

export default class AddTodo extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
				<span>SHOW: </span>
				{" "}
				{ this.showType(this.props.showType, "all") }
				{" "}
				{ this.showType(this.props.showType, "completed") }
				{" "}
				{ this.showType(this.props.showType, "active") }
			</div>
        )
    };
    showType(showType, name) {
        //如果相同着返回一个span标签（意味着当前选中的显示类型）
		if (showType === name) {
			return <span>{ name }</span>
		}
        //如果不同返回一个a标签并绑定事件调用setShowType方法
		return (<a href = "#"  onClick = {
			(e) => {
				e.preventDefault();
				this.props.setShowType(name)
                }
            }
		>{name}</a>)
	}
}