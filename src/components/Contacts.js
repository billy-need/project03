import React from 'react'
import '../App.css';

export default function Contacts() {
    const saveContact = () => {
        console.log('Contact save button clicked');
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>New Contact</h1>
            </div>
            <br />
            <form>
                <div className="form-group row justify-content-center">
                    <div className="col-6">
                        <label htmlFor="fname">FIRST NAME</label>
                        <input className="form-control" id="fname" type="text" placeholder="First Name" required />
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <div className="col-6">
                        <label htmlFor="lanme">LAST NAME</label>
                        <input className="form-control" id="fname" type="text" placeholder="Last Name" required />
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <div className="col-6">
                        <label htmlFor="email">EMAIL</label>
                        <input className="form-control" id="email" type="email" placeholder="Email" required />
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <div className="col-6">
                        <label htmlFor="commentText">COMMENTS</label>
                        <textarea className="form-control" id="commentText" name="commentText" rows="3" placeholder="(Optional)"></textarea>
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                        <button className="btn btn-success" id="submitBtn" type="button" onClick={saveContact}>SAVE</button>
                </div>
            </form>
        </div>
    )
}
