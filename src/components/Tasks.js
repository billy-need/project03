import React, { useRef } from 'react'
import '../App.css';
import { uuid } from 'uuidv4';
import { useSelector, useDispatch } from 'react-redux'
import { addTask, setFilter } from '../redux/actions';
import DeleteBtn from './DeleteBtn';
import Checkbox from './Checkbox';


export default function Tasks() {

    // store selectors and dispatch
    const taskState = useSelector(state => state.tasks);
    const filterState = useSelector(state => state.taskFilter);
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

    // set filter state
    const setFilterOptions = (e) => {
        if (e.target.value === 'all') {
            dispatch(setFilter('all'));
        }
        else if (e.target.value === 'active') {
            dispatch(setFilter('active'));
        }
        else if (e.target.value === 'complete') {
            dispatch(setFilter('complete'));
        }
    }

    const getTasks = (tasks, filter) => {
        switch (filter.taskFilter) {
            case 'all':
                return tasks;
            case 'active':
                return tasks.filter(task => !task.complete);
            case 'complete':
                return tasks.filter(task => task.complete);
            default:
                return;
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
                <div className="form-group col-md-4">
                    <select className="custom-select mr-sm-2 form-control" id="filter" value={filterState.taskFilter} onChange={setFilterOptions}>
                        <option value="all" >All</option>
                        <option value="active" >Active</option>
                        <option value="complete">Completed</option>
                    </select>
                </div>
            </div>
            <hr />
            <div id="content-wrap">
                <div id="taskOutput" className="form-row">
                    <div className="form-group col-md-12">
                        {
                          getTasks(taskState, filterState).map((task, index) => {
                                return <div className="input-group mb-3" key={index} id={task.id}>
                                    <Checkbox complete={task.complete} id={task.id} />
                                    <span className={task.complete ? "form-control completed" : "form-control" }>{task.desc}</span>
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
