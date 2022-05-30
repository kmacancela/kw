import "./intro.css"
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';

const Intro = ({ handleNav }) => {
    const navigate = useNavigate();
    const onClick = (to) => {
        navigate(to);
    }
    
    useEffect(() => {
            var wrapperEl = document.getElementById("intro").getElementsByClassName("wrapper")[0];
            if(wrapperEl) wrapperEl.classList.remove("hide");
        }, 1000);
    
    return (
        <div id="intro" className="page">
            <div className="left"></div>
            <div className="right">
                <div className="wrapper hide">
                    <h1>We make clothes,<br/>so you don't have to.</h1>
                    <h3><b>Let us help.</b> We collaborate with independent labels to deliver quality clothing at your doorsteps. Based in New York City, we have worked with top designers and startups to bring your designs into products.</h3>
                    <button onClick={()=>onClick("/how-to")}>Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Intro