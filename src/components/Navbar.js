import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
    dropdownLink: {
        marginLeft: '2rem'
    },
    dropdownLinkItem: {
        backgroundColor: 'white',
        "&:active": {
            opacity: '1',
            color: '#9c7c38'
        }
    },
    linkText: {
    },
    toggle: {
    }
});

function NavBar() {
    const classes = styles();

    return (
        <Navbar
            bg="light"
            expand="lg"
            sticky="top"
            collapseOnSelect
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
                    <Nav.Link href="/">
                        <Typography variant="caption" color="primary" className={classes.linkText}>
                            Välkommen
                        </Typography>
                    </Nav.Link>

                    <Nav.Link href="/vigsel" className={classes.link}>
                        <Typography variant="caption" color="primary" className={classes.linkText}>
                            Vigsel
                        </Typography>
                    </Nav.Link>

                    <NavDropdown title={
                            <Typography variant="caption" color="primary" className={classes.linkText}>
                                Middag & fest
                            </Typography>
                        }
                        id="basic-nav-dropdown"
                        className={classes.dropdownLink}
                    >
                        <NavDropdown.Item href="/middagochfest/program" className={classes.dropdownLinkItem}>
                            <Typography variant="caption" color="primary" className={classes.linkText}>
                                Kvällen
                            </Typography>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/middagochfest/toast" className={classes.dropdownLinkItem}>
                            <Typography variant="caption" color="primary" className={classes.linkText}>
                                Toastmadame & toastmaster
                            </Typography>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/middagochfest/boende" className={classes.dropdownLinkItem}>
                            <Typography variant="caption" color="primary" className={classes.linkText}>
                                Boende
                            </Typography>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="/onskelista" className={classes.link}>
                        <Typography variant="caption" color="primary" className={classes.linkText}>
                            Önskelista
                        </Typography>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>    
    )
}

export default NavBar