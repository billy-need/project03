import React, { useRef } from 'react'
import '../App.css';
import { uuid } from 'uuidv4';
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../redux/actions';
import DeleteBtn from './DeleteBtn';
import Checkbox from './Checkbox';
import FilterOptions from './FilterOptions';


export default function Tasks() {

    // store selectors and dispatch
    const taskState = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    // variables
    const taskRef = useRef();

    // handle add new task
    const taskClick = () => {
        let todoID = uuid();
        if (taskRef.current.value !== '') {
            let task = { id: todoID, desc: taskRef.current.value, complete: false }
            dispatch(addTask(task));
            taskRef.current.value = '';
        }
        else {
            alert("Please enter a task")
        }
    }

    // handle enter key press
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            taskClick();
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>Tasks</h1>
            </div>
            <br />
            <div className="form-row">
                <div className="form-group col-md-8">
                    <div className="input-group">
                        <input id="taskInput" className="form-control" type="text" placeholder="New task..." aria-label="Type task" ref={taskRef} onKeyDown={handleKeyDown} required />
                        <div className="input-group-append">
                            <button className="btn btn-success" onClick={taskClick}>Add Task</button>
                        </div>
                    </div>
                </div>
                <FilterOptions />
            </div>
            <hr />
            <div id="content-wrap">
                <div id="taskOutput" className="form-row">
                    <div className="form-group col-md-12">
                        {
                            taskState.map((task, index) => {
                                return <div className="input-group mb-3" key={index} id={task.id}>
                                    <Checkbox task={task} id={task.id} />
                                    <span className="form-control" style={{ textDecoration: task.complete ? 'line-through' : 'none' }}>{task.desc}</span>
                                    <DeleteBtn id={task.id} />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
