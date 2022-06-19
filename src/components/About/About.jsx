import React from 'react'
import styled from 'styled-components';
import CoverImg from '../../img/aboutus.png'

const Styles = styled.div`
    display: flex;
    flex-direction: row;
    height: 92vh;

    .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 35vw;
        width: 35vw;
        padding: 8em 3em;

        .title {
            font-size: 3em;
        }

        p {
            font-size: 1.4em;
            line-height: 1.6em;
        }
    }

    .right {
        min-width: 65vw;
        width: 65vw;
        background-image: url(${CoverImg}); 
        background-size: cover;
    }
`;

const About = () => {
  return (
    <Styles id='about'>
      <div className='left'>
          <h1 className='title'>Our Story</h1>
          <p>We are a family business ran by father and daughter, 
            Carlos and Karina Macancela, specializing in providing
            small and large companies with handmade casualwear. 
            Since 2003, Carlos has been active in New York City, 
            participating in each New York Fashion Week show since 
            and featured on numerous red carpet stars. While we 
            work with top designers, we also partner with blossoming
            independent brands looking to get their designs made and
            ready for launch. We work with direct contacts and 
            suppliers, offering you with the highest quality wear and 
            reliability you can count on.</p>
      </div>
      <div className='right'></div>
    </Styles>
  )
}

export default About
