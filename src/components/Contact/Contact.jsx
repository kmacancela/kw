import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import "./contact.css"

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
`;

const Contact = ({handleNav}) => { 
    
    const navigate = useNavigate();
    const onClick = (to) => {
        navigate(to);
    }

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Styles className="page">
            <h1 className="title">We’re equally excited to possibly collaborate!</h1>
            <h3>Let us know you a little better! Please fill out the form below and we’ll reach back within 24 hours.</h3>
            <div className="contactForm">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        <option value="1" selected>0-50</option>
                        <option value="2">50-100</option>
                        <option value="3">100-500</option>
                        <option value="4">500+</option>
                    </select>
                    {errors.productionSize && "Production size is required"}
                    <label>Extra comments</label>
                    <textarea {...register("explain")} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Styles>
    )
}

export default Contact