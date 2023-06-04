import Logo from "../../img/logo.svg"
import Instagram from "../../img/instagram.svg"
import LogoImg from "../../img/logo.png"
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const onClick = (to) => {
        navigate(to);
    }

    useEffect(() => {
        var logoEl = document.getElementsByClassName("logo")[0];
        if(logoEl) logoEl.classList.remove("hide");
    }, []);

    return (
        <div id='topnav'>
            <div className="col left">
                <div className="logo" onClick={()=>onClick("/")}>
                    <img src={LogoImg} alt="" width={300} />
                </div>
            </div>
            <div className="col right">
                <div className="menu">
                    {/* <NavItem onClick={()=>onClick("/")}>
                        <NavItemImg src={Instagram} alt="instagram" />
                    </NavItem> */}
                    <a href="tel:+3475705804">
                        <div className="nav-item">
                            <span className="material-symbols-outlined call">
                                call
                            </span>
                            <span>(347) 570 5804</span>
                        </div>
                    </a>
                    {/* <NavItem onClick={()=>onClick("/")}>
                        <NavItemSpan className="material-symbols-outlined">
                            menu
                        </NavItemSpan>
                    </NavItem> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar