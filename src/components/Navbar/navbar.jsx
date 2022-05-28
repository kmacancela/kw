import "./navbar.css"
import Logo from "../../img/logo.png"
import Instagram from "../../img/instagram.svg"
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const onClick = (to) => {
        navigate(to);
    }

    return (
        <div className="navbar">
            <div className="left">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
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