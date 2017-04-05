import React from "react"
import {hashHistory,Link} from "react-router";
import axios from 'axios';

export default class Student extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div>
                <span>student模块</span>
            </div>
        )
    }
}