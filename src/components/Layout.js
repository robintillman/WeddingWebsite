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
        backgroundRepeat: 'no-repeat',
        paddingLeft: '100px',
        paddingRight: '100px',
        "@media (max-width: 1200px)": {
            paddingLeft: '50px',
            paddingRight: '50px',
        },
        "@media (max-width: 700px)": {
            paddingLeft: '10px',
            paddingRight: '10px',
        }
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
                <Grid item xs={12}>
                    <Paper className={classes.mainContent}>
                        { children }
                    </Paper>
                </Grid>
            </Grid>
            
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Layout
