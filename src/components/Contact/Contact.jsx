import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import "./contact.css"
import { init, sendForm } from 'emailjs-com';
init('user_oJthLvb60cvjmkJAL');

const Styles = styled.div`
 background: lavender;
 padding: 20px;
 flex-direction: column;
 align-items: center;
 justify-content: initial;

 form {
   background: white;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 30vw;
   width: 30vw;
   padding: 30px 50px;
   border-radius: 8px;
 }

 input, select, textarea {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
   background-color: #FBFBFB;
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin-bottom: 5px;
   margin-top: 2%;
 }

 span {
     color: red;
 }

 .status-message {
  opacity: 0;
}
.success {
  opacity: 1;
  color: green;
}
.failure {
  opacity: 1;
  color: red;
}
`;

const Contact = ({handleNav}) => { 
    const [statusMessage, setStatusMessage] = useState("");
    const [contactNumber, setContactNumber] = useState("000000");
  
    const generateContactNumber = () => {
        const numStr = "000000" + (Math.random() * 1000000 | 0);
        setContactNumber(numStr.substring(numStr.length - 6));
    }
    
    const navigate = useNavigate();
    const onClick = (to) => {
        navigate(to);
    }

    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        const form = document.querySelector('#contactForm');
        generateContactNumber();
        sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, '#contactForm', process.env.REACT_APP_PUBLIC_KEY)
          .then(function(response) {
            form.reset();
            setStatusMessage("Message sent!");
            statusMessage.className = "status-message success";
            setTimeout(()=> {
                statusMessage.className = 'status-message'
            }, 5000)
            console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
            setStatusMessage("Failed to send message! Please try again later.");
            statusMessage.className = "status-message failure";
            setTimeout(()=> {
                statusMessage.className = 'status-message'
            }, 5000)
            console.log('FAILED...', error);
          });
      }

    return (
        <Styles className="page">
            <h1 className="title">We’re equally excited to possibly collaborate!</h1>
            <h3>Let us know you a little better! Please fill out the form below and we’ll reach back within 24 hours.</h3>
            {/* <div className="contactForm"> */}
            <p className='status-message'>{statusMessage}</p>
                <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                    <input type='hidden' name='contact_number' value={contactNumber} />
                    <label>First Name</label>
                    <input {...register("firstName", { required: true})} />
                    <span>{errors.firstName && "First name is required"}</span>

                    <label>Last Name</label>
                    <input {...register("lastName", { required: true})} />
                    {errors.lastName && "Last name is required"}

                    <label>Company Name (optional)</label>
                    <input {...register("company")} />

                    <label>Production size</label>
                    <select {...register("productionSize", { required: true})}>
                        <option value="0-50" selected>0-50</option>
                        <option value="50-100">50-100</option>
                        <option value="100-500">100-500</option>
                        <option value="500+">500+</option>
                    </select>

                    <label>Extra comments</label>
                    <textarea {...register("extra")} />

                    <button type="submit">Submit</button>
                </form>
            {/* </div> */}
        </Styles>
    )
}

export default Contact