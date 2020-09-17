import React from 'react'
import '../App.css';
import { useDispatch } from 'react-redux'
import { completeTask } from '../redux/actions';

export default function Checkbox(props) {

        const dispatch = useDispatch();

        // checkbox element condidtional
        const checkbox = (complete, taskId) => (
            (complete) ?
                (<input type="checkbox" onClick={() => handleChecked(taskId)} defaultChecked />) :
                (<input type="checkbox" onClick={() => handleChecked(taskId)} />)
        )
    
        // mark checked task as completed
        const handleChecked = (taskId) => {
            dispatch(completeTask(taskId));
        }

    return (
        <div className="input-group-prepend">
            <div className="input-group-text">
                {checkbox(props.complete, props.id)}
            </div>
        </div>
    )
}
