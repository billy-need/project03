import React from 'react'
import '../App.css';

export default function DeleteBtn() {

    function deleteClicked(event){

    };

    return (
        <div>
            <button className="btn btn-danger" type = "button" onClick = {deleteClicked}>Delete</button>
        </div>
    )
}
