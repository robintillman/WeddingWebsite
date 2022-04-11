import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import goldHeart from '../resources/images/goldheart.svg';

const styles = makeStyles({
    navBar: {
        paddingRight: '1rem'
    },
    brand: {
        width: '100px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0
    },
    nav: {
        width: 'calc(100% - 1rem - 130px)',
        minHeight: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "@media (max-width: 991px)": {
          width: '100%',
        }
    },
    link: {
        marginLeft: '2rem'
    },
    linkText: {
        "&:hover": {
            opacity: '1',
            color: '#9c7c38'
        }
    },
    toggle: {
        border: 'none',
        width: '30px'
    }
});

function NavBar3() {
    const classes = styles();

    return (
        <Navbar
            bg="light"
            variant="light"
            expand="lg"
            sticky="top"
            className={classes.navBar}
        >
            <Navbar.Brand className={classes.brand}>
                <Nav.Link href='/'>
                    <img 
                        src={goldHeart}
                        style={{ height: 45, width: 45 }}
                        alt="Gold heart"
                    />
                </Nav.Link>
            </Navbar.Brand>

            <Navbar.Toggle className={classes.toggle} />
            
            <Navbar.Collapse>
                <Nav className={classes.nav}>
                    <Nav.Link href="/" className={classes.link}>
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