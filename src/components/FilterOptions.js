import React, { Component } from 'react'
import '../App.css';

export default class FilterOptions extends Component {

    constructor(props) {
        super(props)
        this.state = { value: 'all' }
        this.filterChange = this.filterChange.bind(this)
    }
    filterChange(event) {
        this.setState({ value: event.target.value })
        
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate: " + JSON.stringify(this.state.value))
    }

    render() {
        return (
            <select className="custom-select mr-sm-2" id="filter" value={this.state.value} onChange={this.filterChange}>
                <option value="all">All</option>
                <option value="active" >Active</option>
                <option value="completed" >Completed</option>
            </select>
        )
    }
}
