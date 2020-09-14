import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

export default function ContactList() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>Contacts</h1>
            </div>
            <br />
            <ul class="nav nav-pills nav-fill">
                <li class="nav-item">
                    <NavLink className="nav-link" activeClassName="active" style={{ textDecoration: 'none' }} to="/components/contacts">New Contact</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" activeClassName="active" style={{ textDecoration: 'none' }} to="/components/contactlist">Contact List</NavLink>
                </li>
            </ul>
            <br />
        </div>
    )
}
