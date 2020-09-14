import React, { useState, useRef, useEffect } from 'react'
import '../App.css';
import { uuid } from 'uuidv4';


export default function Tasks() {

    // local states
    const [taskState, setState] = useState([]);
    const [filterState, setFilter] = useState([]);

    // variables
    const taskRef = useRef();
    let todoID = uuid();

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
    const addTask = () => {
        if (taskRef.current.value !== '') {
            setState([...taskState, { id: todoID, desc: taskRef.current.value, complete: false }]);
            taskRef.current.value = '';
        }
        else {
            alert("Please enter a task")
        }
    }

    // handle enter key press
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }

    // checkbox element condidtional
    const checkbox = (task, index) => (
        (task.complete) ?
            (<input type="checkbox" onClick={(e) => handleChecked(e, index)} value={task.desc} defaultChecked />) :
            (<input type="checkbox" onClick={(e) => handleChecked(e, index)} value={task.desc} />)
    )

    // mark checked task as completed
    const handleChecked = (e, index) => {
        const tempState = [...taskState];
        tempState[index] = { id: taskState[index].id, desc: taskState[index].desc, complete: !taskState[index].complete };
        setState(tempState);
    }

    // delete task from task state
    const handleDelete = (taskId) => {
        console.log("DELETE taskId=" + taskId);
        let tempState = taskState.filter(task => task.id !== taskId);
        setState(tempState);
    }

    // state hooks
    useEffect(() => {
        console.log('USEEFFECT() task state = ' + JSON.stringify(taskState));
        setFilter(taskState);
    }, [taskState]);

    useEffect(() => {
        console.log('USEEFFECT() filter state = ' + JSON.stringify(filterState));
    }, [filterState]);


    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>Tasks</h1>
            </div>
            <br />
            <div className="form-row">
                <div className="form-group col-md-8">
                    <div className="input-group">
                        <input id="taskInput" className="form-control" type="text" placeholder="New task..." aria-label="Type task" ref={taskRef} onKeyDown={handleKeyDown} />
                        <div className="input-group-append">
                            <button className="btn btn-success" onClick={addTask}>Add Task</button>
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
            <hr/>
            <div id="content-wrap">
                <div id="taskOutput" className="form-row">
                    <div className="form-group col-md-12">
                        {
                            filterState.map((task, index) => {
                                return <div className="input-group mb-3" key={index} id={task.id}>
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            {checkbox(task, index)}
                                        </div>
                                    </div>

                                    <span className="form-control" style={{ textDecoration: task.complete ? 'line-through' : 'none' }}>{task.desc}</span>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-danger" type="button" onClick={() => handleDelete(task.id)}>Delete</button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
