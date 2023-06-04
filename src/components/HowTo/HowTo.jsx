import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Step1 from '../../img/first-step.png'
import Step2 from '../../img/second-step.png'
import Step3 from '../../img/third-step.png'
import Circle from '../../img/circle.svg'

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
        <div id="how-to" className="page">
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
        </div>
    )
}

export default HowTo