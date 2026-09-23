import { useState } from "react";

const navItems = [
    { label: "Spawn", target: "spawn" },
    { label: "About", target: "about" },
    { label: "Inventory", target: "skills" },
    { label: "Builds", target: "projects" },
    { label: "XP", target: "learning" },
    { label: "Quests", target: "quests" },
    { label: "End", target: "contact" }
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (target) => {
        const element = document.getElementById(target);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }

        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-inner">

                <button
                    className="navbar-logo"
                    onClick={() => scrollToSection("spawn")}
                >
                    ⛏ HARSHIT
                </button>

                <button
                    className="mobile-menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    ☰
                </button>

                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    {navItems.map((item) => (
                        <button
                            key={item.target}
                            onClick={() => scrollToSection(item.target)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

            </div>
        </nav>
    );
}

export default Navbar;