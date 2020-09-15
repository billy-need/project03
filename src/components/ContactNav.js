import React from 'react'
import { NavLink } from 'react-router-dom';

export default function ContactNav() {
    return (
        <div>
            <div className="row justify-content-center">
                <h1>Contacts</h1>
            </div>
            <br />
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" style={{ textDecoration: 'none' }} to="/components/contacts">New Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" style={{ textDecoration: 'none' }} to="/components/contactlist">Contact List</NavLink>
                </li>
            </ul>
            <hr />
        </div>
    )
}
