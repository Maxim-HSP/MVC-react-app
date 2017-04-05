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
		if (showType === name) {
			return <span>{ name }</span>
		}
		return (<a onClick = {
			(e) => {
				e.preventDefault();
				this.props.setShowType(name)
                }
            }
		href = "#" >{name}</a>)
	}
}