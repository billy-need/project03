import React from 'react';
import '../App.css';
import ContactNav from './ContactNav';
import { useSelector } from 'react-redux'

export default function ContactList() {

    // assign contacts to contactState
    const contactState = useSelector(state => state.contacts);

    function contactTable(contacts) {
        if (contacts.length === 0) {
            return (
                <div className="row justify-content-center">
                    <h5>You have no contacts yet.</h5> 
                </div>
            )
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
                        contacts.map((contact, index) => {
                            return (
                                <tr key={index} id={contact.id}>
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

    return (
        <div className="container">
            <ContactNav />
            <br />
            {contactTable(contactState)}
        </div>
    )
}
