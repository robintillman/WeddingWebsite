import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';

const styles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function WishlistPage() {
    const classes = styles();
    
    return (
        <Grid item spacing={0} container>
            <Grid item xs={12}>
                <Typography variant="h3" className={classes.container}>
                    Önskelista
                </Typography>
            </Grid>
        </Grid>
    )
}

export default WishlistPage
