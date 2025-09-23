import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <header className="nav">
            <a className="brand" href="/">MRR Portfolio</a>
            <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/projects">Projects</NavLink>
            </nav>
        </header>
    )
}