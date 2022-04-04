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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "5rem"
    }
});

function Layout({ children }) {
    const classes = styles();

    return (
        <Grid container spacing={2} direction="column">
            {/* Navigation */}
            <Grid item xs={12} container>
                <Grid item md={1} />
                <Grid item xs={12} md={10} >
                    <NavBar />
                </Grid>
                <Grid item md={1}  />
            </Grid>

            {/* Main content */}
            <Grid  className={classes.background} item xs={12} container>
                <Grid item md={1} />
                <Grid item xs={12} md={10} >
                    <Paper className={classes.mainContent}>
                        { children }
                    </Paper>
                </Grid>
                <Grid item md={1}  />
            </Grid>
            
            <Grid item xs={12} container>
                <Footer />
            </Grid>
        </Grid>
    )
}

export default Layout
