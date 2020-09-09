import React, { Component, createRef } from 'react'
import TaskList from './TaskList';
import uuid from 'react-uuid'

export default class Tasks extends Component {
    constructor(props){

        super(props);
        console.log("called task contructor")

        this.state ={
            tasks : []
        };

        this.taskRef = createRef();

        this.taskClick = () => {
            this.setState({tasks: [...this.state.tasks, {id: uuid(), desc: this.taskRef.current.value, complete: false}]})
        }

  
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate called")

        console.log("componentDidUpdate: " + JSON.stringify(this.state.tasks))
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.taskRef} placeholder="Task..." required/>
                <button onClick={this.taskClick}>Add Task</button>
                <TaskList tableName="Tasks" tasks={this.state.tasks} />
            </div>
        )
    }
}
