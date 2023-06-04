import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';
import CoverImg from '../../img/main.png';

const Intro = ({ handleNav }) => {
    useEffect(() => {
        handleNav(0);
    },[]);

    const navigate = useNavigate();
    const onClick = (to) => {
        navigate(to);
    }
    
    return (
        <div id="intro" className="page">
            <div className='col left'></div>
            <div className='col right'>
                <div className='wrapper'>
                    <h1>We make clothes,<br/>so you don't have to.</h1>
                    <h3 className='title'><b>Let us help.</b> We collaborate with independent labels to deliver quality clothing at your doorsteps. Based in New York City, we have worked with top designers and startups to bring your designs into products.</h3>
                    <button onClick={()=>onClick("/how-to")}>Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Intro