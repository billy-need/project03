import React, { Component } from 'react'
import '../App.css';

export default class CheckBox extends Component {

    constructor(props){
        super(props)
        this.state = {checked: false}
        this.handleChecked = this.handleChecked.bind(this)
    }

    handleChecked(event){
        this.setState({checked: event.target.checked})
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate: " + JSON.stringify(this.state.checked))
    }

    render(){
        return (
            <input type = "checkbox" checked = {this.state.checked} onChange = {this.handleChecked}/>
        )
    }
}
