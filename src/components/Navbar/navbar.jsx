import "./navbar.css"
import Logo from "../../img/logo.svg"
import Instagram from "../../img/instagram.svg"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const onClick = (to) => {
        navigate(to);
    }

    return (
        <div className="navbar">
            <div className="left">
                <div className="logo">
                    <a href="/">
                        <img src={Logo} alt="" />
                    </a>
                </div>
            </div>
            <div className="right">
                <div className="nav-menu">
                    <div className="nav-item" onClick={()=>onClick("/hi")}>
                        <img src={Instagram} alt="call" />
                    </div>
                    <div className="nav-item" onClick={()=>onClick("/hi")}>
                        <span className="material-symbols-outlined">
                            android_dialer
                        </span>
                    </div>
                    <div className="nav-item" onClick={()=>onClick("/hi")}>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar