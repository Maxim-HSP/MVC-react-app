import React from "react"

export default class AddTodo extends React.Component{
    constructor(props){
        super(props);
    };
    
    render(){
        return (
            <div>
                <input ref="inputMemo" type="text"/>
                <input type="button" value="add" onClick={()=>{
                        this.props.addTodo(this.refs.inputMemo.value)
                        this.refs.inputMemo.value="";
                    }}/>
            </div>
        )
    }
}