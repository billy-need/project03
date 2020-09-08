import React from 'react'
import './App.css';

export default function Contacts() {
    const saveContact = () => {
        console.log('Contact save button clicked');
    }

    return (
        <div>
            <h1>Contact</h1>
            <form>
                <input id="fname" type="text" placeholder="First Name" />
                <input id="lname" type="text" placeholder="Last Name" />
                <input id="email" type="email" placeholder="Email" />
                <input id="comment" type="text" placeholder="Comments (optional)" />
                <button id="submitBtn" type="button" onClick={saveContact}>SAVE</button>
            </form>
        </div>
    )
}
