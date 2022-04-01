import React from 'react'
import { makeStyles, Typography, Grid, Divider } from '@material-ui/core';
import CountDownClock from '../components/CountDownClock/CountDownClock';

const styles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function Footer() {
    const classes = styles();
    
    return (
        <Grid item spacing={0} container>
            <Grid item xs={12} container>
                <CountDownClock />
            </Grid>
        </Grid>
    )
}

export default Footer
