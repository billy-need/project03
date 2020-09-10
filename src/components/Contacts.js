import React, {useRef, useState} from 'react'
import '../App.css';

export default function Contacts() {

    const [contactState, setState] = useState(
        [
            {
                id : 0,
                fname : '',
                lname : '',
                email : '',
                comment : ''
            }
        ]
    )

    var fnameRef = useRef();
    var lnameRef = useRef();
    var emailRef = useRef();
    var commentRef = useRef();

    function contactClick() {
        console.log(contactState.id+1 + ", " + fnameRef.current.value + ", " + lnameRef.current.value + ", " + emailRef.current.value + ", " + commentRef.current.value)
        setState([...contactState, { id: contactState.id+1, fname: fnameRef.current.value, lname: lnameRef.current.value, email: emailRef.current.value, comment: commentRef.current.value }]);
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

        </div>
    )
}
