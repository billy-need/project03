import React, { Component } from 'react'
import '../App.css';

export default class DeleteBtn extends Component {
    constructor(props){
        super(props)
        this.state = {checked: false}
        this.deleteClicked = this.deleteClicked.bind(this)
    }

    deleteClicked(event){
        this.setState({}) // 
    }

    render(){
        return (
            <button className="btn btn-danger" type = "button" onClick = {this.deleteClicked}>Delete</button>
        )
    }
}