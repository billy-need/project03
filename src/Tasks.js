import React from 'react'
import './App.css';

export default function Tasks() {
    return (
        <div>
            <h1>Tasks</h1>
            <form>
                <input type="text" id="taskDesc" placeholder="Task..." />
                <button type="button" id="taskBtn">Add Task</button>
            </form>
            <label>Show:</label>
            <ul id="filter">
                <li><button type="button" id="taskAll">All</button></li>
                <li><button type="button" id="taskIn">Incomplete</button></li>
                <li><button type="button" id="taskCom">Complete</button></li>
            </ul>
            <table>
                <tbody>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>Task Desc</td>
                        <td><button type="button" id="editBtn">Edit</button></td>
                        <td><button type="button" id="deleteBtn">X</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
