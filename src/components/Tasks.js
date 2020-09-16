import React, { useState, useRef, useEffect } from 'react'
import '../App.css';
import { uuid } from 'uuidv4';
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask, completeTask, setFilter } from '../redux/actions';
import DeleteBtn from './DeleteBtn';


export default function Tasks() {

    // store selectors and dispatch
    const tasks = useSelector(state => state.tasks);
    const taskFilter = useSelector(state => state.taskFilter);
    const dispatch = useDispatch();

    // local states
    const [taskState, setState] = useState([]);
    const [filterState, setFilter] = useState([]);

    // use effects
    useEffect(() => {
        console.log('USEEFFECT() task state = ' + JSON.stringify(taskState));
        setFilter(taskState); //this could be an issue with filter
    }, [taskState]);

    useEffect(() => {
        console.log('USEEFFECT() filter state = ' + JSON.stringify(filterState));
    }, [filterState]);

    // variables
    const taskRef = useRef();
    

    // filter task list
    const filterTasks = (e) => {
        switch (e.target.value) {
            case 'active':
                return setFilter(taskState.filter(task => !task.complete));
            case 'complete':
                return setFilter(taskState.filter(task => task.complete));
            default:
                return setFilter(taskState);
        }
    }

    // handle add new task
    const taskClick = () => {
        let todoID = uuid();
        
        if (taskRef.current.value !== '') {
            let task = { id: todoID, desc: taskRef.current.value, complete: false }
            dispatch(addTask(task));
            setState([...taskState, task])
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

    // checkbox element condidtional
    const checkbox = (task, taskId) => (
        (task.complete) ?
            (<input type="checkbox" onClick={() => handleChecked(taskId)} value={task.desc} defaultChecked />) :
            (<input type="checkbox" onClick={() => handleChecked(taskId)} value={task.desc} />)
    )

    // mark checked task as completed
    const handleChecked = (taskId) => {
        const tempState = [...taskState];
        const index = taskState.findIndex(task => task.id === taskId);
        tempState[index] = { id: taskState[index].id, desc: taskState[index].desc, complete: !taskState[index].complete };
        setState(tempState);
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
                    <select className="custom-select mr-sm-2 form-control" id="filter" value={filterState.complete} onChange={filterTasks}>
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
                            tasks.map((task, index) => {
                                return <div className="input-group mb-3" key={index} id={task.id}>
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            {checkbox(task, task.id)}
                                        </div>
                                    </div>
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
