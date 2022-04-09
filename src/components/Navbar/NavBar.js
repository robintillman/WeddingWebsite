import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import './NavBar.css';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='Navbar'>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/">
                    <Typography variant="caption">Välkommen</Typography>
                </a> 
                <a href="/vigsel">
                    <Typography variant="caption">Vigsel</Typography>
                </a>
                <a href="/middagochfest">
                    <Typography variant="caption">Middag & fest</Typography>
                </a>
                <a href="/onskelista">
                    <Typography variant="caption">Önskelista</Typography>
                </a>
                <a href="/osa">
                    <Typography variant="caption">O.S.A.</Typography>
                </a>
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
