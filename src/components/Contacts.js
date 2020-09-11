import React, { useRef, useState } from 'react'
import '../App.css';

export default function Contacts() {

    const [contactState, setState] = useState([])

    var fnameRef = useRef();
    var lnameRef = useRef();
    var emailRef = useRef();
    var commentRef = useRef();

    function contactClick() {
        
        setState([...contactState, {fname: fnameRef.current.value, lname: lnameRef.current.value, email: emailRef.current.value, comment: commentRef.current.value }]);
        console.log("First Name: " + fnameRef.current.value + "\nLast Name:" + lnameRef.current.value + "\nEmail:" + emailRef.current.value + "\nComment:" + commentRef.current.value)
    }

    return (
        // New Contact Form
        <div className="container">
            <div className="row justify-content-center">
                <h1>New Contact</h1>
            </div>
            <br />
            <form>
                <div className="form-group row justify-content-center">
                    <div className="col-6">
                        <label htmlFor="fname">FIRST NAME</label>
                        <input className="form-control" id="fname" type="text" ref={fnameRef} placeholder="First Name" required />
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <div className="col-6">
                        <label htmlFor="lanme">LAST NAME</label>
                        <input className="form-control" id="fname" type="text" ref={lnameRef} placeholder="Last Name" required />
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <div className="col-6">
                        <label htmlFor="email">EMAIL</label>
                        <input className="form-control" id="email" type="email" ref={emailRef} placeholder="Email" required />
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <div className="col-6">
                        <label htmlFor="commentText">COMMENTS</label>
                        <textarea className="form-control" id="commentText" name="commentText" rows="3" ref={commentRef} placeholder="(Optional)"></textarea>
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <button className="btn btn-success" id="submitBtn" type="button" onClick={contactClick}>SAVE</button>
                </div>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contactState.map((element, index) => {
                            return (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{element.id}</td>
                                    <td>{element.fname}</td>
                                    <td>{element.lname}</td>
                                    <td>{element.email}</td>
                                    <td>{element.comment}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
