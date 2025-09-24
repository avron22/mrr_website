import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
    const [isModelsOpen, setIsModelsOpen] = useState(false);

    return (
        <header className="nav">
            <a className="siteLogo" href="/"><img src="/src/assets/logos/site-logo.png" alt="Site Logo" /></a>
            <nav>
                <NavLink to="/mainboard" end>MAIN BOARD</NavLink>
                <NavLink to="/infocus">INFOCUS</NavLink>
                
                {/* Models with Submenu */}
                <div 
                    className="nav-dropdown"
                    onMouseEnter={() => setIsModelsOpen(true)}
                    onMouseLeave={() => setIsModelsOpen(false)}
                >
                    <NavLink to="/models" className="nav-dropdown-trigger">
                        MODELS
                        <span className={`dropdown-arrow ${isModelsOpen ? 'open' : ''}`}>▼</span>
                    </NavLink>
                    
                    {isModelsOpen && (
                        <div className="nav-submenu">
                            <NavLink to="/models/kids">Kids</NavLink>
                            <NavLink to="/models/teens">Teens</NavLink>
                            <NavLink to="/models/thai">Thai</NavLink>
                        </div>
                    )}
                </div>
                
                <NavLink to="/grwmrr">GRWMRR</NavLink>
                <NavLink to="/contact">CONTACT US</NavLink>
            </nav>
        </header>
    )
}