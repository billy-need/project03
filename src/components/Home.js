import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Welcome to Daily Planner!</h1>
                <p className="lead">Click on 'Tasks' or 'Contacts' to start planning your day.</p>
                <hr className="my-4" />
                <NavLink className="btn btn-outline-secondary btn-lg linkbtn" role="button" to="/components/tasks">Tasks</NavLink>
                <NavLink className="btn btn-outline-secondary btn-lg linkbtn" role="button" to="/components/contacts">Contacts</NavLink>
            </div>
        </div>
    )
}
