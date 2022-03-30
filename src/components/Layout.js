import React from 'react'

import { makeStyles } from '@material-ui/core';

import NavBar from './NavBar';
import Footer from './Footer';

const styles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            marginRight: '10%',
            marginLeft: '10%'
        },
        page: {
            background: '#f9f9f9',
            width: '100%'
        },
        toolbar: theme.mixins.toolbar
    }
});

function Layout({ children }) {
    const classes = styles();

    return (
        <div className={classes.root}>
            {/* Navigation */}
            <NavBar />

            {/* Main content */}
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                { children }
            </div>

            {/* Footer */}
        </div>
    );
}

export default Layout
