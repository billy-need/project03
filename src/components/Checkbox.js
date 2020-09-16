import React from 'react'
import '../App.css';
import { useDispatch } from 'react-redux'
import { completeTask } from '../redux/actions';

export default function Checkbox(props) {

        const dispatch = useDispatch();

        // checkbox element condidtional
        const checkbox = (task, taskId) => (
            (task.complete) ?
                (<input type="checkbox" onClick={() => handleChecked(taskId)} value={task.desc} defaultChecked />) :
                (<input type="checkbox" onClick={() => handleChecked(taskId)} value={task.desc} />)
        )
    
        // mark checked task as completed
        const handleChecked = (taskId) => {
            dispatch(completeTask(taskId));
        }

    return (
        <div className="input-group-prepend">
            <div className="input-group-text">
                {checkbox(props.task, props.id)}
            </div>
        </div>
    )
}
