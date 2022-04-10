import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import goldHeart from '../resources/images/goldheart.svg';

const styles = makeStyles({
    navBar: {
        padding: '1rem'
    },
    brand: {
    },
    nav: {
        width: 'calc(100% - 55px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstLink: {
        margin: 0,
    },
    link: {
        marginLeft: '2rem'
    },
    linkText: {
        "&:hover": {
            opacity: '1',
            color: '#9c7c38'
        }
    }
});

function NavBar3() {
    const classes = styles();

    return (
        <Navbar
            bg="light"
            variant="light"
            expand="md"
            sticky="top"
            className={classes.navBar}
        >
            <Navbar.Brand className={classes.brand}>
                <Typography variant="h4" color="secondary">
                    I
                    <img 
                        src={goldHeart}
                        style={{ height: 45, width: 45 }}
                        alt="Gold heart"
                     />
                    R
                </Typography>
            </Navbar.Brand>

            <Navbar.Toggle />
            
            <Navbar.Collapse>
                <Nav className={classes.nav}>
                    <Nav.Link href="/" className={classes.firstLink}>
                        <Typography variant="caption" color="primary" className={classes.linkText}>
                            Välkommen
                        </Typography>
                    </Nav.Link>
                    <Nav.Link href="/vigsel" className={classes.link}>
                        <Typography variant="caption" color="primary" className={classes.linkText}>
                            Vigsel
                        </Typography>
                    </Nav.Link>
                    <Nav.Link href="/middagochfest" className={classes.link}>
                        <Typography variant="caption" color="primary" className={classes.linkText}>
                            Middag & fest
                        </Typography>
                    </Nav.Link>
                    <Nav.Link href="/onskelista" className={classes.link}>
                        <Typography variant="caption" color="primary" className={classes.linkText}>
                            Önskelista
                        </Typography>
                    </Nav.Link>
                    <Nav.Link href="/osa" className={classes.link}>
                        <Typography variant="caption" color="primary" className={classes.linkText}>
                            O.S.A.
                        </Typography>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>    
    )
}

export default NavBar3