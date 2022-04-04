import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import PageNotFoundImage from '../resources/404.jpg';

const styles = makeStyles({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${PageNotFoundImage})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    maxWidth: '100%',
    height: '100vh',
    borderRadius: 5,
    display: 'flex'
  }
});

function PageNotFound() {
    const classes = styles();
    
    return (
        <Grid item spacing={0} container>
            <Grid item xs={12} className={classes.image} />
        </Grid>
    )
}

export default PageNotFound
