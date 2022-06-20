import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from "../../img/logo.svg"
import s1 from "../../img/1.jpeg"
import s2 from "../../img/2.jpeg"
import s3 from "../../img/3.jpeg"
import s4 from "../../img/4.jpeg"
import s5 from "../../img/5.jpeg"
import s6 from "../../img/6.jpeg"

const Styles = styled.div`
    display: flex;
    justify-content: center;

    .container {
        display: flex;
        width: 100%;
        margin-top: 6em;
        overflow-y: auto;
        height: 50em;
    }

    .column {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        flex: 1;

        img {
            width: 27em;
            margin-bottom: 2em;
        }
    }
`;

const Showroom = () => {
    return (
        <Styles id='showroom'>
            {/* <img src={Logo} alt="" /> */}
           <div className="container">
               <div className="column">
                   <img src={s1} alt="" />
                   <img src={s3} alt="" />
               </div>
               <div className="column">
                    <img src={s2} alt="" />
                    <img src={s4} alt="" />
               </div>
               <div className="column">
                    <img src={s5} alt="" />
                    <img src={s6} alt="" />
               </div>
           </div>
        </Styles>
    )
}

export default Showroom
