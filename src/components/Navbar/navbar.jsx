import "./navbar.css"
import Logo from "../../img/logo.svg"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="/">
                    <img src={Logo} alt="" />
                </a>
            </div>
            <div className="nav-menu"></div>
        </div>
    )
}

export default Navbar