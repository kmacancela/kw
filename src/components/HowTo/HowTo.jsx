import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Step1 from '../../img/first-step.png'
import Step2 from '../../img/second-step.png'
import Step3 from '../../img/third-step.png'
import Circle from '../../img/circle.svg'
import styled from 'styled-components';

const Styles = styled.div`
    flex-direction: column;
    align-items: center;

    .button-container {
        transition: 1s opacity ease-in; }
    .description {
        display: flex;
        justify-content: space-between;
        width: 75vw;
        margin-top: -1em;
        margin-bottom: 1em; }
        .description .step {
            transition: 1s opacity ease-in;
            align-items: center;
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 20em; }
            .description .step .step-num {
                display: flex;
                align-items: center;
                justify-content: center;
                background-image: url(${Circle});
                font-weight: bold;
                width: 3.5em;
                height: 3.5em; }
            .description .step img {
                width:100%;
                border-radius: 0.5em; }
`;

const HowTo = () => {
    const [hide1, sethide1] = useState(0);
    const [hide2, sethide2] = useState(0);
    const [hide3, sethide3] = useState(0);
    const [hideBtn, sethideBtn] = useState(0);

    useEffect(() => {
        var steps = document.getElementsByClassName("step");
        for(var i = 0; i < steps.length; i++) {
            if(i == 0) {
                setTimeout(() => {
                    sethide1(1);
                }, 100);
            }
            else if(i == 1) {
                setTimeout(() => {
                    sethide2(1);
                }, 400);
            }
            else if(i == 2) {
                setTimeout(() => {
                    sethide3(1);
                    sethideBtn(1);
                }, 700);
            }
        }
    });

    const navigate = useNavigate();
    const onClick = (to) => navigate(to);

    return (
        <Styles id="how-to" className="page">
            <div className="description">
                <div className="step" style={{opacity: hide1}}>
                    <div className="step-num">1</div>
                    <h2>Set up an appointment to collect designs and fabrics.</h2>
                    <img src={Step1} alt="" />
                </div>
                <div className="step" style={{opacity: hide2}}>
                    <div className="step-num">2</div>
                    <h2>Stay informed throughout the process.</h2>
                    <img src={Step2} alt="" />
                </div>
                <div className="step" style={{opacity: hide3}}>
                    <div className="step-num">3</div>
                    <h2>Schedule a pickup or a free delivery*.</h2>
                    <img src={Step3} alt="" />
                </div>
            </div>
            <div className="button-container" style={{opacity: hideBtn}}>
                <button onClick={()=>onClick("/contact")}>Contact Us</button>
            </div>
        </Styles>
    )
}

export default HowTo