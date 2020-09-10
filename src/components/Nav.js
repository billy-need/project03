import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <h2>Daily Planner</h2>
            <ul className="nav justify-content-center">
                <Link style={{textDecoration: 'none'}} to="/"><li className="nav-item nav-link active">Home</li></Link>
                <Link style={{textDecoration: 'none'}} to="/components/tasks"><li className="nav-item nav-link">Tasks</li></Link>
                <Link style={{textDecoration: 'none'}} to="/components/contacts"><li className="nav-item nav-link">Contacts</li></Link>
            </ul>
        </nav>
    )
}
