import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

export default function ContactList(props) {

    return (
        <div className="container">
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
            <br />
            {
                (props) => {
                    if (props.length === 0) {
                        return <h5>You have no contacts yet</h5>
                    }
                    else {
                        return (
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Comment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.contactState.map((contact, index) => {
                                            return (
                                                <tr scope="row" key={index} id={contact.id}>
                                                    <td>{contact.fname}</td>
                                                    <td>{contact.lname}</td>
                                                    <td>{contact.email}</td>
                                                    <td>{contact.comment}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        )
                    }
                }

            }
        </div>
    )
}
