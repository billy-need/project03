import React, { useRef, useState } from 'react'
import '../App.css';
import { uuid } from 'uuidv4';
import { NavLink } from 'react-router-dom';

export default function Contacts() {

    const [contactState, setState] = useState([])

    var fnameRef = useRef();
    var lnameRef = useRef();
    var emailRef = useRef();
    var commentRef = useRef();
    let contactId = uuid();

    function contactClick() {
        if (fnameRef.current.value !== '' && lnameRef.current.value !== '' && emailRef.current.value !== '') {
            setState([...contactState, {id: contactId, fname: fnameRef.current.value, lname: lnameRef.current.value, email: emailRef.current.value, comment: commentRef.current.value }]);
            console.log("First Name: " + fnameRef.current.value + "\nLast Name:" + lnameRef.current.value + "\nEmail:" + emailRef.current.value + "\nComment:" + commentRef.current.value)
            fnameRef.current.value = '';
            lnameRef.current.value = '';
            emailRef.current.value = '';
            commentRef.current.value = '';
        }
        else {
            alert('Please complete all required fields.')
        }
    }

    return (
        // New Contact Form
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
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="fname"><span id="required">* </span>FIRST NAME</label>
                        <input className="form-control" id="fname" type="text" ref={fnameRef} placeholder="First Name" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lanme"><span id="required">* </span>LAST NAME</label>
                        <input className="form-control" id="fname" type="text" ref={lnameRef} placeholder="Last Name" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="email"><span id="required">* </span>EMAIL</label>
                        <input className="form-control" id="email" type="email" ref={emailRef} placeholder="Email" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="commentText">COMMENTS</label>
                        <textarea className="form-control" id="commentText" name="commentText" rows="3" ref={commentRef} placeholder="(Optional)"></textarea>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                    <button className="btn btn-block btn-success" id="submitBtn" type="button" onClick={contactClick}>SAVE</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
