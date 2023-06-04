import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import { init, sendForm } from 'emailjs-com';

init('user_' + process.env.REACT_APP_PUBLIC_KEY);

const Contact = () => { 
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
        sendForm(process.env.REACT_APP_SERVICE_ID, 
                 process.env.REACT_APP_TEMPLATE_ID, 
                 '#contactForm', 
                 process.env.REACT_APP_PUBLIC_KEY)
          .then(function(response) {
            form.reset();
            setStatusMessage("Message sent!");
            // statusMessage.className = "status-message success";
            setTimeout(()=> {
                // statusMessage.className = 'status-message'
            }, 5000)
            console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
            setStatusMessage("Failed to send message! Please try again later.");
            // statusMessage.className = "status-message failure";
            setTimeout(()=> {
                // statusMessage.className = 'status-message'
            }, 5000)
            console.log('FAILED...', error);
          });
      }

    return (
        <div id='contact' className="page">
            <div className="page-heading">
              <h1 className="title">We’re excited to possibly collaborate!</h1>
              <h3>Let us know you a little better. Please fill out the form below and we’ll reach back within 24 hours.</h3>
            </div>
            <div className="form-container">
            {/* <p className='status-message'>{statusMessage}</p> */}
              <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                  <input type='hidden' name='contact_number' value={contactNumber} />
                  <div className="row">
                    <div className="col col-6">
                      <label>First Name</label>
                      <input {...register("firstName", { required: true})} />
                      <span>{errors.firstName && "First name is required"}</span>
                    </div>
                    <div className="col col-6">
                      <label>Last Name</label>
                      <input {...register("lastName", { required: true})} />
                      {errors.lastName && "Last name is required"}
                    </div>
                  </div>
                  <label>Company Name (optional)</label>
                  <input {...register("company")} />

                  <label>Production size</label>
                  <select {...register("productionSize", { required: true})}>
                      <option value="0-50" defaultValue>0-50</option>
                      <option value="50-100">50-100</option>
                      <option value="100-500">100-500</option>
                      <option value="500+">500+</option>
                  </select>

                  <label>Extra comments</label>
                  <textarea {...register("extra")} />

                  <button type="submit">Submit</button>
              </form>
            </div>
        </div>
    )
}

export default Contact