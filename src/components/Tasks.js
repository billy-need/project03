import React, { useState, useRef, useEffect } from 'react'
import '../App.css';
import { uuid } from 'uuidv4';


export default function Tasks() {

    // task {
    //     id: uuid(),
    //     desc: string,
    //     complete: boolean
    // }

    //[value, setterFunction] = React.useState(initialValue);
    const [taskState, setState] = useState([])


    const taskRef = useRef();



    let todoID = uuid();

    const addtaskClick = () => {
        if (taskRef.current.value !== '') {
            //console.log('Add task button clicked = ' + taskRef.current.value);
            setState([...taskState, { id: todoID, desc: taskRef.current.value, complete: false }]);
            taskRef.current.value = '';
        }
        else {
            alert("Please enter a task")
        }
    }

    const Checkbox = (task, index) => (
        (task.complete) ?
            (<input type="checkbox" onClick={(e) => handleChecked(e, index)} value={task.desc} defaultChecked />) :
            (<input type="checkbox" onClick={(e) => handleChecked(e, index)} value={task.desc} />))

    const handleChecked = (e, index) => {
        const tempState = [...taskState];
        tempState[index] = { desc: taskState[index].desc, complete: !taskState[index].complete }
        setState(tempState);
    }

    const handleDelete = (taskId) => {
        console.log("DELETE taskId=" + taskId);
        let tempState = taskState.filter(task => task.id !== taskId);
        setState(tempState);
    }

    useEffect(() => {
        console.log('USEEFFECT() taskState = ' + JSON.stringify(taskState));

        // call the dispatch to update the store
        
    }, [taskState]);



    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addtaskClick();
        }
    }

    return (
        <div id="taskForm" className="container">
            <div>
                <input type="text" ref={taskRef} onKeyDown={handleKeyDown} placeholder="New task..." />
                <button onClick={addtaskClick}>Add Task</button>
            </div>
            <br />
            <div>
                {
                    taskState.map((task, index) => {
                        return <div key={index} id={task.id}>
                            {Checkbox(task, index)}
                            <span style={{ textDecoration: task.complete ? 'line-through' : 'none' }}><h5>{task.desc}</h5></span>
                            <button className="btn btn-danger" type="button" onClick={() => handleDelete(task.id)}>Delete</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
