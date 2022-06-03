import "./navbar.css"
import Logo from "../../img/logo.png"
import Instagram from "../../img/instagram.svg"
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

const Navbar = ({nav, handleNav}) => {
    const navigate = useNavigate();
    const onClick = (to) => {
        navigate(to);
    }

    var navbarEl = document.querySelector(".navbar");
    switch(nav) {
        case 0:
            if(navbarEl) navbarEl.classList.remove("uno");
            break;
        case 1:
            if(navbarEl) navbarEl.classList.add("uno");
            break;
        case 2:
            if(navbarEl) navbarEl.classList.add("dos");
            break;
        default:
            console.log("default");
    }

    useEffect(() => {
        var logoEl = document.getElementsByClassName("logo")[0];
        if(logoEl) logoEl.classList.remove("hide");
    }, []);

    return (
        <div className="navbar">
            <div className="left">
                <div className="logo hide">
                    <Link to="/" onClick={() => handleNav(0)}>
                        <img src={Logo} alt="" />
                    </Link>
                </div>
            </div>
            <div className="right">
                <div className="nav-menu">
                    <div className="nav-item" onClick={()=>onClick("/hi")}>
                        <img src={Instagram} alt="instagram" />
                    </div>
                    <div className="nav-item" onClick={()=>onClick("/hi")}>
                        <span className="material-symbols-outlined">
                            call
                        </span>
                    </div>
                    <div className="nav-item" onClick={()=>onClick("/hi")}>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </div>
                </div>
            </div>
            <div className="hidden-bg"></div>
        </div>
    )
}

export default Navbar