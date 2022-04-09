import React from 'react'
import { makeStyles, Grid, Paper } from '@material-ui/core';
import NavBar from './Navbar/NavBar';
import Footer from './Footer';
import backgroundImage from '../resources/images/backgroundimage.jpg';

const styles = makeStyles({
    mainContentContainer: {
        minHeight: "100%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat'
      },
    mainContent: {
        minHeight: '74vh',
        padding: "3rem",
        marginTop: "1rem",
        marginBottom: "1rem"
    }
});

function Layout({ children }) {
    const classes = styles();

    return (
        <div>
            {/* Navigation */}
            <NavBar />

            {/* Main content */}
            <Grid container className={classes.mainContentContainer}>
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <Paper className={classes.mainContent}>
                        { children }
                    </Paper>
                </Grid>
                <Grid item xs={1}  />
            </Grid>
            
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Layout
