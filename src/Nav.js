import React from 'react'
import './App.css';
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <h3>Site Title Logo</h3>
            <ul className="nav-links">
                <Link style={{textDecoration: 'none'}} to="/"><li>Home</li></Link>
                <Link style={{textDecoration: 'none'}} to="/todos"><li>ToDos</li></Link>
                <Link style={{textDecoration: 'none'}} to="/contacts"><li>Contacts</li></Link>
            </ul>
        </nav>
    )
}
