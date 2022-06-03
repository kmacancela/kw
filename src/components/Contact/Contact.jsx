import React, { useEffect, useState } from 'react';
import "./contact.css"
import { useNavigate } from 'react-router-dom'

const Contact = ({handleNav}) => {

    const [firstname, handleFirstname] = useState("");
    const [lastname, handleLastname] = useState("");
    const [company, handleCompanye] = useState("");
    const [production, handleProduction] = useState("");
    const [explain, handleExplain] = useState("");

    useEffect(() => {
        handleNav(2);
    });
    
    const navigate = useNavigate();
    const onClick = (to) => {
        navigate(to);
    }

    return (
        <div id="contact" className="page">
            <h1 className="title">We’re equally excited to possibly collaborate!</h1>
            <h3>Let us know you a little better! Please fill out the form below and we’ll reach back within 24 hours.</h3>
            <form className="contactForm">
                <div className="row">
                    <div className='col'>
                        <label>First Name</label>
                        <input type="text" name="firstname" />
                    </div>
                    <div className='col'>
                        <label>Last Name</label>
                        <input type="text" name="lastname" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Company Name (optional)</label>
                        <input type="text" name="company" />
                    </div>
                    <div className="col">
                        <select name="productionsize" id="productionsize">
                            <option value="0" selected disabled>Production size</option>
                            <option value="1">0-50</option>
                            <option value="2">50-100</option>
                            <option value="3">100-500</option>
                            <option value="4">500+</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <textarea name="explain" id="" cols="30" rows="10"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact