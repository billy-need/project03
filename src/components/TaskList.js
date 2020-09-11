import React, { useState, useRef, useEffect } from 'react'
import '../App.css';
import TaskItem from './TaskItem'

export default function TaskList(props) {

    var taskList = props.tasks.map((item, index) => {
        if (item.complete === false) {
            return <TaskItem key={index} desc={item.desc}/>
        }
        else if (item.complete === true) {
            return <TaskItem key={index} desc={item.desc}/>
        }
        else {
            return <TaskItem key={index} desc={item.desc}/>
        }
    })

    if (taskList.length > 0) {
        return (
            <ul>
                {taskList}
            </ul>
        )          
    }
    else {
        return (
            <h4>You have no tasks.</h4>
        )          
    }
}
