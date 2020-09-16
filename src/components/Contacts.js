import React, { useRef } from 'react'
import '../App.css';
import { uuid } from 'uuidv4';
import ContactNav from './ContactNav';
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/actions';

export default function Contacts() {

    // dispatch redux state
    const dispatch = useDispatch();

    // variables
    var fnameRef = useRef();
    var lnameRef = useRef();
    var emailRef = useRef();
    var commentRef = useRef();
    let contactId = uuid();

    // form submit button
    const contactClick = () => {
        if (fnameRef.current.value !== '' && lnameRef.current.value !== '' && emailRef.current.value !== '') {
            let contact = { id: contactId, fname: fnameRef.current.value, lname: lnameRef.current.value, email: emailRef.current.value, comment: commentRef.current.value };
            dispatch(addContact(contact));
            fnameRef.current.value = '';
            lnameRef.current.value = '';
            emailRef.current.value = '';
            commentRef.current.value = '';
        }
        else {
            alert('Please complete all required fields.')
        }
    }

    // handle enter key press
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            contactClick();
        }
    }

    return (
        // New Contact Form
        <div className="container">
            <ContactNav />
            <br />
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="fname"><span id="required">* </span>FIRST NAME</label>
                        <input className="form-control" id="fname" type="text" ref={fnameRef} placeholder="First Name" onKeyDown={handleKeyDown} required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lanme"><span id="required">* </span>LAST NAME</label>
                        <input className="form-control" id="fname" type="text" ref={lnameRef} placeholder="Last Name" onKeyDown={handleKeyDown} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="email"><span id="required">* </span>EMAIL</label>
                        <input className="form-control" id="email" type="email" ref={emailRef} placeholder="Email" onKeyDown={handleKeyDown} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="commentText">COMMENTS</label>
                        <textarea className="form-control" id="commentText" name="commentText" rows="3" ref={commentRef} placeholder="(Optional)" onKeyDown={handleKeyDown}></textarea>
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
