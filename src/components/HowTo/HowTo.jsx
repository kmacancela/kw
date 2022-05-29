import React, { useEffect } from 'react';
import "./howTo.css"
import { useNavigate } from 'react-router-dom'
import Step1 from '../../img/first-step.png'
import Step2 from '../../img/second-step.png'
import Step3 from '../../img/third-step.png'

const HowTo = ({handleNav}) => {

    useEffect(() => {
        handleNav(1);
    });
    // handleNav(1);
    const navigate = useNavigate();
    const onClick = (to) => {
        navigate(to);
    }

    return (
        <div id="how-to" className="page">
            <div className="steps-bar">
                <div className="step">1</div>
                <div className="step">2</div>
                <div className="step">3</div>
            </div>
            <div className="description">
                <div class="step">
                    <h2>Set up an appointment to collect designs and fabrics.</h2>
                    <img src={Step1} alt="" />
                </div>
                <div class="step">
                    <h2>Stay informed throughout the process.</h2>
                    <img src={Step2} alt="" />
                </div>
                <div class="step">
                    <h2>Schedule a pickup or a free delivery*.</h2>
                    <img src={Step3} alt="" />
                </div>
            </div>
            <button onClick={()=>onClick("/contact")}>Contact Us</button>
        </div>
    )
}

export default HowTo