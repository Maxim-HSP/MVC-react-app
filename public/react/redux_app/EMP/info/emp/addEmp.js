import React from "react"
import {hashHistory,Link} from "react-router";
import axios from 'axios';

export default class AddEmp extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div>
                <span>addEmp模块</span>
            </div>
        )
    }
}