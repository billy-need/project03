import React from 'react'
import CheckBox from './CheckBox'
import DeleteBtn from './DeleteBtn'
import '../App.css';

export default function TaskItem(props) {
    return (
        <li id="taskItem">
            <CheckBox />
            <span id="taskDesc" >{props.desc}</span>
            <DeleteBtn />
        </li>
    )
}
