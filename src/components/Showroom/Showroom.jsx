import React from 'react';
import Logo from "../../img/logo.svg"
import s1 from "../../img/1.jpeg"
import s2 from "../../img/2.jpeg"
import s3 from "../../img/3.jpeg"
import s4 from "../../img/4.jpeg"
import s5 from "../../img/5.jpeg"
import s6 from "../../img/6.jpeg"

const Showroom = () => {
    return (
        <div id='showroom'>
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
        </div>
    )
}

export default Showroom
