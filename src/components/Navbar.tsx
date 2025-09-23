import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <header className="nav">
            <a className="brand" href="/"><img src="/src/assets/site-logo.png" alt="Site Logo" /></a>
            <nav>
                <NavLink to="/mainboard" end>MAIN BOARD</NavLink>
                <NavLink to="/infocus">INFOCUS</NavLink>
                <NavLink to="/models">MODELS</NavLink>
                <NavLink to="/grwmrr">GRWMRR</NavLink>
                <NavLink to="/contact">CONTACT US</NavLink>
            </nav>
        </header>
    )
}