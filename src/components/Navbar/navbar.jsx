import "./navbar.css"
import { Link } from 'react-router-dom'
import Logo from "../../img/logo.svg"
import Instagram from "../../img/instagram.svg"

const Navbar = () => {
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
                    <div className="nav-item">
                        <Link to="/">
                            <img src={Instagram} alt="call" />
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/">
                            <span className="material-symbols-outlined">
                                android_dialer
                            </span>
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/">
                            <span className="material-symbols-outlined">
                                menu
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar