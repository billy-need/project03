import React from 'react'
import CheckBox from './CheckBox'
import DeleteBtn from './DeleteBtn'
import '../App.css';

export default function TaskItem(props) {
    return (
        <li>
            <CheckBox />
            <span id="taskItem" >{props.desc}</span>
            <DeleteBtn />
        </li>
    )
}
