import React from 'react';
import { makeStyles, Typography, Grid, Divider } from '@material-ui/core';

const styles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
      marginBottom: '15px',
      marginTop: '10px'
    }
});

function WishlistPage() {
    const classes = styles();
    
    return (
        <Grid item spacing={0} container>
            <Grid item xs={12}>
                <Typography color="secondary" variant="h3" className={classes.container}>
                    Önskelista
                </Typography>
                <Grid item xs={12}>
                    <Divider className={classes.divider}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default WishlistPage
