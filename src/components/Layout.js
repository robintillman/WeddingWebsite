import React from 'react'
import { makeStyles, Grid, Paper } from '@material-ui/core';
import NavBar from './Navbar/NavBar';
import Footer from './Footer';
import backgroundImage from '../resources/backgroundimage.jpg';

const styles = makeStyles({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat'
      },
    mainContent: {
        minHeight: '75vh',
        flexDirection: "column",
        alignItems: "center",
        padding: "3rem"
    }
});

function Layout({ children }) {
    const classes = styles();

    return (
        <div>
            {/* Navigation */}
            <NavBar />

            {/* Main content */}
            <Grid container className={classes.background}>
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <Paper className={classes.mainContent}>
                        { children }
                    </Paper>
                </Grid>
                <Grid item xs={1}  />
            </Grid>
            
            <Footer />
        </div>
    )
}

export default Layout
