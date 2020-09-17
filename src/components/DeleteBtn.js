import React from 'react'
import '../App.css';
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/actions';

export default function DeleteBtn(props) {

    const dispatch = useDispatch();

    const handleDelete = (taskId) => {
        dispatch(deleteTask(taskId));
    }

    return (
        <div className="input-group-append">
            <button className="btn btn-outline-danger" type="button" onClick={() => handleDelete(props.id)}>Delete</button>
        </div>
    )
}
