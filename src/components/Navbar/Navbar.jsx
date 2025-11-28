import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ item1, item2, item4 }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const handleScroll = () => {
        const aboutMeSection = document.getElementById('about-me');
        const educationSection = document.getElementById('education');
        const myProjectsSection = document.getElementById('my-projects');
        const contactMeSection = document.getElementById('contact-me');

        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (contactMeSection && scrollPosition >= contactMeSection.offsetTop) {
            setActiveSection('contact-me');
        } else if (myProjectsSection && scrollPosition >= myProjectsSection.offsetTop) {
            setActiveSection('my-projects');
        } else if (educationSection && scrollPosition >= educationSection.offsetTop) {
            setActiveSection('education');
        } else if (aboutMeSection && scrollPosition >= aboutMeSection.offsetTop) {
            setActiveSection('about-me');
        } else {
            setActiveSection(null);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => { setIsOpen(!isOpen); };

    const handleLinkClick = () => {}

    const renderMenuItems = () => {
        return (
            <>
                <li className={`ul-menu-li ${activeSection === 'about-me' ? 'active' : ''}`}>
                    <a href="#about-me" onClick={handleLinkClick}>{item1}</a>
                </li>
                <li className={`ul-menu-li ${activeSection === 'education' ? 'active' : ''}`}>
                    <a href="#education" onClick={handleLinkClick}>{item2}</a>
                </li>
                {/* <li className={`ul-menu-li ${activeSection === 'my-projects' ? 'active' : ''}`}>
                    <a href="#my-projects" onClick={handleLinkClick}>{item3}</a>
                </li> */}
                <li className={`ul-menu-li ${activeSection === 'contact-me' ? 'active' : ''}`}>
                    <a href="#contact-me" onClick={handleLinkClick}>{item4}</a>
                </li>
            </>
        );
    };

    return (
        <nav id="navbar">
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <ul id="ul-menu" className={isOpen ? 'open' : ''}>
                {renderMenuItems()}
            </ul>
        </nav>
    );
}
