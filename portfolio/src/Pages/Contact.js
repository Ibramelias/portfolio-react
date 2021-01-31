import React from "react";
// import { Route} from "react-router-dom";
import "../styles/Contact.css"

function Contact() {
    return (
        <div className="container contact-form">
            <form>
                <p className="finalmsg">Please do not hesitate to send me a message here, or via</p>
                <div className="form-group">
                    <label for="fullname">Full Name</label>
                    <input type="text" className="form-control" id="fullname"></input>
                    <div className="form-group">
                        <label for="textarea">Massages </label>
                        <textarea className="form-control" id="textarea"></textarea>
                    </div>
                    <button type="submit" id="submitBtn" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}


export default Contact;