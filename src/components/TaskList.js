import '../App.css';
import TaskItem from './TaskItem'
import React, { Component } from 'react'

export default class TaskList extends Component {
    render() {

        var taskList = this.props.tasks.map((item, index) => {
            if (item.complete === false) {
                return <TaskItem key={item.id+1} desc={item.desc}/>
            }
            else if (item.complete === true) {
                return <TaskItem key={item.id+1} desc={item.desc}/>
            }
            else {
                return <TaskItem key={item.id+1} desc={item.desc}/>
            }
        })

        return (
            <ul>
                {taskList}
            </ul>
        )
    }
}
