import React, { Component, createRef } from 'react'
import TaskList from './components/TaskList';
import './App.css';

export default class Tasks extends Component {
    constructor(props){

        super(props);
        console.log("called task contructor")

        this.state ={
            tasks : []
        };

        this.taskRef = createRef();

        this.taskClick = () => {
            this.setState({tasks: [...this.state.tasks, {id: 100, desc: this.taskRef.current.value, complete: false}]})
        }

        this.completeTask = (taskId) => {
            // complete task logic to update 'Complete' to 'true' for the given task id
            console.log('task checkbox checked for id: ' + taskId);
        }
    
        this.deleteTask = (taskId) => {
            // complete task logic to delete from task array for the given task id
            console.log('task delete button clicked for id: ' + taskId)
        }
  
    }

    componentDidMount = () => {
        
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate: " + JSON.stringify(this.state.tasks))
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.taskRef} placeholder="Task..." required/>
                <button onClick={this.taskClick}>Add Task</button>
                <TaskList tableName="Tasks" tasks={this.state.tasks} completeTask={this.completeTask} deleteTask={this.deleteTask}/>
            </div>
        )
    }
}
