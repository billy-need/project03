import React from 'react'

export default function TaskList(props) {
    return (
        <div>
            <table width="100%">
                <thead>
                    <tr><th colSpan="3">{props.tableName}</th></tr>
                    <tr><th>Index</th><th>Checkbox</th><th>Description</th><th>Complete</th><th>Delete Button</th></tr>
                </thead>
                <tbody>
                    {
                        props.tasks.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td><input type="checkbox" /></td>
                                    <td>{element.desc}</td>
                                    <td>{(element.complete)? "true" : "false"}</td>
                                    <td><button type="button" id="deleteBtn">Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
