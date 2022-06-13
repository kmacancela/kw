import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';
import styled from 'styled-components';
import CoverImg from '../../img/main.png';

const Intro = ({ handleNav }) => {
    const Intro = styled.div``;
    const Left = styled.div`
        flex: 1;
        min-width: 50vw;
        background-image: url(${CoverImg}); 
        background-size: cover;
    `;
    const Right = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        padding: 0 50px;
    `;
    const Title = styled.h3`
        padding-right: 50px;
    `;
    const Wrapper = styled.div`
        transition: opacity 500ms ease-in;
    `;

    useEffect(() => {
        handleNav(0);
    },[]);

    const navigate = useNavigate();
    const onClick = (to) => {
        navigate(to);
    }
    
    return (
        <Intro id="intro" className="page">
            <Left></Left>
            <Right>
                <Wrapper>
                    <h1>We make clothes,<br/>so you don't have to.</h1>
                    <Title><b>Let us help.</b> We collaborate with independent labels to deliver quality clothing at your doorsteps. Based in New York City, we have worked with top designers and startups to bring your designs into products.</Title>
                    <button onClick={()=>onClick("/how-to")}>Learn more</button>
                </Wrapper>
            </Right>
        </Intro>
    )
}

export default Intro