import Logo from "../../img/logo.svg"
import Instagram from "../../img/instagram.svg"
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Navbar = () => {
    const Navbar = styled.div`
        display: flex;
        align-items: center;
        min-height: 10vh;
        width: 100vw;
        background: linear-gradient(
            to right, 
            transparent 0%, 
            transparent 50%, 
            #94C3D8 50%, 
            #94C3D8 100%
        );
        -webkit-transition: background 300ms linear;
        -ms-transition: background 300ms linear;
        transition: background 300ms linear;
    `;  
    const Left = styled.div`
        flex: 1;
    `;
    const Right = styled.div`
        flex: 1;
        display: flex;
        justify-content: right;
    `;
    const LogoContainer = styled.div`
        transition: opacity 500ms ease-in;
        padding-left: 1.5em
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
    `;
    const NavItem = styled.div`
        cursor: pointer;
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
                <LogoContainer className="logo">
                    <LogoSpan>kary</LogoSpan><LogoSpanNext>waves</LogoSpanNext>
                </LogoContainer>
            </Left>
            <Right>
                <NavMenu>
                    <NavItem onClick={()=>onClick("/hi")}>
                        <NavItemImg src={Instagram} alt="instagram" />
                    </NavItem>
                    <NavItem onClick={()=>onClick("/hi")}>
                        <NavItemSpan className="material-symbols-outlined">
                            call
                        </NavItemSpan>
                    </NavItem>
                    <NavItem onClick={()=>onClick("/hi")}>
                        <NavItemSpan className="material-symbols-outlined">
                            menu
                        </NavItemSpan>
                    </NavItem>
                </NavMenu>
            </Right>
        </Navbar>
    )
}

export default Navbar