import React, { useState, useRef, useEffect } from 'react'
import '../App.css';
import { uuid } from 'uuidv4';


export default function Tasks() {

    // local states
    const [taskState, setState] = useState([])
    const [filterState, setFilter] = useState([])

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
        tempState[index] = { id: taskState[index].id, desc: taskState[index].desc, complete: !taskState[index].complete }
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
        setFilter(taskState)
    }, [taskState]);

    useEffect(() => {
        console.log('USEEFFECT() filter state = ' + JSON.stringify(filterState));
    }, [filterState]);


    return (
        <div id="taskForm" className="container">
            <div className="row justify-content-center">
                <h1>Tasks</h1>
            </div>
            <br />
            <div>
                <input type="text" ref={taskRef} onKeyDown={handleKeyDown} placeholder="New task..." />
                <button onClick={addTask}>Add Task</button>
            </div>
            <br />
            <label className="my-1 mr-2">Show:</label>
            <select className="custom-select mr-sm-2" id="filter" value={filterState.complete} onChange={filterTasks}>
                <option value="all" >All</option>
                <option value="active" >Active</option>
                <option value="complete">Completed</option>
            </select>
            <div>
                {
                    filterState.map((task, index) => {
                        return <div key={index} id={task.id}>
                            {checkbox(task, index)}
                            <span style={{ textDecoration: task.complete ? 'line-through' : 'none' }}><h5>{task.desc}</h5></span>
                            <button className="btn btn-danger" type="button" onClick={() => handleDelete(task.id)}>Delete</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
