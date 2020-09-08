import React from 'react'
import './App.css';

export default function Contacts() {
    return (
        <div>
            <h1>Contact</h1>
            <form>
                <formfield>
                    <input id="fname" type="text" placeholder="First Name" />
                </formfield>
                <formfield>
                    <input id="lname" type="text" placeholder="Last Name" />
                </formfield>
                <formfield>
                    <input id="email" type="email" placeholder="Email" />
                </formfield>
                <formfield>
                    <input id="comment" type="text" placeholder="Comments (optional)" />
                </formfield>
                <button id="submitBtn" type="button" onClick="">SAVE</button>
            </form>
        </div>
    )
}
