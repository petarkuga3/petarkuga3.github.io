import React, { useState, useEffect } from "react";
import { useTheme } from "../../features/theme/ThemeContext";
import { useLanguage } from "../../features/language/LanguageContext";

function Settings() {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className="settings-menu">
            <button onClick={toggleMenu} className="settings-button">
                <i className="fas fa-cog"></i>
            </button>
            <div className={`menu-content ${menuOpen ? "open" : ""}`}>
                <button onClick={toggleLanguage} className="language-button">
                    <p>{language}</p>
                </button>
                <button onClick={toggleTheme} className="theme-button">
                    {theme === 'light' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                </button>
            </div>
        </div>
    );
}

export default Settings;
