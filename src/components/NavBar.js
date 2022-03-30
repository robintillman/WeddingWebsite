import React from 'react'
import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

const styles = makeStyles({
    appBar: {
        background: '#f9f9f9',
        width: '100%'
    },
    toolBar:{
        paddingTop: "1.15rem",
        background: '#f9f9f9',
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    menuItem: {
        flexGrow: 1
    },
    navLink: {
        color: "black",
        textDecoration: "none",
        "&:hover": {
            color: "#b08700"
        },
    }
});

function NavBar() {
    const classes = styles();
    const [isAppBarOpen, setIsAppBarOpen] = useState(false);

    return (
        <AppBar
            className={classes.appBar}
            elevation={0}
        >
            <Toolbar>
                <Typography className={classes.menuItem} variant="h6" component='div' />
                <Typography className={classes.menuItem} variant="h6" component='div'>
                    <NavLink to="/" className={classes.navLink}>Välkommen</NavLink> 
                </Typography>
                <Typography className={classes.menuItem} variant="h6" component='div'>  
                    <NavLink to="/vigsel" className={classes.navLink}>Vigsel</NavLink>
                </Typography>
                <Typography className={classes.menuItem} variant="h6" component='div'>
                    <NavLink to="/middagochfest" className={classes.navLink}>Middag & fest</NavLink>
                </Typography>
                <Typography className={classes.menuItem} variant="h6" component='div'>
                    <NavLink to="/onskelista" className={classes.navLink}>Önskelista</NavLink>
                </Typography>
                <Typography className={classes.menuItem} variant="h6" component='div'>
                    <NavLink to="/osa" className={classes.navLink}>O.S.A.</NavLink>
                </Typography> 
            </Toolbar>
        </AppBar>
    )
}

export default NavBar