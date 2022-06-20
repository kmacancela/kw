import Logo from "../../img/logo.svg"
import Instagram from "../../img/instagram.svg"
import LogoImg from "../../img/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Navbar = () => {
    const Navbar = styled.div`
        display: flex;
        align-items: center;
        height: 8vh;
        width: 100vw;
        /* background: linear-gradient(
            to right, 
            transparent 0%, 
            transparent 50%, 
            #94C3D8 50%, 
            #94C3D8 100%
        ); */
        background-color: #4A626C;
        -webkit-transition: background 300ms linear;
        -ms-transition: background 300ms linear;
        transition: background 300ms linear;
        padding: 0.2em 0;
    `;  
    const Left = styled.div`
        flex: 1;
    `;
    const Right = styled.div`
        flex: 1;
        display: flex;
        justify-content: right;
        padding-right: 1em;
    `;
    const LogoContainer = styled.div`
        cursor: pointer;
        transition: opacity 500ms ease-in;
        padding-left: 1.5em;
    `;
    const LogoSpan = styled.span`
        font-family: 'BrandonGrotesque-Bold';
        font-size: 4em;
        text-decoration: none;
        color: #6CC994;
    `;
    const LogoSpanNext = styled(LogoSpan)`
        color: #94C3D8;
    `;
    const NavMenu = styled.div`
        display: flex;
        align-items: center; 

        .call {
            transform: rotate(-100deg);
            font-size: 2.5em;
        }

        span:not(.call) {
            color: #FFFFFF;
            font-size: 1.5em;
            font-weight: bold;
            padding-left: 0.3em;
        }

        a {
            text-decoration: none;
        }
    `;
    const NavItem = styled.div`
        display: flex;
        align-items: center;
        padding: 0 0.75em;
    `;
    const NavItemSpan = styled.span`
        color: #FFFFFF;
        font-size: 2.5em;
    `;
    const NavItemImg = styled.img`
        width: 2.25em;
    `;

    const navigate = useNavigate();
    const onClick = (to) => {
        navigate(to);
    }

    useEffect(() => {
        var logoEl = document.getElementsByClassName("logo")[0];
        if(logoEl) logoEl.classList.remove("hide");
    }, []);

    return (
        <Navbar>
            <Left>
                <LogoContainer className="logo" onClick={()=>onClick("/")}>
                    <img src={LogoImg} alt="" width={300} />
                </LogoContainer>
            </Left>
            <Right>
                <NavMenu>
                    {/* <NavItem onClick={()=>onClick("/")}>
                        <NavItemImg src={Instagram} alt="instagram" />
                    </NavItem> */}
                    <a href="tel:+3475705804">
                        <NavItem>
                            <NavItemSpan className="material-symbols-outlined call">
                                call
                            </NavItemSpan>
                            <span>(347) 570 5804</span>
                        </NavItem>
                    </a>
                    {/* <NavItem onClick={()=>onClick("/")}>
                        <NavItemSpan className="material-symbols-outlined">
                            menu
                        </NavItemSpan>
                    </NavItem> */}
                </NavMenu>
            </Right>
        </Navbar>
    )
}

export default Navbar