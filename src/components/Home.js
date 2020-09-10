import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Welcome to Daily Planner!</h1>
                <p className="lead">Click on 'Tasks' or 'Contacts' to start planning your day.</p>
                <hr className="my-4" />
                <Link className="btn btn-primary btn-lg linkbtn" role="button" to="/components/tasks">Tasks</Link>
                <Link className="btn btn-primary btn-lg linkbtn" role="button" to="/components/contacts">Contacts</Link>
            </div>
        </div>
    )
}
