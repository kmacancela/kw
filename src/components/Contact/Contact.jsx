import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import "./contact.css"

const Contact = ({handleNav}) => {
    useEffect(() => {
        handleNav(2);
    });
    
    const navigate = useNavigate();
    const onClick = (to) => {
        navigate(to);
    }

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div id="contact" className="page">
            <h1 className="title">We’re equally excited to possibly collaborate!</h1>
            <h3>Let us know you a little better! Please fill out the form below and we’ll reach back within 24 hours.</h3>
            <div className="contactForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className='col'>
                            <label>First Name</label>
                            <input {...register("firstName", { required: true})} />
                            {errors.firstName && "First name is required"}
                        </div>
                        <div className='col'>
                            <label>Last Name</label>
                            <input {...register("lastName", { required: true})} />
                            {errors.lastName && "Last name is required"}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Company Name (optional)</label>
                            <input {...register("company")} />
                        </div>
                        <div className="col">
                            <select {...register("productionSize", { required: true})}>
                                <option value="0" selected disabled>Production size</option>
                                <option value="1">0-50</option>
                                <option value="2">50-100</option>
                                <option value="3">100-500</option>
                                <option value="4">500+</option>
                            </select>
                            {errors.productionSize && "Production size is required"}
                        </div>
                    </div>
                    <div className="row">
                        <textarea {...register("explain")} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact