import React, { useState, useRef, useEffect } from 'react'
import TaskList from './TaskList';
import '../App.css';
import FilterOptions from './FilterOptions'

export default function Tasks() {

    const [taskState, setState] = useState(
        [
            {
                id : 100,
                desc : '',
                complete : false
            }
        ]
    )
    
    const taskRef = useRef();

    const addtaskClick = () => {
        console.log('Add task button clicked = ' + taskRef.current.value);
        setState([...taskState, { id: taskState.id+1, desc: taskRef.current.value, complete: false }]);
    }

    const keyPress = (e) => {
        if (e.code === "Enter" || e.keycode === 13 || e.code === "NumpadEnter") {
            console.log("Enter key was pressed. Run your function.");
            addtaskClick();
        }
    };

    useEffect(() => {
        console.log('useEffect = ' + JSON.stringify(taskState));
        // call the dispatch to update the store
    }, [taskState]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>Tasks</h1>
            </div>
            <br />
            <div className="row justify-content-center">
                <div className="input-group col-4">
                    <input className="form-control" type="text" ref={taskRef} onKeyDown={(e) => keyPress(e)} placeholder="New task..." aria-label="Type task" required />
                    <div className="input-group-append">
                        <button className="btn btn-success" onClick={addtaskClick}>Add Task</button>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4 form-inline">
                    <label className="my-1 mr-2">Show:</label>
                    <FilterOptions />
                </div>
            </div>
            <div className="row justify-content-center">
                <div id="taskOutput">
                    <TaskList tasks={taskState}/>
                </div>
            </div>
        </div>
    )
}
