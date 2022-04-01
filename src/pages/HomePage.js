import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';

const styles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
  
function HomePage() {
    const classes = styles();
    
    return (
        <Grid item spacing={0} container>
            <Grid item xs={12}>
                <Typography variant="h3" className={classes.container}>
                    VI SKA GIFTA OSS!
                </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h6" className={classes.container}>
                Isabella & Robin
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h6" className={classes.container}>
                17 september 2022
            </Typography>
            </Grid>
        </Grid>
    )
}

export default HomePage
