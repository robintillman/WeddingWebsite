import React from 'react'
import { makeStyles, Grid } from '@material-ui/core';
import CountDownClock from '../components/CountDownClock/CountDownClock';

const styles = makeStyles({
    container: {
        borderRadius: '5px',
        maxWidth: '100%',
        maxHeight: '100%'
    }
});

function Footer() {
    const classes = styles();
    
    return (
        <Grid className="container" item xs={12} container>
            <CountDownClock />
        </Grid>
    )
}

export default Footer
