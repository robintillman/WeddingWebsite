import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='Navbar'>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/">Välkommen</a> 
                <a href="/vigsel">Vigsel</a>
                <a href="/middagochfest">Middag & fest</a>
                <a href="/onskelista">Önskelista</a>
                <a href="/osa">O.S.A.</a>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default NavBar
